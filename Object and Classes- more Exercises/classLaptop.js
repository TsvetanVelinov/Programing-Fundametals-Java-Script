class Laptop {
    constructor(info, quality) {
        this.info = info; // { producer: "Dell", age: 2, brand: "XPS" }
        this.isOn = false;
        this.quality = quality; // 10
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    }
}

// Примерно извикване на класа
let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);

laptop.turnOn();
console.log(laptop.showInfo()); // {"producer":"Dell","age":2,"brand":"XPS"}
laptop.turnOff();
console.log(laptop.quality); // 8
laptop.turnOn();
console.log(laptop.isOn); // true
console.log(laptop.price); // 799.5