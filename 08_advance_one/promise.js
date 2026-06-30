const PromiseOne = new Promise(function(resolve,reject){
    //Do async task
    //DB calls, crytography,networks
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
})

PromiseOne.then(function(){
    console.log("Promise Consumed")
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async Task 2 resolved")
})



const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Shubh" , email:"shubh@example.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user)
})


const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"shubh",password:"123"})
        }
        else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})


PromiseFour.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Promise is either Resolved or Rejected")
})





const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"shubh",password:"123"})
        }
        else{
            reject("ERROR:Js went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await PromiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }

}
consumePromiseFive()


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all