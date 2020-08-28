/*  Now normally if you didn't add any types at all, then TypeScript
would infer a type. Look at the variables in the example so far. 
The type of shape is being inferred here as object. And shapeArea is
being inferred as a number 

But in some cases, we may want the types to be explicity set instead of inferred.
A good way to do that is to use interfaces */

// We started with:
// const obj2 = { width: 10, height: 15 };
// const area2 = obj2.width * obj2.height;

// console.log("This is the area " + area2)

//Functional way
interface Rectangle {
    width: number
    height: number
}

let newRec: Rectangle = {
    width: 10, 
    height: 15
}

function getArea(width, height) {
    return width * height
}

console.log("This is the area " + getArea(newRec.height, newRec.width))
