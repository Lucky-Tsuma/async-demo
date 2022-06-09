// Below is what we call settled promises
const resolvedPromise = Promise.resolve('Settled promise. Resolved with no errors')
resolvedPromise.then(value => console.log(value))

const rejectedPromise = Promise.reject(new Error('Promise resolved with error!'))
rejectedPromise.catch(error => console.log(error.message))

// We may want to create promises that are already either already rejected or resolved. Example: when writing unit tests.
// It is in such cases that settled promises come in handy. As the ones created above