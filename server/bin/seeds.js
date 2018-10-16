// Seeds file that creates, modifies and removes all userss
// To execute this seed, run from the root of the project
// $ node bin/seeds.js

require('dotenv').config();
const mongoose = require('mongoose');
const faker = require('faker');
const User = require("../models/User");
const Deal = require("../models/Deal");
const bcrypt = require('bcrypt');
const { DBURL } = process.env;


console.log(DBURL)
mongoose
  .connect(DBURL, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${DBURL}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });




let password = "a";
const salt     = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync(password, salt);

usersAmount = 100;
let usersToAdd = []

for (let i = 0; i < usersAmount ; i++) {
    username = faker.internet.userName()
    name = faker.name.findName()
    user = {
        username: username,
        name: name,
        password: hashPass,
        email: "pepe@pepe.com",
        country: "España",
        city: "Madrid",
        street: "Paseo de la Chopera",
        area_code: "28000"

    }
    usersToAdd.push(user)
}

function createDeal(id){

    bool = faker.random.boolean();

    if (bool == true){
        amount = Math.floor(Math.random()*50+20)
        rate = Math.floor(Math.random()*10+5)
        bolivares = rate*amount;
        deal = {
            classification: "OPEN",
            seller: id,
            amount: amount,
            rate: rate,
            currency: "USD",
            bolivares: bolivares
            }
        
        return deal;
        
        }
    }




// User.collection.drop();
// Deal.collection.drop();

User.create(
    usersToAdd
    )
.then( () => {
User.find({}).then( users => {
    return usersId = users.map( e => { return e._id })
}).then( usersId => {
    usersId.forEach(e => {
    bool = faker.random.boolean();
    if (bool == true){
        amount = Math.floor(Math.random()*50+20)
        rate = Math.floor(Math.random()*10+5)
        bolivares = rate*amount;
        deal = {
            classification: "OPEN",
            seller: e,
            amount: amount,
            rate: rate,
            currency: "USD",
            bolivares: bolivares
        }
        Deal.create(deal)
        }
    })
})
})

// al abrir el plazo de join hay que agregar los usuarios a la base de datos
// cuando cierra el plazo de join se ejecuta lo siguiente...

// gr.participantsChecker()
// .then(gr.shuffleParticipants)
// .then(gr.createGroups)
// .then(gr.groupMessageCreator)
// .then(console.log)

// luego de que se anuncian los grupos hay que resetear los lideres
// cambiarles el estado de past_leader a true y leader a false.

// gr.resetLeaders()
// gr.resetParticipants()
