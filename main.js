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


// MODAL SCRIPT 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  localStorage.clear()
  location.reload()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Questionaire Quiz

const submitBtn = document.getElementById("submit")
let test = document.querySelectorAll(".test_question")
let counter = 0;



submitBtn.addEventListener("click", function(event){
  event.preventDefault()
  
  modal.style.display = "block";

  test.forEach(x => {
    
    if(x.checked===true){
      // console.log(x.getAttribute("data-attr"))
      // if(x.getAttribute("data-attr")==="q43wrong" || x.getAttribute("data-attr")==="q44true"){


         

        // Dyspraxia  
        if(x.getAttribute("data-attr")==="q31true"){
          counter++
        }
        if(x.getAttribute("data-attr")==="q44true"){
          counter--
        }
      console.log(counter)
        if(counter===1){
  
          let descr = {
            ldName : "Dyspraxia",
            ldDes : "Dyspraxia: difficulty with math problems, understanding time, using money"
          };
  
          localStorage.setItem("data", JSON.stringify(descr));
  
        }else


      // Visual processing disorder 
      if(x.getAttribute("data-attr")==="q1true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q28true"){
        counter++
      }
    console.log(counter)
      if(counter===2){

        let descr = {
          ldName : "Visual processing disorder",
          ldDes : "Visual processing disorder: difficulty with math problems, understanding time, using money"
        };

        localStorage.setItem("data", JSON.stringify(descr));

      }  else

      // Dyscalculia 
      if(x.getAttribute("data-attr")==="q2true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q11true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q21wrong"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q22true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q20wrong"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q36true"){
        counter++
      }
      
      if(counter===6){

        let descr = {
          ldName : "Dyscalculia",
          ldDes : "Dyscalculia : difficulty with math problems, understanding time, using money"
        };

        localStorage.setItem("data", JSON.stringify(descr));

      }  else
      // Dysgraphia 
      if(x.getAttribute("data-attr")==="q12true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q14true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q18true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q19true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q32true"){
        counter++
      }
      
      if(counter===5){
        console.log(counter)

        let descr = {
          ldName : "Dysgraphia",
          ldDes : "Dysgraphia : difficulty with handwriting, writing, spelling, organizing ideas."
        };

        localStorage.setItem("data", JSON.stringify(descr));

      } else 

       // Auditory processing disorder  
       if(x.getAttribute("data-attr")==="q4true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q7true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q10true"){
       counter++
      }
      if(x.getAttribute("data-attr")==="q30true"){
        counter++
      }
     
      if(counter===4){

        let descr = {
          ldName : "Auditory processing disorder",
          ldDes : "Auditory processing disorder : difficulty hearing differences between sounds, reading comprehension language."
        };

        localStorage.setItem("data", JSON.stringify(descr));

      } else
      
      // Dyslexia  
       if(x.getAttribute("data-attr")==="q1true"){
        counter=2
      }
      if(x.getAttribute("data-attr")==="q9true"){
        ++counter
      }
      if(x.getAttribute("data-attr")==="q11true"){
       counter++
      }
      if(x.getAttribute("data-attr")==="q13true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q30true"){
        counter++
      }
     
      if(counter===7){
        let descr = {
          ldName : "Dyslexia",
          ldDes : "Dyslexia : difficulty with handwriting, writing, spelling, organizing ideas."
        };

        localStorage.setItem("data", JSON.stringify(descr));

      } else

      // Dysphasia/aphasia   
      if(x.getAttribute("data-attr")==="q3true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q6true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q9wrong"){
       counter++
      }
      if(x.getAttribute("data-attr")==="q10wrong"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q11true"){
        counter++
      } 
      if(x.getAttribute("data-attr")==="q30true"){
        counter++
      }
      
      if(counter===10){
        let descr = {
          ldName : "Dysphasia/aphasia",
          ldDes : "Dyslexia : difficulty with handwriting, writing, spelling, organizing ideas."
        };

        localStorage.setItem("data", JSON.stringify(descr));

      } else

      // Autism    
      if(x.getAttribute("data-attr")==="q8true"){
        counter=4
      }
      if(x.getAttribute("data-attr")==="q32true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q41true"){
       counter++
      }
      if(x.getAttribute("data-attr")==="q42true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q43true"){
        counter++
      } 
      
      if(counter===8){
        let descr = {
          ldName : "Autism",
          ldDes : "Autism : difficulty mastering certain academic skills, it can stem from pervasive developmental disorders such as autism and Asperger's syndrome. E.g communicating, reading body language, learning basic skills, making friends, making eye contact."
        };

        localStorage.setItem("data", JSON.stringify(descr));

      } else 

      // ADHD    
      if(x.getAttribute("data-attr")==="q5true"){
        counter=5
      }
      if(x.getAttribute("data-attr")==="q16true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q23true"){
       counter++
      }
      if(x.getAttribute("data-attr")==="q24true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q27true"){
        counter++
      } 
      if(x.getAttribute("data-attr")==="q29true"){
        counter++
      }
      if(x.getAttribute("data-attr")==="q34true"){
        counter++
      } 
      
      if(counter===11){
        let descr = {
          ldName : "Attention deficit hyperactivity disorder",
          ldDes : "while not considered a learning disability ( LD ), it can certainly disrupt learning. Children with ADHD often have problem sitting still, staying focused, following instructions, staying organized and completing homework."
        };

        localStorage.setItem("data", JSON.stringify(descr));

      } 

      
    }





  })

  let ldData = JSON.parse(localStorage.getItem("data"));
  // console.log(ldData.ldName)
  // document.getElementById("ldName").innerHTML == ldData.ldName


  
})

btnn = document.getElementById("checkResult");

btnn.addEventListener("click", function(event){
  let display = document.getElementById("ldName")
  
  let ldData = JSON.parse(localStorage.getItem("data"));
  if(!ldData){
    alert("no response detected")
  }else{

    console.log(ldData.ldDes)
    // alert("Your Response points to"+" "+ldData.ldName)
    display.innerText == ldData.ldName
    document.getElementById("ldName").innerHTML = ldData.ldName
    document.getElementById("ldDes").innerHTML = ldData.ldDes

  }
})



























// const radioBtn = document.querySelectorAll("input[class='test_question']")

  // if(rd1.checked===true && rd2.checked===true){
  //   console.log("working")
  // }



