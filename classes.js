class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep!"
    }

    toString() {
        return `The vehice is a ${this.make} ${this.model} from ${this.year}` 
    }
}

class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
    }

    numWheels = 4;
}

let myCar = new Car("Subaru", "Outback", 2016);

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year)
    }

    numWheels = 2;

    revEngine() {
        return "VROOM!!!"
    }
}

let newMotorcycle = new Motorcycle('suzuki', 'dragon', 2018)

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only Vehicles Allowed Here"
        }
        if (this.vehicles.length >= this.capacity) {
            return "Garage Full"
        }
        this.vehicles.push(newVehicle);
        return "Vehicle Added!";
    }
}

let myGarage = new Garage(2);
