const request = require('request'); 

const forecast = (longitude, latitude, callback ) => {
    const url = `https://api.darksky.net/forecast/3e9b2f0fafb1c3a2d7b7236afd1324ce/${latitude},${longitude}?units=si`;
    request({url, json : true}, (error, {body}) => {
        if(error){
            callback(error, undefined)
        } else if (body.error){
            callback('Bad data passed as search', undefined)
        } else {
            // const {temperature, precipProbability} = body.currently
            // callback(undefined, {
            //     temperature,
            //     chanceOfRain: precipProbability
            // })
            
            
            const {summary, temperature, precipProbability,visibility, pressure} = body.currently;
            callback(undefined, {
                endUserMessage: `It is currently ${summary}, the temprature is ${temperature}, chances of rain is ${precipProbability}, the pressure is ${pressure} and the visibility is ${visibility}`, 
            })
        }
    }) 
}


module.exports = {
    forecast : forecast
}