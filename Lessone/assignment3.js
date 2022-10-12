// Create Function `findGradeLevel()` to find the grade of the student based on the input.

// Print “Invalid marks” if marks are lower than 0 or higher than 100
// Print “S grade” if marks are between 90 and 100.
// Print “A grade” if marks are between 80 and 90.
// Print “B grade” if marks are between 70 and 80.
// Print “C grade” if marks are between 60 and 70.
// Print “D grade” if marks are between 50 and 60.
// Print “Student has failed” if marks are between 0 and 50.
findGradeLevel("Nana", 89.9);

function findGradeLevel(name , mark){
    if(mark <= 0 || mark >= 100 ){
    console.log("Invalid marks")
    }
    else if (mark >= 90 && mark <= 100 ){
        console.log("S grade")
    }
    else if (mark >= 80 && mark <= 90 ){
        console.log("A grade")
    }
    else if (mark >= 70 && mark <= 80 ){
        console.log("B grade")
    }
    else if (mark >= 60 && mark <= 70 ){
        console.log("C grade")
    }
    else if (mark >= 50 && mark <= 60 ){
        console.log("D grade")
    }
    else if (mark >= 0 && mark <= 50 ){
        console.log("Student has failed")
    }
    
} 
