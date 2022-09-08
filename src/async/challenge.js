const fechtdate = require('../util/fetchdata');
const API ='https://rickandmortyapi.com/api/character/';


const anotherFunction = async (url_api) => {
    try{
        const date = await fechtdate(url_api)
        const character = await fechtdate(`${API}${date.results[0].id}`)
        const origin = await fechtdate(character.origin.url)
        console.log(date.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    }catch(error) {
        console.error(error);
    }
}

console.log('before')
anotherFunction(API)
console.log('after')