import axios from 'axios';
import {format} from 'date-fns';

export default function getApiData(setData,freq,latitude,longitude,parameter,startDate,endDate) {



  //startDate= new Date("2020-01-01T23:45Z") // Initial Date
  //endDate= new Date("2020-05-31T23:45Z") // End Date
  startDate = new Date(startDate+"T23:45Z"); // Initial Date
  endDate = new Date(endDate+"T23:45Z"); // End Date

  if (freq == "monthly") {
    var formattedStartDate = format(startDate, "yyyy");
    var formattedEndDate = format(endDate, "yyyy");
  } else {
    var formattedStartDate = format(startDate, "yyyyMMdd");
    var formattedEndDate = format(endDate, "yyyyMMdd");
  }
  
  var temporal = (freq == "weekly") ? "daily" : freq;

  var url = "https://power.larc.nasa.gov/api/temporal/" + temporal +
            "/point?parameters=" + parameter +
            "&community=RE&longitude=" + longitude +
            "&latitude=" + latitude +
            "&start=" + formattedStartDate +
            "&end=" + formattedEndDate +
            "&format=JSON"
  console.log(url);
  axios.get(url).then(
    function (response) {
      var preparedData = {};
      preparedData["coordinates"] = response.data["geometry"]["coordinates"];
      preparedData["parameter"] = response.data["parameters"][parameter]["longname"];
      preparedData["units"] = response.data["parameters"][parameter]["units"];
      preparedData["data"] = [];

      var xVal = 0;
      var weekTotal = 0;
      for (const [key, value] of Object.entries(response.data["properties"]["parameter"][parameter])) {

        if (parseInt(key.slice(4,6)) > 12) { // skip the weird 13th month returned by API
          continue;
        }

        var formattedDate = "";
        if (freq == "weekly") {
          var dateString = key.slice(0,4)+"-"+key.slice(4,6)+"-"+key.slice(6,8)+"T23:45Z";
          var date = new Date(dateString);

          var day = date.getDay();
          if (xVal == 0) { // We want to start at week 1
            xVal++;
          }

          weekTotal += value;
          if (day == 0) {
            var weekAvg = weekTotal / 7;
            var weekLabel = key.slice(0,4) + " Week " + xVal;
            preparedData["data"].push({x: xVal, y: weekAvg, meta: weekLabel})
            // reset weekTotal and increment XVal
            weekTotal = 0;
            xVal++;
          }

        } else if ("monthly") {
          console.log(key);
          var dateString = key.slice(0,4)+"-"+key.slice(4,6)+"-01"+"T23:45Z";
          var date = new Date(dateString);
          formattedDate = format(date, "MMM, yyyy")
          xVal++;
          preparedData["data"].push({x: xVal, y: value, meta: formattedDate});
        } else {
          var dateString = key.slice(0,4)+"-"+key.slice(4,6)+"-"+key.slice(6,8)+"T23:45Z";
          var date = new Date(dateString);
          formattedDate = format(date, "MM/dd/yyyy");
          xVal++;
          preparedData["data"].push({x: xVal, y: value, meta: formattedDate});
        }

      }

      console.log(preparedData);
      console.log(freq);
      setData(preparedData);
    }
  ).catch(function (error) {console.log(error);})
}