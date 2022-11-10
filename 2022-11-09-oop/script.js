
const keturkampis1 = {
    aukstis: 100,
    plotis: 100,
    plotas() {
        return this.aukstis * this.plotis
    },
    perimetras() {
        return (this.aukstis + this.plotis) * 2
    },
    parodytiDuomenis(selector) {
        const element = document.querySelector(selector);
        element.textContent = `Keturkampio plotis: ${this.plotis}, keturkampio ilgis: ${this.aukstis}, keturkampio perimetras: ${this.perimetras()}, keturkampio plotas: ${this.plotas()}`
    },
}

const keturkampis2 = {
    aukstis: 200,
    plotis: 100,
    spalva: 'raudona',
    plotas() {
        return this.aukstis * this.plotis
    },
    perimetras() {
        return (this.aukstis + this.plotis) * 2
    },
    pusePloto() {
        return this.plotas() / 2
    },
    parodytiDuomenis(selector) {
        const element = document.querySelector(selector);
        element.textContent = `Keturkampio plotis: ${this.plotis}, keturkampio ilgis: ${this.aukstis}, keturkampio perimetras: ${this.perimetras()}, keturkampio plotas: ${this.plotas()}`
    },
}

const keturkampis3 = {
    aukstis: 150,
    plotis: 80,
    plotas() {
        return this.aukstis * this.plotis
    },
    perimetras() {
        return (this.aukstis + this.plotis) * 2
    },
    informacija(){
        return `Keturkampio plotis: ${this.plotis}, keturkampio aukštis: ${this.aukstis}`
    },
    parodytiDuomenis(selector) {
        const element = document.querySelector(selector);
        element.textContent = `Keturkampio plotis: ${this.plotis}, keturkampio ilgis: ${this.aukstis}, keturkampio perimetras: ${this.perimetras()}, keturkampio plotas: ${this.plotas()}`
    },
}

// console.log(keturkampis1.plotas());
// console.log(keturkampis1.perimetras());

// console.log(keturkampis2.plotas());
// console.log(keturkampis2.perimetras());
// console.log(keturkampis2.spalva);
// console.log(keturkampis2.pusePloto());

// console.log(keturkampis3.plotas());
// console.log(keturkampis3.perimetras());
console.log(keturkampis3.informacija());

keturkampis1.parodytiDuomenis('#keturkampis1')
keturkampis2.parodytiDuomenis('#keturkampis2')
keturkampis3.parodytiDuomenis('#keturkampis3')


class Rectangle {
    constructor(rectHeight, rectWidth) {
        this.height = rectHeight
        this.width = rectWidth
    }
    area() {
        return this.height * this.width
    }
}

const rect1 = new Rectangle(150, 550);
const rect2 = new Rectangle(50, 5);

// console.log(rect1);
// console.log(rect2.area());


