/* Classes are also supported in TypeScript and be a little easier to use with TypeScript.
Lets look at how we can transform our example into a class */

class Shape {
    width: number
    height: number

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    shapeArea() {
        return this.width * this.height
    }
}

let newShape = new Shape(10, 15)

console.log("This is the area " + newShape.shapeArea())

