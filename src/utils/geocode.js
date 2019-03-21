const request = require('request'); 


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoieG96eGFuIiwiYSI6ImNqdGVudWl0MDE4YjYzeXFqcm5mamI4b3QifQ.i1VMdhKU9CR0PwO05vQEGA`;
    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to reach the application', undefined);
        } else if (body.features.length === 0 ){
            callback('Unable to find the data, try a different search', undefined); 
        } else {
            //const {latitude, location, longitude} = 
            callback(undefined, {
                latitude : body.features[0].center[0],
                longitude : body.features[0].center[1],
                location : body.features[0].place_name
            })
        }

    })
}

module.exports = {
    geocode:geocode
}

