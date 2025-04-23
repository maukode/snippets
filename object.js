// This is demo snippets, running this will error becouse I redefined variable that use const

const lemari = {
  garpu: "garpu",
  sendok: "sendok",
  piring: "piring",
  gelas: "gelas"
}

const complexLemari = {
  garpu: "garpu",
  sendok: "sendok",
  piring: "piring",
  gelas: {
    kecil: "gelas kecil",
    berkuping: "gelas berkuping",
    plastik: "plastik",
    goblet: "goblet"
  }
}

const user = {}

function User() {}
const user = new User()

function User(name, age, introduce) {
  this.name = name;
  this.age = age;
  this.introduce = introduce;
}
const user = new User(“John Doe”, 34, function() {})
const jane = new User(“Jane”, 32, function() {})

const user = Object.create({})

const user = {age:30}
const me = Object.create(user)

class User {}
const user = new User()

const user = {
  name: "John Doe",
  age: 35,
  introduce: function() {}
}
