//بيفصل abstraction عن implementation 
class ControlMethod {
  drive(vehicleType) {
    throw new Error("drive() must be implemented by subclass");
  }
}

class ManualControl extends ControlMethod {
  drive(vehicleType) {
    console.log(`${vehicleType} is being driven manually (clutch + gear shift).`);
  }
}

class AutomaticControl extends ControlMethod {
  drive(vehicleType) {
    console.log(`${vehicleType} is being driven automatically (no manual gear shift).`);
  }
}

// --- Abstraction Layer (Vehicles) ---
class Vehicle {
  constructor(controlMethod) {
    this.controlMethod = controlMethod; // Bridge to implementation
  }

  drive() {
    throw new Error("drive() must be implemented by subclass");
  }
}

class Car extends Vehicle {
  drive() {
    this.controlMethod.drive("Car");
  }
}

class Bike extends Vehicle {
  drive() {
    this.controlMethod.drive("Bike");
  }
}

// --- using Code ---
const manualControl = new ManualControl();
const automaticControl = new AutomaticControl();

const manualCar = new Car(manualControl);
manualCar.drive(); 

const automaticCar = new Car(automaticControl);
automaticCar.drive(); 

const manualBike = new Bike(manualControl);
manualBike.drive(); 
const automaticBike = new Bike(automaticControl);
automaticBike.drive(); 