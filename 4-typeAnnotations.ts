/* So Type Annotations are an easy way to set the intended type of a 
variable or function. Lets look at the shapeArea function! You can see
the parameter */

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

// function getArea(width: number, height: number) {
//     return width * height
// }

// function getArea(shape: { width: number, height: number }) {
//     return shape.width * shape.height
// }

//  function getArea(shape: Rectangle) {
//     return shape.width * shape.height
//  }

console.log("This is the area " + getArea(newRec.height, newRec.width))

/*
Now what if we want to be sure the function returns the proper type?

 function getArea(shape: Shape): number {
    return shape.width * shape.height
 }

yes you can combine the two!
*/