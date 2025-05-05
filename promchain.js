function orderfood() {
    return new Promise((resolve)=>{
        console.log("orderfood");
        resolve()
    });
}
 
 function cookfood() {
    return new Promise((resolve)=>{
        console.log("cookfood");
        resolve()
    });
}
 
 function servefood() {
    return new Promise((resolve)=>{
        console.log("servefood");
        resolve()
    });
}
 
 function eatfood() {
    return new Promise((resolve)=>{
        console.log("eatfood");
        resolve()
    });
     
}
  eatfood()
  .then(()=>orderfood())
  .then(()=>cookfood())
  .then(()=>servefood())