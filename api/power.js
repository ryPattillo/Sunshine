import axios from 'axios';

export default function main () {

    axios.get(
        "https://power.larc.nasa.gov/api/temporal/hourly/point?start=20210820&end=20210920&latitude=32.123&longitude=90.1243&community=ag&parameters=CLRSKY_SFC_SW_DWN&user=ryan&header=true&time-standard=lst"
    )
    .then(function (response) {
        // handle success
        return "test"
        //response["data"]["properties"]
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
 

}