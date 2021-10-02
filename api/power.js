import axios from 'axios';

export default function Api(freq,setData,latitude,longitude,paramter,startDate,endDate) {

    url = "https://power.larc.nasa.gov/api/"+freq+"point?start="+startDate+"&end="+endDate+"&latitude="+latitude+"longitude="+longitude+"&community=ag&parameters="+parameter+"user=ryan&header=true&time-standard=lst"


    axios.get(
      url
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