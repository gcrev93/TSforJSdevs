/* Classes are also supported in TypeScript and can be be easily implented
for those who prefer the Object Oriented route

Lets look at how we can transform our example into a class */

//Object Oriented way

/* start with -- and let the tooling do the work
*/


export abstract class Shape {
    abstract getArea(): number;
}

export class Rectangle extends Shape {
    width: number
    height: number
    constructor(width: number, height: number) {
        super();
        this.width = width
        this.height = height
    }
    getArea(): number {
        return this.width * this.height
    }
}

export class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

let newCircle = new Circle(15)

console.log("This is the area " + newCircle.getArea())


