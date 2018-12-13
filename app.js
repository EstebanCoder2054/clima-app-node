const lugar = require('./lugar/lugar.js');

const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    //el .options en el yargs permitedar una indicación en consola sin tener que hacer un comando previo
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv


let getInfo = async (direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (error) {
            return `No se puedo determinar el clima en: ${direccion}`
    }
}

getInfo(argv.direccion)
    .then( (resp) => {
        console.log(resp);
    } )
    .catch( (err) => {
        console.log(err);
    })

//como el async-await es una promesa entonces tiene then y catch
//el then recibe lo que me retorna la función y el catch me recibe lo que arroja el throw
// lugar.getLugarLatLng(argv.direccion)
//     .then( (resp) => {
//         console.log(resp);
//     } )
//     .catch( (err) => {
//         console.log(err);
//     } )

// clima.getClima( 9.9280694, -84.0907246)
//     .then( (resp) => {
//         console.log(resp);
//     } )
//     .catch( (err) => {
//         console.log(err);
//     } )










// ``
//   //hay que escapar los espacios en formato HTML y para eso se usa la función encodeURI()
//   let encodeUrl = encodeURI(direccion);

//   //el axios es una promesa, completamente diferente al request que es un callback
//   //para acceder con el axios a un lugar en especifico de la api de geolocalización de Google...
//   axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
//   .then((resp) => {
//       //el then recibirá una respuesta, la cual es una información

//       //console.log(resp.data);
//       //console.log(resp.status);
  
//   let location = resp.data.results[0];

//   console.log('Dirección: ', location.formatted_address);
//   console.log('Latitud: ', location.geometry.location.lat);
//   console.log('Longitud: ', location.geometry.location.lng);
  
//   })
//   .catch((err) => {
//       return console.log('ERROR!!', err);
// })
