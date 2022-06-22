let rectangle = new Rectangle(300, 100);

function createRectangle() {
    let ctx = document.getElementById('myCanvas').getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(10, 30, rectangle.getHeight(), rectangle.getWidth());
    ctx.stroke();
}
rectangle.setWidth(150);
rectangle.getWidth();
rectangle.setHeight(450);
rectangle.getHeight();
alert("area= " + rectangle.area() + " <br> perimeter= " + rectangle.perimeter())

createRectangle()