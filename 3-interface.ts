/*  Now normally if you didn't add any types at all, then TypeScript
would infer a type. Look at the variables in the example so far. 
The type of shape is being inferred here as object. And shapeArea is
being inferred as a number 

But in some cases, we may want the types to be explicity set instead of inferred.
A good way to do that is to use interfaces */

// We started with:
// const shape = { width: 10, height: 15 }
// const shapeArea = shape.width * shape.height

interface Shape {
    width: number
    height: number
    shapeArea: Function
}

let newShape: Shape = {
    width: 10, 
    height: 15,
    shapeArea: (x, y) => { return x * y}
}

console.log("This is the area " + newShape.shapeArea(newShape.height, newShape.width))
