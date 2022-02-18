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



const submitBtn = document.getElementById("submit")
const radioBtn = document.querySelectorAll("input[class='test_question']")

submitBtn.addEventListener("click", function(event){
  event.preventDefault()

  alert("result currently disabled!")

  // console.log(radioBtn.length);

  // radioBtn.forEach(radio => {
  //   if(radio.checked){
  //     if(radio.value=="q2true" && radio.value==="q11true") {
  //       alert("Dyscalculia")
  //     }
  //     console.log(radio.value);   
  //     // alert(radio.value)
  //   }
  // })

  
})



