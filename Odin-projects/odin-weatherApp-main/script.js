const locationAddress = document.querySelector(".location")
const searchButton = document.querySelector('.search-btn');
const searchBar = document.querySelector(".search-bar")
const temperatureElement = document.querySelector('.temperature');
const descriptionElement = document.querySelector('.description');
const conditionElement = document.querySelector('.condition');
const loadingSpinner = document.getElementById('loadingSpinner');

searchButton.addEventListener("click",()=>{
    const input = searchBar.value 
    if(input){
        getWeatherData(input)
    }
})

const getWeatherData = async(location)=>{

    try{

        loadingSpinner.style.display = 'block'

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.toLowerCase()}?unitGroup=metric&key=4X4D8YYBFNPRW2KGWUWTJYCLX&contentType=json`,{
            mode: 'cors'
        })

        if(!response.ok){
            throw new Error("Error: "+response.status)
        }
        const data = await response.json()
        locationAddress.textContent = await data.resolvedAddress
        descriptionElement.textContent = await data.description
        temperatureElement.textContent =`Current temperature: ${await data.days[0].temp} *C`
        conditionElement.textContent = await data.currentConditions.conditions
        imgElement = await data.currentConditions.icon

        loadingSpinner.style.display = 'none';


    }
    catch(err){
        console.error("Error fetching the weather data:", err);
    }

}




