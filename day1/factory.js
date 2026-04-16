class Notification{
    send(message){
        throw new Error("send method must be implemented");
    }
}
class EmailNotification extends Notification{
    send(message){
        console.log(`Sending email notification: ${message}`);
    }
}
class SMSNotification extends Notification{
    send(message){
        console.log(`Sending SMS notification: ${message}`);
    }
}
class PushNotification extends Notification{
    send(message){
        console.log(`Sending push notification: ${message}`);
    }
}
class NotificationFactory{
    static create(type){
        if (type === "email") {
            return new EmailNotification();
        }
        if (type === "sms") {
            return new SMSNotification();
        }
        if (type === "push") {
            return new PushNotification();
        }
        throw new Error("Invalid notification type");
    }
}
NotificationFactory.create("email").send("Hello via Email!");