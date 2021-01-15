const colors = ["green", "red", "orange", "blue"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    const randomNumber = getrandomnumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getrandomnumber () {
    return Math.floor(Math.random()*colors.length);
}