//console.log('Client side javascript file is loaded!');

// fetch('http://puzzle.mead.io/puzzle')
// .then((response) => {
// console.log(response);
// response.json().then((data) => {
//     console.log(data);
// })
// }) 


const fetchWeather = (address) => {
fetch('/weather?address=' + address)
.then((response) => {
    response.json().then((data) => {
        if(data.error){
            //console.log("There was an error");
            error.textContent = "Error fromt he function"; 
            message.textContent = ""
        } else {
            console.log(data);
            error.textContent = "";
            message.textContent = `
            Summary : ${data.forecast}
            Locations : ${data.location}
            `;
        }

    })
})
}


const weatherForm  = document.querySelector('form'); 
const searchElement = document.querySelector('input'); 
const error = document.querySelector('#error'); 
const message = document.querySelector('#message'); 
//error.textContent = "Error!!"; 


weatherForm.addEventListener('submit',  (event) => {
    event.preventDefault();
    const location = searchElement.value; 
    fetchWeather(location);
})