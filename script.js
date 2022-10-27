

// Mario's hiding compartment: 4
// His father's estimate: 5
// Console output of the programme : "Your son is in a compartment with a smaller number."

// The compartment where Mario is hiding: 4
// Father's estimate 2
// Console output of the programme : "Your son is in a compartment with a larger number."


// The compartment where Mario is hiding: 4

// Father's estimate 4
// Console output of the programme : "Yes, you found your son."

let marioHidden = Math.floor(Math.random() * 10)//computer guess
let right = 4;
let score = 100;


let fatherGuess = Number(prompt("please guess a number :"));


for (let index = 0; index < 3; index++) {


    if (marioHidden == fatherGuess && index == 0) {
        console.log("you find mario!!!", score);
        console.log(marioHidden);
    }

    else if (fatherGuess < marioHidden) {
        console.log("your son is in a vagon with a larger number");
        right--;
        score - 25;
        console.log(right, score);
    }
    else if (fatherGuess > marioHidden) {
        console.log("your son is in a vagon with a smaller number");
        right--;
        score - 25;
        console.log(right, score);
    }
    else{
        console.log("you couldn't find ,try again");
    }
    
       index++;


}

