// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
    const array = Object.keys(obj)
    return array
}
console.log(keys(testObject))
console.log("\n")


function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
    const array = Object.values(obj)
    return array
}
console.log(values(testObject))
console.log("\n")



function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
    const array = {}
    Object.keys(obj).forEach(num => {
        array[num] = cb + obj[num]
    })
    return array

}
console.log(mapObject(testObject, 'sj'))
console.log("\n")



function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
    const array = Object.keys(obj).map((word) => {
        return [word, obj[word]]
    })
    console.log(array)
    console.log("\n")
}
pairs(testObject)





function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
    const array = {}
    Object.keys(obj).forEach(key => {
        array[obj[key]] = key
    })
    return array
}
console.log(invert(testObject))
console.log("\n")




const a = { name: 'saurabh', age: 17 }
function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
    const b1 = {}
    for (i in obj) {
        if (i in defaultProps) {
            obj[i] = defaultProps[i]
        }
    }
    return obj

}

console.log(defaults(testObject, a))