//اخفاء التعقيد عن العميل
//يتاكد الدفع صح وسنفذه
class PaymentService {
  validatePayment(order) {
    console.log(`[PaymentService] Validating payment for order: ${order.id}`);
    return true; // Assume valid
  }

  processPayment(order) {
    console.log(`[PaymentService] Processing payment of $${order.total} for order: ${order.id}`);
  }
}
//يقلل المخزون
class InventoryService {
  updateInventory(order) {
    console.log(`[InventoryService] Updating inventory for items in order: ${order.id}`);
  }
}

class NotificationService {
  sendConfirmation(order) {
    console.log(`[NotificationService] Sending confirmation to ${order.userEmail} for order: ${order.id}`);
  }
  
}
//يسجل العملية حصلت امتي 
class LoggingService {
  logTransaction(order) {
    console.log(`[LoggingService] Logging transaction for order: ${order.id} at ${new Date().toISOString()}`);
  }
}

// --- Step 2: Facade ---
class CheckoutService {
  constructor() {
    this.paymentService = new PaymentService();
    this.inventoryService = new InventoryService();
    this.notificationService = new NotificationService();
    this.loggingService = new LoggingService();
  }

  checkout(order) {
    console.log("Starting Checkout");

    const isValid = this.paymentService.validatePayment(order);
    if (!isValid) {
      console.log("Payment validation failed. Checkout aborted.");
      return;
    }

    this.paymentService.processPayment(order);
    this.inventoryService.updateInventory(order);
    this.notificationService.sendConfirmation(order);
    this.loggingService.logTransaction(order);

    console.log("===== Checkout Complete! =====\n");
  }
}

// --- Step 3: Client Code ---
const order = {
  id: "ORD-1001",
  userEmail: "customer@example.com",
  total: 49.99,
  items: ["Laptop Stand", "USB Hub"],
};

const checkoutService = new CheckoutService();
checkoutService.checkout(order);
