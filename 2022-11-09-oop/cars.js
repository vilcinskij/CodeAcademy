class Car {
    constructor(brand, model, engine, basePrice) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.basePrice = Number(basePrice);
    }
    turnOn() {
        console.log(this.brand, 'vrooom')
    }
    getPrice() {
        if (this.engine == 'electric') {
            let price = Number(this.basePrice) + 10000;
            console.log(this.brand + ' price ' + price);
            return this.brand + ' price ' + price
        }
        if (this.engine == 'diesel') {
            let price = Number(this.basePrice) + 5000;
            console.log(this.brand + ' price ' + price);
            return this.brand + ' price ' + price

        }
        if (this.engine == 'petrol') {
            price = Number(this.basePrice);
            console.log(this.brand + ' price ' + price);
            return this.brand + ' price ' + price

        }
    }
    getDiscount(discount) {
        let discountPrice = Number(this.basePrice - (this.basePrice / 100 * discount));
        console.log(`Price with discount: ${discountPrice}`);
    }
}

const car1 = new Car('Hyundai', 'i40', 'petrol', 8000);
const car2 = new Car('VW', 'Polo', 'diesel', 3000);

car1.turnOn();
car2.getPrice();
car1.getDiscount(10)