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
