let currentTime = new Date();
let currentHour = currentTime.getHours();
currentHour.toLocaleString()

let leadEl = $("#currentDay");
leadEl.text(currentTime);


document.addEventListener("click", function(event){
    event.preventDefault();
    if(event.target.type === 'submit'){
         let index = event.target.getAttribute('data-time-index');
    let inputfield = document.querySelector(`#content-${index}`).value;
    console.log(index, inputfield);
    localStorage.setItem(index, inputfield);
    }
})

for (let i = 0; i < 9; i++){
    let textArea = document.querySelector(`#content-${i}`);
    let todo = localStorage.getItem(i) || ''; 
    textArea.textContent = todo;
    if(i + 9 < currentHour){
        textArea.classList.add('past')
    }else if(i + 9 === currentHour){
        textArea.classList.add('present')
    }else{
        textArea.classList.add('future')
    }
}

/*function loadPage() {
    if(currentHour > textArea)
    {
        hourRow.css("background-color", "grey");
    }
    else if (startDate === eventHour)
    {
        hourRow.css("background-color", "green");
    }
    else{
        hourRow.css("background-color", "blue");
    }
};
loadPage();*/
     