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
  } else if (freq == "daily") {
    var formattedStartDate = format(startDate, "yyyyMMdd");
    var formattedEndDate = format(endDate, "yyyyMMdd");
  }
  
  var url = "https://power.larc.nasa.gov/api/temporal/" + freq +
            "/point?parameters=" + parameter +
            "&community=RE&longitude=" + longitude +
            "&latitude=" + latitude +
            "&start=" + formattedStartDate +
            "&end=" + formattedEndDate +
            "&format=JSON"
  
  axios.get(url).then(
    function (response) {
      var preparedData = {};
      preparedData["coordinates"] = response.data["geometry"]["coordinates"];
      preparedData["parameter"] = response.data["parameters"][parameter]["longname"];
      preparedData["units"] = response.data["parameters"][parameter]["units"];
      preparedData["data"] = [];

      var xVal = 0;
      for (const [key, value] of Object.entries(response.data["properties"]["parameter"][parameter])) {
        xVal++;
        preparedData["data"].push({x: xVal, y: value, meta: key})
      }

      console.log(preparedData["parameter"]);
      console.log(freq)
      setData(preparedData);
    }
  ).catch(function (error) {console.log(error);})
}