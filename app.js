let randomNumber = Math.floor(Math.random()*5)+1;
console.log("Secret number:", randomNumber);

function clickAction(){
console.log("Click!");

    let h5Lbl = document.getElementById("h5Lbl");
    let inputText = document.getElementById("txtInput").value;

    if(randomNumber==inputText){
        document.getElementById("imgBox").innerHTML= '<img width="250" src="img/win.gif" alt="">'
        alert("WIN!!")
        h5Lbl.innerText="🎉 Congratulations! YOU WIN.!!!";
    }else if(randomNumber<inputText){
            h5Lbl.innerText="Too high! Try again.";
    }else if(randomNumber>inputText){
            h5Lbl.innerText="Too low! Try again.";
    }else{
        h5Lbl.innerText = "Invalid input. Try again!";
    }
}

console.log(randomNumber);
