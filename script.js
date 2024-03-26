// JavaScript code
document.querySelector("button").addEventListener("click", function() {
    let inputValue = document.querySelector("input").value; // Get the value from the input field
    const apiKey = "7c98d0de87194fd9995111536242503";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}`; // Use the input value in the API request

    let weatherLoc = document.getElementById("city");
    let region = document.getElementById("region");
    console.log(weatherLoc);
    let temp = document.getElementById("temperature");

    fetch(url, {
        headers: {
            Accept: "application/json" 
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        weatherLoc.innerText = 'City: '+data.location.name;
        region.innerText = 'Region: '+data.location.region;
        temp.innerText = `${data.current.temp_c} °C`;
    })
    .catch(error => {
        console.log(error);
    });
});
