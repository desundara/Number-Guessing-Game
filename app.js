let randomNumber = Math.floor(Math.random()*5)+1;
console.log("Secret number:", randomNumber);

function clickAction(){
console.log("Click!");

    let h5Lbl = document.getElementById("h5Lbl");
    let inputText = document.getElementById("txtInput").value;

    if(randomNumber==inputText){
        document.getElementById("imgBox").innerHTML= '<img width="300" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2k1dXR1dXllZXpkc2o4dnllc2s5emRyNmtyeDdvNjAwZmQ0MXYyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/etKSrsbbKbqwW6vzOg/giphy.gif" alt="">'
        alert("WIN!!")
        h5Lbl.innerText="Congratulations! YOU WIN.!!!";
    }else if(randomNumber<inputText){
            h5Lbl.innerText="Too high! Try again.";
    }else if(randomNumber>inputText){
            h5Lbl.innerText="Too low! Try again.";
    }else{
        h5Lbl.innerText = "Invalid input. Try again!";
    }
}

console.log(randomNumber);
