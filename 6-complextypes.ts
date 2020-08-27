/* In TypeScript.. there is what is called complex types. Maybe a value can be a string or a number.
Maybe it can only be certain values. Lets look at our height. Maybe the height of shapes can be 10, 15
or 20. 

Or maybe we want to accept height as a string too (just as a joke) */

type heightLimit = 10 | 15 | 20

class Shape2 {
    width: number
    height: heightLimit | string

    constructor(width: number, height: heightLimit | string) {
        this.width = width
        this.height = height
    }

    shapeArea() {
        return this.width * this.height // and if we get a string this return gets a little tricky
    }
}

let newShape5 = new Shape2(10, "22")

console.log("This is the area " + newShape.shapeArea())
