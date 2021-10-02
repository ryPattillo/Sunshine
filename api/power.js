import axios from 'axios';

export default function test(setData) {
    axios.get(
      "https://power.larc.nasa.gov/api/temporal/hourly/point?start=20210820&end=20210920&latitude=32.123&longitude=90.1243&community=ag&parameters=CLRSKY_SFC_SW_DWN&user=ryan&header=true&time-standard=lst"
    )
    .then(function (response) {
      // handle success
      console.log(response["data"]["properties"]["parameter"]["CLRSKY_SFC_SW_DWN"]["2021090410"])
      setData(response["data"]["properties"]["parameter"]["CLRSKY_SFC_SW_DWN"]["2021090410"])
        //response["data"]["properties"]
    })
    .catch(function (error) {
        console.log(error);
    })
  
  }