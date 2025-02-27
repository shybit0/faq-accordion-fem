// // - Hide/Show the answer to a question when the question is clicked
// // - Navigate the questions and hide/show answers using keyboard navigation alone
// // - View the optimal layout for the interface depending on their device's screen size
// // - See hover and focus states for all interactive elements on the page

const moreInfoButtons = document.querySelectorAll(".show-hide");

moreInfoButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        toggleAnswer(btn);
    });
});

// keyboard events
const accordionTabs = document.querySelectorAll(".question");
let tabIndex = 0;
let prevIndex = 0;
document.addEventListener("keydown", (e) => {
    const keyName = e.key;
    if(keyName === "ArrowDown" || keyName === "ArrowUp" || keyName === "Enter"){
        e.preventDefault();
    }

    if(keyName === "ArrowDown"){
        moveDown();
    } 
    
    if(keyName === "ArrowUp"){
        moveUp();
    }

    if(keyName === "Enter"){
        let targetBtn = moreInfoButtons[tabIndex];
        toggleAnswer(targetBtn);
    }
});

function moveDown(){
    tabIndex += 1;
    prevIndex = tabIndex - 1;

    if(tabIndex > accordionTabs.length - 1){
        tabIndex = 0;
        prevIndex = accordionTabs.length - 1;
    }

    accordionTabs[tabIndex].classList.add("highlight");

    if(prevIndex >= 0){
        accordionTabs[prevIndex].classList.remove("highlight");
    } else{
        tabIndex -= 1;
        prevIndex = index + 1;
        accordionTabs[tabIndex].classList.add("highlight");
        accordionTabs[prevIndex].classList.remove("highlight");
    }
}

function moveUp(){
    tabIndex -= 1;
    prevIndex = tabIndex + 1;

    if(tabIndex < 0){
        tabIndex = accordionTabs.length - 1;
    }

    accordionTabs[tabIndex].classList.add('highlight');
    accordionTabs[prevIndex].classList.remove('highlight');
}

function toggleAnswer(btn){
    const answerNode = btn.parentNode.nextElementSibling;
    const imageSrc = btn.src;

    if(imageSrc.includes("plus")){
        btn.src = 'images/icon-minus.svg';
        answerNode.classList.remove("hidden");
    } else{
        btn.src = 'images/icon-plus.svg';
        answerNode.classList.add("hidden");
    }
}



