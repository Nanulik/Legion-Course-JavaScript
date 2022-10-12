

const fruits = [ "Apple", "Banana", "Pear", "Avocado"];

for (let index = 0; index < fruits.length; index++) {
    //const element = array[index];

    console.log(fruits[index]);
    
}

// how to print numbers
// for (let index = 1; index <= 10.; index++) {
//     //const element = array[index];

//     console.log(index);
    
// }
//another way to run throug the list using for loop 
for(let x in fruits){
    console.log(fruits[x]);
}

//foor loop that will run throgh object
const car = {type: "Mazda", color:"Red", plateNumber: "12345"};

for(let x in car){
    console.log(car[x]);
}

for(let x in fruits){
    console.log(fruits[x]);
    if (fruits[x] == "Avocado") {
        console.log( "I did not know that Avocado is a fruit")
    }
}
