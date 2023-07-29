const request = require("request")

const forecast = (latitude , longtitude , callback ) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longtitude + "&appid=cf10418778f53a094578a339c874a764" 
    
    request ({url, json : true} , (error , response) => {
         
        if(error) {
             callback ("Unable to connect weather service" , undefined)
        } else if(response.body.message){
             callback (response.body.message, undefined)
        } else {
                callback (undefined , response.body.name + ' It Is  ' + response.body.weather[0].main 
                + " And Temp   " + parseFloat(response.body.main.temp - 273.15) )
                // temp unit is kelvin i change it to c by dec 273.15
        }
    })
    }
 module.exports = forecast;


