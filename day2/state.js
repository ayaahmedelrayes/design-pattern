// كل state في كلاس لوحده
class TrafficLight {
  constructor() {
    this.state = new RedState(this); // Initial state
    console.log("Traffic light is Red.");
  }

  setState(state) {
    this.state = state;
  }

  change() {
    console.log("Changing state...");
    this.state.change();
  }
}

// --- Concrete States ---
class RedState {
  constructor(trafficLight) {
    this.trafficLight = trafficLight;
  }

  change() {
    console.log("Traffic light is now Green.");
    this.trafficLight.setState(new GreenState(this.trafficLight));
  }
}

class GreenState {
  constructor(trafficLight) {
    this.trafficLight = trafficLight;
  }

  change() {
    console.log("Traffic light is now Yellow.");
    this.trafficLight.setState(new YellowState(this.trafficLight));
  }
}

class YellowState {
  constructor(trafficLight) {
    this.trafficLight = trafficLight;
  }

  change() {
    console.log("Traffic light is now Red.");
    this.trafficLight.setState(new RedState(this.trafficLight));
  }
}

// --- Client Code ---
const light = new TrafficLight();
light.change(); // Red -> Green
light.change(); // Green -> Yellow
light.change(); // Yellow -> Red
light.change(); // Red -> Green (cycle continues)
