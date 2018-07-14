function pathFind(path, object) {
   const path2 = path[0]
   console.log(path2)
   const object2 = object.path2
       console.log(object.author)
        path2.shift
        console.log(path2)
   if (path2.length >= 1) {
        return pathFind(path2,object2)
        console.log(pathFind(path2,object2))
   } else {
        return object2
   }
}

console.log(pathFind(["author", "name"], { author: { name: "Stephen" } }))

module.exports = {pathFind}