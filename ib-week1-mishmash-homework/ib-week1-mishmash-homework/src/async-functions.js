function giveItBackLater(value, callback) {
     function waitASec() {
         callback(value)
     }
     setTimeout(waitASec, 2000)
}

giveItBackLater('Tadaa!', console.log);

function promiseToGiveItBackLater(value) {
    const promise = new Promise((resolve,reject) => {
        giveItBackLater(value, console.log);
    })
}

promiseToGiveItBackLater('tja')
    .then(waarde => console.log(waarde))
    .catch(waarde => console.log(waarde, 'nope'))


//X  The function `promiseToGiveItBackLater(value)` should return a promise 
//  that will resolve with the `value` later. 
// It should use the same function you defined in `giveItBackLater`. 
//That means you will wrap your callback-style function with a promise-style version.


// const sayMyName = (name) => {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(reject, 1000, name)
//     })
  
//     return promise
//   }
  
//   sayMyName('Henk')
//     .then(value => console.log("Hey!", value))
//     .catch(value => console.log("REJECTED!", value),)





// function addSomePromises(parSomePromise) {
//     return new Promise((resolve,reject) => {
//         parSomePromise = Math.random()
//         if (parSomePromise < 0.5) {
//             return resolve('foo')
//         } else {
//             return reject('bar')
//         }
//     })
// }



//volgende functie
    
//}

//module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}


//info verzamelen
// const promise = new Promise((resolve, reject) => {
//     randomNumber = Math.random()
//     if(randomNumber < 0.5) {
//         return reject("bar")
//     }
//     return resolve("foo")
//   })
  
//   promise
//     .then(value => console.log(value + value))
//     .catch(value => console.error(value + value + value))




    // function getDocument(documentId) {
    //     return new Promise((resolve, reject) => {
    //       if(documents[documentId] === undefined){
    //         setTimeout(reject, 1000, 'Document not found, sorry')
    //       }
    //       setTimeout(resolve, 1000, documents[documentId])
    //     })
    //   }
      
//       function getAuthor(authorId) {
//         return new Promise((resolve, reject) => {
//           if(authors[authorId] === undefined){
//             setTimeout(reject, 1000, 'Author not found')
//           }
//           setTimeout(resolve, 1000, authors[authorId])
//         }) 
//       }
      
//       const nameToUppercase = name => name.toUpperCase()
      
//       getDocument(1)
//         .then(document => getAuthor(document.authorId))
//         .then(author => nameToUppercase(author.name))
//         .then(upperCaseAuthor => console.log(upperCaseAuthor))
//         .catch(message => console.log(message))