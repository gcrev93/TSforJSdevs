/* So Type Annotations are an easy way to set the intended type of a 
variable or function. Lets look at the shapeArea function! You can see
the parameter */

interface Shape {
    width: number
    height: number
    shapeArea: Function
}

let newShape: Shape = {
    width: 10, 
    height: 15,
    shapeArea: (x: number, y: number) => { return x * y}
}

console.log("This is the area " + newShape.shapeArea(newShape.height, newShape.width))

/*
Now what if we want to be sure the function returns the proper type?

let newShape: Shape = {
    width: 10, 
    height: 15,
    shapeArea: (x, y) : number => { return x * y} ---> change return to return a string
}

And yes you can combine the two!
*/