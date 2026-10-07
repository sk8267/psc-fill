const myBtn = document.getElementById("myBtn")


function checkAnswers() {
  const inputs = document.querySelectorAll(".answer");
  
  inputs.forEach(input => {
    const userAnswer = input.value.trim();
    const correctAnswer = input.dataset.answer;
    
    if(userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      input.classList.add("correct");
      input.classList.remove("incorrect");
    } else {
      input.classList.add("incorrect");
      input.classList.remove("correct");
    }
  });
}
