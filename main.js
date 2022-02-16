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


submitBtn.addEventListener("click", function(){ 
  alert("Result Currently Disabled!!"); 
});

