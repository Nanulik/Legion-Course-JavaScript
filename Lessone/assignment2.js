
const appartment  = {
    city: "Ottawa ",
    street: "234 Terry Fox Dr ",
    price: 3500,
    rooms: ["Dining room", "Kitchen", "Master Badroom", "Room1", "Room2"],
    getDetails: function(){
       let result = "The appartment on " + this.street + ", " + this.city + "cost " + this.price + " dollars and has "  + this.rooms.length + " rooms in total"
        return result
    }
}

console.log(appartment.getDetails());

