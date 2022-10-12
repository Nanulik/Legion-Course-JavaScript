isFruit("tomato");


function isFruit(name){
    if (name == "apple" || name == "Banana" || name == "Pear" ){
        console.log( name + " is a fruit");
    }
    //  else if (name == "banana") {
    //     console.log( name + " Is a fruit")
    // }
    else {
        console.log("This input " + name + " is not a fruit")
    }
}

