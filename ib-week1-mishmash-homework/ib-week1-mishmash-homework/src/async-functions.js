function giveItBackLater(value, callback) {
     function waitASec() {
         callback(value)
     }
     setTimeout(waitASec, 2000)
}

//giveItBackLater('Tadaa!', console.log);

function addSomePromises(thingy) {
    const promise = new Promise(function(resolve,reject) {
        if (thingy) {
            return resolve('foo')
        } else {
            return reject('bar')
        }
    })
    //return een promise met wat-als-resolve en een wat-als-reject
}

const outputPromise = addSomePromises(somePromise).then(function(){})



//volgende functie
function promiseToGiveItBackLater(value) {
    
}
//The function `promiseToGiveItBackLater(value)` should return a 
//promise that will resolve with the `value` later. It should use the 
//same function you defined in `giveItBackLater`. That means you will 
//wrap your callback-style function with a promise-style version.

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}


//info verzamelen
// const promise = new Promise((resolve, reject) => {
//     randomNumber = Math.random()
//     if(randomNumber < 0.5) {
//         return reject('Lower than 0.5')
//     }
//     return resolve('Higher than 0.5')
//   })
  
//   promise
//     .then(value => console.log("Hey!", value))
//     .catch(value => console.error("Oh noes", value))

//     function getDocument(documentId) {
//         return new Promise((resolve, reject) => {
//           if(documents[documentId] === undefined){
//             setTimeout(reject, 1000, 'Document not found, sorry')
//           }
//           setTimeout(resolve, 1000, documents[documentId])
//         })
//       }
      
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