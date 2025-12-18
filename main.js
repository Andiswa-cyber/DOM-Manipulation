document.querySelector("#B1").addEventListener("click",function(){document.getElementById("title").
    textContent="Hello Andiswa!"
})

document.querySelector("#B2").addEventListener("click",function(){document.getElementById("Background").
    style.background="blue"
})

document.getElementById("B3").addEventListener("click", function () {
    const info = document.getElementById("info");

    if (info.style.display === "none") {
        info.style.display = "block"; // show
    } else {
        info.style.display = "none";  // hide
    }
});



let count=0
document.querySelector("#B5").addEventListener("click",function increase (){ count++; 
    document.getElementById("count").textContent=count
})
document.querySelector("#B6").addEventListener("click",function decrease (){ count--;
    document.getElementById("count").textContent=count
})


const buttons = document.querySelectorAll(".answer");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

let score = 0;
const correctAnswer = "Paris";

buttons.forEach(button => {
button.addEventListener("click", () => {
if (button.textContent === correctAnswer) {result.textContent = "Correct";result.style.color = "green";score = 1;
        }
 else {result.textContent = "Incorrect";result.style.color = "red";
score = -1;}
scoreDisplay.textContent = score;
    });
});

const button = document.getElementById("B4");
const headings = document.querySelectorAll(".heading");

button.addEventListener("click", function () {
  headings.forEach(function (heading) {
    heading.style.color = "royalblue";
  });
});
