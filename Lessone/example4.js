

const cat = {
    name: "Charlie",
    gender: "male",
    age: 2,
    color: "red",
    favorite_food: ["milk", "meat", "fish"],
    say_miyau: function(){
        return this.name + " said miyau"
    }
}

console.log(cat.name);
console.log(cat.age);
console.log(cat.favorite_food[2])
console.log(cat.say_miyau())
