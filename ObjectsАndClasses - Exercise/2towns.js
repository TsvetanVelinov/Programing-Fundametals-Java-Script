function towns (townList) {

  let townInfo = {};

    for (const infoLine of townList) {
        
        let [cityName, latitude, longitude] = infoLine.split(` | `)

       townInfo.town = cityName;
       townInfo.latitude = Number(latitude).toFixed(2);
       townInfo.longitude = Number(longitude).toFixed(2);

       console.log(townInfo);

    }

}


towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])