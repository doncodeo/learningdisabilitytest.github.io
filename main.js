// back to top button script 
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
    document.body.scrollIntoView();
};

backToTopButton.addEventListener("click", goToTop)

// Progress Bar Script 

const pageProgressBar = document.querySelector(".progress-bar")
document.addEventListener("scroll", () => {
  const scrolledPercentage =
      (scrollContainer().scrollTop /
        (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
      100;
  
  pageProgressBar.style.width = `${scrolledPercentage}%`
  
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});




// $(document).ready(function () {
//   var submitBtn = $("#submit");
//   var questions = $(".test_question")

//   submitBtn.click(function (event) {
//     event.preventDefault()
 



//   })


// });

// $('.quiz-main input').filter(':input').each(function(){
//   console.log("testing .question")
// });





const submitBtn = document.getElementById("submit")
const radioBtn = document.querySelectorAll("input[name='q1']")

submitBtn.addEventListener("click", function(event){
  event.preventDefault()

  let findSelected = () => {
    let selected = document.querySelector("input[name='q1']:checked")
    console.log(selected)
  }

  radioBtn.forEach(radioBtn => {
    radioBtn.addEventListener('click', findSelected)
  })

    
  
  alert()
})


// https://www.youtube.com/watch?v=J254pngGt6E


