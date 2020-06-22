var currentTime = new Date();//date
var currentHour = currentTime.getHours();//number
currentHour.toLocaleString()//number

var leadEl = $("#currentDay");//any
leadEl.text(currentTime);//date


document.addEventListener("click", function(event){
    event.preventDefault();
    if(event.target.type === 'submit'){
    var index = event.target.getAttribute('data-time-index');
    var inputfield = document.querySelector(`#content-${index}`).value;
    console.log(index, inputfield);
    //set index and inputField to local storage
    localStorage.setItem(index, inputfield);//new key value pair
    }
})

//for loop interates 9 time that is 9 hour
for (var i = 0; i < 9; i++){
    //content 0....to content 8
    var textArea = document.querySelector(`#content-${i}`);
    //get item on localstorage as a text
    var st = localStorage.getItem(i) || ''; 
    textArea.textContent = st;//return
    //if current hour is greater than i + 9 that mens it's past time
    if(i + 9 < currentHour){
        textArea.classList.add('past')
    }
    //else if is equle to current hour that means present
    else if(i + 9 === currentHour){
        textArea.classList.add('present')
    }
    // if not that mean future time
    else{
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
     