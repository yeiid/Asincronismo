// de esta manera se importan archivos desde otra carpeta
const fetchDate = require('../util/fetchdata');
const API =('https://rickandmortyapi.com/api/character/');


fetchDate(API)
    .then(date =>{
        console.log(date.info.count);
        return fetchDate(`${API}${date.results[0].id}`)
    })

    .then(date=>{
        console.log(date.name)
        return fetchDate(date.origin.url)
    })
    .then(date =>{
        console.log(date.dimension)
    })
    .catch(err=> console.error(err));