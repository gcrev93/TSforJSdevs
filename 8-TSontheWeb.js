/*

*/
var newShape5 = {
    width: 10,
    height: 15,
    shapeArea2: function (x, y) { return x * y; }
};
document.body.innerHTML = "This is the area " + newShape5.shapeArea2(newShape5.height, newShape5.width);
