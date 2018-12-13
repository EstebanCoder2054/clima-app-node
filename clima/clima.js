const axios = require('axios');

const getClima = async(lat, lng) => {

    //let latEscapada = encodeURI(lat);
    //let lngEscapada = encodeURI(lng);

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=15ffdbf0bad89215856ae02bbd9c6024`)

    let weather = resp.data.main.temp;

    return weather;
}

module.exports = {
    getClima
}