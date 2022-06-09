const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1)
    }, 2000)
})

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2)
    }, 2000)
})

// promises will run in parallel. Result of the promises running will be returned in an array after both complete.
// If one of the promises running in parallel fails/returns error. The whole promise is rejected/returns error
Promise.all([promise1, promise2])
    .then(result => console.log(result))

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(3)
    }, 2000)
})
    
const promise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(4)
    }, 2000)
})
    
// promises will run in parallel. Returns the result of the array that will be first to complete.
Promise.race([promise3, promise4])
    .then(result => console.log(result))