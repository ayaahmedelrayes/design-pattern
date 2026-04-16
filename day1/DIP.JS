class Logger{
    log(message) {
    throw new Error("log method must be implemented");
    }
}
class FileLogger extends Logger{
    log(message) {
        console.log(`Logging to a file: ${message}`);
    }}
class ConsoleLogger extends Logger{
    log(message) {
        console.log(`Logging to the console: ${message}`);
    }}    
class DatabaseLogger extends Logger{
    log(message) {
        console.log(`Logging to a database: ${message}`);
    }   } 
class App{
    constructor(logger) {
        this.logger = logger;
    }
    run()
{    this.logger.log("Application is running");}}       
const fileLogger = new FileLogger();
const consoleLogger = new ConsoleLogger();
const databaseLogger = new DatabaseLogger();
const app1 = new App(fileLogger);
app1.run();