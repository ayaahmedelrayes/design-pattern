//تضيف سلوك جديد للكلاس بدون ما تغيره
class Pizza {
  getDescription() {
    return "Unknown Pizza";
  }
  cost() {
    return 0;
  }
}

// --- Step 2: Concrete Component ---
class Margherita extends Pizza {
  getDescription() {
    return "Margherita";
  }
  cost() {
    return 8;
  }
}

// --- Step 3: Base Decorator ---
class PizzaDecorator extends Pizza {
  constructor(pizza) {
    super();
    this.pizza = pizza; 
  }

  getDescription() {
    return this.pizza.getDescription();
  }

  cost() {
    return this.pizza.cost();
  }
}

// --- Step 4: Concrete Decorators ---
class Cheese extends PizzaDecorator {
  getDescription() {
    return this.pizza.getDescription() + ", Cheese";
  }
  cost() {
    return this.pizza.cost() + 2;
  }
}

class Olives extends PizzaDecorator {
  getDescription() {
    return this.pizza.getDescription() + ", Olives";
  }
  cost() {
    return this.pizza.cost() + 1.5;
  }
}

class Mushrooms extends PizzaDecorator {
  getDescription() {
    return this.pizza.getDescription() + ", Mushrooms";
  }
  cost() {
    return this.pizza.cost() + 1;
  }
}

// --- Bonus: Extra Topping ---
class Pepperoni extends PizzaDecorator {
  getDescription() {
    return this.pizza.getDescription() + ", Pepperoni";
  }
  cost() {
    return this.pizza.cost() + 2.5;
  }
}

// --- Step 5: Client Code ---
let myPizza = new Margherita();
console.log(`${myPizza.getDescription()} => $${myPizza.cost()}`);
// Margherita => $8

myPizza = new Cheese(myPizza);
myPizza = new Olives(myPizza);
myPizza = new Mushrooms(myPizza);
console.log(`${myPizza.getDescription()} => $${myPizza.cost()}`);
// Margherita, Cheese, Olives, Mushrooms => $12.5


