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
}

// FETCH metodas
// fetch('./users.json').then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// })
fetch('./users.json')
  .then(response => response.json())
  .then(users => {
    console.log(users);
    users.map(user => {
      console.log(user);
      console.log(user.name);
      console.log(user.age);
      console.log(user.children);
      user.children.map(child => {
        console.log(child);
      })
    })
  });