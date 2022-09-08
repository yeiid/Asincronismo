const somethingwillhappen = ()=>{
    return new Promise((resolve,reject)=>{
        // si es verdadero pasa hey, si es false woops, 
        if(false){
            resolve('hey!');
        }else{
            reject('wooops!')
        }
    });
};


somethingwillhappen()
    .then(response => console.log(response))
    .catch(err =>console.error(err));


const somethingwillhappen2 = () =>{
    // la promesa siempre debe ir en mayusculas para que se pueda ejecutar
    return new Promise((resolve, reject)=> {
        if (true) {
            setTimeout(()=>{
                resolve('true');
            },2000)
        }else{
            console.error = new Error('wooops!');
            reject(error)
        }
    });
}

somethingwillhappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingwillhappen(),somethingwillhappen2()])
    .then(response =>{
        console.log('array de resultados',response);
    })
    .catch(err =>{
        console.log(err)
    })