const doSomethingAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('do some thing async'),3000)
        :reject(new Error ('test Error'))
    });
}

// async sirve para que sea asincrono el codigo
const doSomething = async( )=>{
    // await sirve para hacer esperar la peticiones
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('before1');
doSomething();
console.log('after1')


const anotherFunction = async()=>{
    try{
        const something = await doSomethingAsync();
        console.log(something)
    }catch(error){
        console.log(error)
    }
}


console.log('before2');
anotherFunction();
console.log('after2')