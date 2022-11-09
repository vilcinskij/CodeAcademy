
const keturkampis1 = {
    aukstis: 100,
    plotis: 100,
    plotas() {
        return this.aukstis * this.plotis
    },
    perimetras() {
        return (this.aukstis + this.plotis) * 2
    }
}

const keturkampis2 = {
    aukstis: 100,
    plotis: 100,
    plotas() {
        return this.aukstis * this.plotis
    },
    perimetras() {
        return (this.aukstis + this.plotis) * 2
    }
}

const keturkampis3 = {
    aukstis: 100,
    plotis: 100,
    plotas() {
        return this.aukstis * this.plotis
    },
    perimetras() {
        return (this.aukstis + this.plotis) * 2
    }
}


console.log(keturkampis1.plotas());
console.log(keturkampis1.perimetras());



class Rectangle {
    constructor(rectHeight, recWidth) {
        this.height = rectHeight
        this.width = recWidth
    }
    area() {
        return this.height * this.width
    }
}

const rect1 = new Rectangle(150, 550);
const rect2 = new Rectangle(50, 5);

console.log(rect1);
console.log(rect2.area());


