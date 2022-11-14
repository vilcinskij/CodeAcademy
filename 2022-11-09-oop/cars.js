class Car {
    constructor(brand, model, engine, basePrice = 10000, mileage = 0, color = 'black') {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.basePrice = Number(basePrice);
        this.mileage = Number(mileage);
        this.price = this.getPrice()
        this.enginePrice = this.getEnginePrice();
        this.mileageDiscountPercentage = this.getMileageDiscountPercentage();
        this.mileageDiscount = this.getMileageDiscount();
        this.color = color;
        this.baseColors = ['black', 'red', 'blue', 'silver', 'white', 'special blue']
    }
    turnOn() {
        console.log(this.brand, 'vrooom')
    }
    getEnginePrice() {
        if (this.engine === 'electric') {
            return 10000;
        }
        if (this.engine == 'diesel') {
            return 5000;
        }
        if (this.engine == 'petrol') {
            return this.basePrice;
        }
        if (this.engine == 'hybrid') {
            return 7500;
        }
        return 0;
    }

    getPrice() {
        return this.basePrice + this.enginePrice
    }

    getDiscount(discountPercentage) {
        if (!discountPercentage || discountPercentage < 0 || discountPercentage > 100) {
            return this.price;
        }
        const discount = this.price / 100 * discountPercentage;
        return this.price - discount;
    }

    getMileageDiscountPercentage() {
        if (this.mileage > 400000) {
            return 50
        }
        if (this.mileage > 100000) {
            return 30
        }
        if (this.mileage > 50000) {
            return 20
        }
        if (this.mileage > 20000) {
            return 15
        }
        if (this.mileage > 0) {
            return 10
        }
        return 0
    }
    colorPrice() {
        if (this.color === 'special blue') {
            return this.price + 500
        }
        if (this.baseColors.find(color => color === this.color)) {
            return this.price
        }
        return this.price + 3000
    }
    renderElement() {
        const carElement = document.createElement('div')
        const carsWrapper = document.getElementById('cars-wrapper');
        const carTitle = document.createElement('h4')
        carTitle.textContent = `${this.brand} ${this.model}`;
        const carEngine = this.engine;
        const carBasePrice = this.basePrice;

        carsWrapper.append(carTitle, carEngine, carBasePrice)
    }
}

const car1 = new Car('Hyundai', 'i40', 'petrol', 10000, 100001, 'special blue');
const car2 = new Car('VW', 'Polo', 'diesel', 10000, 400001, 'orange');
const car3 = new Car('Tesla', 'Model S', 'electric', 10000, 20001);
const car4 = new Car('Toyota', 'Prius', 'hybrid', 10000, 50001);

car2.renderElement()

// console.log(car3.price);
// console.log(car2.colorPrice());
// car1.getDiscount(10);
// car3.getDiscount(50);