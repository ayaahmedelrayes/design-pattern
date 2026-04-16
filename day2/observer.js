
class Device {
  constructor(name) {
    this.name = name;
  }

  update(temperature, humidity) {
    console.log(`${this.name}: Temperature is ${temperature}°C, Humidity is ${humidity}%`);
  }
}

// --- Subject (WeatherStation) ---
class WeatherStation {
  constructor() {
    this.devices = []; // List of observers
    this.temperature = null;
    this.humidity = null;
  }

  subscribe(device) {
    this.devices.push(device);
    console.log(`${device.name} subscribed to WeatherStation.`);
  }

  unsubscribe(device) {
    this.devices = this.devices.filter((d) => d !== device);
    console.log(`${device.name} unsubscribed from WeatherStation.`);
  }

  notify() {
    console.log("Weather Station: New weather data received!");
    for (const device of this.devices) {
      device.update(this.temperature, this.humidity);
    }
  }

  setWeatherData(temperature, humidity) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.notify(); // Trigger notification to all observers
  }
}

// --- Client Code ---
const station = new WeatherStation();

const phone = new Device("Phone");
const tablet = new Device("Tablet");
const smartHome = new Device("SmartHome");

station.subscribe(phone);
station.subscribe(tablet);
station.subscribe(smartHome);

console.log(" Weather Update 1 ");
station.setWeatherData(30, 60);

console.log("Unsubscribing Tablet ");
station.unsubscribe(tablet);

console.log(" Weather Update 2");
station.setWeatherData(25, 55);
