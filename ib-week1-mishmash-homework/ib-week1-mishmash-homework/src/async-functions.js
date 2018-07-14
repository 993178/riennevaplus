function giveItBackLater(value, callback) {
     function waitASec() {
         callback(value)
     }
     setTimeout(waitASec, 2000)
}

function promiseToGiveItBackLater(value) {
    const promise = new Promise((resolve,reject) => {
        giveItBackLater(value, console.log);
        return value
    })
    return promise
}

promiseToGiveItBackLater('Tadaa!')
    .then(value => console.log(value))
    .catch(value => console.log(value, 'nope'))


function addSomePromises(parSomePromise) {
    return new Promise((resolve,reject) => {
        parSomePromise = Math.random()
        if (parSomePromise < 0.5) {
            return resolve('foo')
        } else {
            return reject('bar')
        }
    })
}

addSomePromises('iets')
    .then(value => console.log(value + value))
    .catch(value => console.error(value + value + value))


module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}