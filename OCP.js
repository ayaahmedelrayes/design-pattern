class Shape{
    draw(){
        throw new Error("This method should be implemented by subclasses");
    }
}
class Circle extends Shape{
    draw(){
        console.log("Drawing a circle");
    }}
class Square extends Shape{
    draw(){
        console.log("Drawing a square");
    }}
class ShapeDrawer{
    drawShape(shape){
        shape.draw();
    }}