#! /usr/bin/env node 
import inquirer from 'inquirer';
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter your name:"
    }]);
let opponent = await inquirer.prompt([{
        name: "Select",
        type: "list",
        message: "Select your opponent",
        choices: ["Skeleton", "Alien", "Zombie"]
    }]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.Select);
do { //SKELON
    if (opponent.Select == "Skeleton") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your life"],
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose,better luck next time ");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
            if (o1.fuel <= 0) {
                console.log("You win ");
                process.exit();
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log("you loose, Better luck Next time");
            process.exit();
        }
    }
    //ALIEN
    if (opponent.Select == "Alien") {
        let ask = await inquirer.prompt([{
                name: 'opt',
                type: 'list',
                message: 'what would you like to do?',
                Choices: ["Attack", "Drink portion", "Run for your life"],
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose,better luck next time ");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
            if (o1.fuel <= 0) {
                console.log("You win ");
                process.exit();
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log("you loose, Better luck Next time");
            process.exit();
        }
    }
} while (true);
