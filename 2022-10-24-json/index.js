let obj = {
    name: 'John',
    age: 28,
    nextAge: 28 + 1,
    children: ["child 1", "child 2"],
    address: {
        street: 'Vilniaus st',
        city: 'Vilnius',
        country: 'Lithuania',
    },
    maried: true,
    getAdressInfo() {
        return `Address is ${this.address.street} ${this.address.city} ${this.address.country}`
    },
    education
}