function pathFind(path, object) {
   const path2 = path[0]
   const object2 = (object[path2])
   console.log(object2)
   path2.shift
   console.log(path2)
   if (path2.length >= 1) {
   return pathFind(path2,object2)
   console.log(pathFind(path2,object2))
   } else {
       console.log('einde')
   }
}

// function pathFind(path, object) {
//     const path2 = path[0]
//     console.log(path2)
//     object2 = object.path2
//     console.log(object2)
//     path2.shift
//     console.log(path2)
//     return pathFind(path2, object2);
// }



pathFind(["author", "name"], { author: { name: "Stephen" } })

//uitkomst: value van de key die in de array genoemd wordt

module.exports = {pathFind}