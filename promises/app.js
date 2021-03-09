//promise is a javascript object which represents the eventual completion or failure of the asynchronous operation
//and its resulting value
let myApp=new Promise((resolve,reject)=>{
        let resolved=true;
        if(resolved) {
            resolve("the promise was resolved");
        }
        else{
            reject("the promise was rejected");
        }
}
)

console.log(myApp);

myApp.then((res)=>{console.log(res)})

//promise.all() returns resolved value when all the promises have been resolved

let myPromise=new Promise((resolve,reject)=>{
    resolve(1);
})
console.log("myPromise");
let herPromise=new Promise((resolve,reject)=>{
    setTimeout(resolve(3),100000);
})

Promise.all([myPromise,herPromise]).then(()=>{
    console.log("all promises have been resolved")
})

//promise.race()//resolves when one of the promise resolves or rejects first



