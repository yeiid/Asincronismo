let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API ='https://rickandmortyapi.com/api/character/';

function fetchDate(url_api,callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api,true);
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState === 4){
            if(xhttp.status ===200){
                callback(null,JSON.parse(xhttp.responseText));
            }
            else {
                const error = new Error('Error'+ url_api);
                return callback(error,null)
            }
        }
    }
    xhttp.send();
}


fetchDate(API,function (error1,date1){
    if(error1) return console.error(error1);
    fetchDate(API + date1.results[0].id, function(error2,date2){
        if(error2)return console.error(error2);
        fetchDate(date2.origin.url,function(error3, date3){
            if(error3) return console.error(error3);
            console.log(date1.info.count);
            console.log(date2.name);
            console.log(date3.dimension);
        });
    })
})

