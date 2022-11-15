var age;
age = prompt("Enter your age:")
if (age >= 65) {
    output = "Free Friday Coffee Night for Seniors"
    document.getElementById('verify').style.color = 'blue';
    document.getElementById('verify').style.fontStyle ='caps';
} else {
    output = "Enjoy Music and Make Memories"
    document.getElementById('verify').style.color = 'red';
}

document.getElementById("verify").innerHTML = output ;

