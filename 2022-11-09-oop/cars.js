class Car {
    constructor(brand, model, engine, basePrice = 10000, mileage = 0, color = 'black') {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.basePrice = Number(basePrice);
        this.price = this.getPrice();
        this.mileage = Number(mileage);
        this.color = color;
        this.baseColors = ['black', 'red', 'blue', 'silver', 'white', 'special blue']
    }
    turnOn() {
        console.log(this.brand, 'vrooom')
    }
    getPrice() {
        if (this.engine === 'electric') {
            return this.basePrice + 10000;
        }
        if (this.engine == 'diesel') {
            return this.basePrice + 5000;
        }
        if (this.engine == 'petrol') {
            return this.basePrice;
        }
        if (this.engine == 'hybrid') {
            return this.basePrice + 7500;
        }
        return this.basePrice;
    }
    getDiscount(discount) {
        let discountPrice = Number(this.basePrice - (this.basePrice / 100 * discount));
        console.log(`Price with discount: ${discountPrice}`);
    }
    mileageDiscountPrice() {
        if (this.mileage > 400000) {
            return this.price / 100 * 50
        }
        if (this.mileage > 100000) {
            return this.price / 100 * 30
        }
        if (this.mileage > 50000) {
            return this.price / 100 * 20
        }
        if (this.mileage > 20000) {
            return this.price / 100 * 15
        }
        if (this.mileage > 0) {
            return this.price / 100 * 10
        }
        return this.price
    }
    colorPrice() {
        if (this.color === 'special blue') {
            return this.price + 500
        }
        if (this.baseColors.find(color => color === this.color)) {
            return this.price 
        }
        return  this.price + 3000
    }
}

const car1 = new Car('Hyundai', 'i40', 'petrol', 10000, 100001, 'special blue');
const car2 = new Car('VW', 'Polo', 'diesel', 10000, 400001, 'orange');
const car3 = new Car('Tesla', 'Model S', 'electric', 10000, 20001);
const car4 = new Car('Toyota', 'Prius', 'hybrid', 10000, 50001);


// console.log(car3.price);
console.log(car2.colorPrice());
// car1.getDiscount(10);
// car3.getDiscount(50);