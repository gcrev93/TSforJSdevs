/* In TypeScript.. there is what is called complex types. Maybe a value can be a string or a number.
Maybe it can only be certain values. Lets look add some shapes shall we? Maybe another shape like Circle.

But we want get Area to accept both Rectangle and Circle so maybe we will make another type Shape and it can
be a rectangle or a circle */

interface Rectangle {
    kind: "rectangle"
    width: number
    height: number
}

interface Circle {
    kind: "circle";
    radius: number;
}


type Shape = Rectangle | Circle;


function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.width * shape.height
}

let newCircle: Circle= {
    kind: "circle",
    radius: 15 
}


console.log("This is the area " + getArea(newCircle))

