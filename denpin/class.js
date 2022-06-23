class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(energy) {
        return this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}

class FlashLamp {
    status;
    battery;

    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }

    getBattery() {
        return this.battery.getEnergy();
    }

    setBattery(value) {
        this.battery = value;
    }

    light() {
        if (this.status) {
            alert("Lighting");
            this.battery.decreaseEnergy();
        } else {
            alert("Not lighting");
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }
}