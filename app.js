document.addEventListener('DOMContentLoaded', () => {
const startBtn = document.querySelector('.beer-button')
const randomBeer = document.querySelector('.random-beer')
const descriptionDisplay = document.querySelector('.description')
const abvDisplay = document.querySelector('.abv')
const foodPairing = document.querySelector('.food')

function getData(e){
    e.preventDefault()
    
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => {
        return response.json()
    })
    .then(data => {
    //    console.log(data)
        const name = data[0].name
        const description = data[0].description
        const abv = data[0].abv
        const food = data[0].food_pairing
        console.log(food)
        const {volume} = data[0]
        const volumeValue = volume.value
        const volumeUnit = volume.unit
    //   console.log(volume.value, volume.unit)
    
        randomBeer.innerHTML = name // + ' ' + volumeValue + ' ' + volumeUnit
        abvDisplay.innerHTML = abv + "%"
        descriptionDisplay.innerHTML = description
        foodPairing.innerHTML = food
    })
}

startBtn.addEventListener('click', getData)

})