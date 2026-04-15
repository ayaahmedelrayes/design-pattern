class Vehicle{
    move(){
        console.log("the vichle is moving");
    }
}
class EngineVehicle extends Vehicle{
    startEngine(){
        console.log("the engine is started");
    }
}
class NonEngineVehicle extends Vehicle{

}
class Car extends EngineVehicle{}
class Bicycle extends NonEngineVehicle{}
const car =new Car();
car.startEngine();
const bike = new Bicycle();
bike.move();