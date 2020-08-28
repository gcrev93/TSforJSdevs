interface Shape2 {
    width: number
    height: number
    shapeArea2: Function
}

let newShape5: Shape2 = {
    width: 10, 
    height: 15,
    shapeArea2: (x: number, y: number) => { return x * y}
}

document.body.innerHTML = "This is the area " + newShape5.shapeArea2(newShape5.height, newShape5.width)

/* bigger projects will require bundlers like webpack */