import axios from 'axios';
const {format} = require('date-fns');

export default function getApiData(setData,freq,latitude,longitude,parameter,startDate,endDate) {

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

      for (const [key, value] of Object.entries(response.data["properties"]["parameter"][parameter])) {
        preparedData["data"].push({x: key, y: value})
      }

      console.log(preparedData["parameter"]);
      console.log(freq)
      setData(preparedData);
    }
  ).catch(function (error) {console.log(error);})
}