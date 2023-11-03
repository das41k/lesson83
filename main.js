console.log('Задание 1')
const meInfo = {
  name: 'Armen',
  age: 18,
  city: 'Orenburg',
  loveJS: true,
  pet: 'cat'
} 
console.log(meInfo)

console.log('Задание 2')
const user = {
  sayHelloName(name) {
    console.log(`Hello ${name}`)
  }
  }
user.sayHelloName('Maxim')

console.log('Задание 3')
const users = [
  Alex = {
    name: 'Alex',
    age: 35,
    hobby: 'eat',
    pet: 'cat',
    isAdmin: true
  },
  Maxim = {
    name: 'Maxim',
    age: 15,
    hobby: 'drive',
    pet: 'dog',
    isAdmin: true
  },
  Katya = {
    name: 'Katya',
    age: 21,
    hobby: 'footboll',
    pet: 'cat',
    isAdmin: false
  },
  Armen = {
    name: 'Armen',
    age: 18,
    hobby: 'JS',
    pet: 'dog',
    isAdmin: true
  }
]
let count = 0
users.forEach((user) => {
  if (user.isAdmin == 0) {
    count += 1
  }
})
console.log(count)
