
// display images show and meals name------------------------>

let button = document.getElementById("button")
let inputValues = document.getElementById("inputValue")


button.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValues.value + '')
        .then(res => res.json())
        .then(data => {
            DisplayShowMeals(data.meals);

        })
        .catch(error => errorMessageShow('Something Went Wrong !! Please try again letter !'));
})




const DisplayShowMeals = mealsItem => {

    const divMeals = document.getElementById("meal")

    mealsItem.forEach(meal => {
        const div = document.createElement("div")
        div.className =
            'mealPlaceStyle'

        const mealInfo = `

<h4  onclick="mealShowDetails(${meal.idMeal})"     class="h4" >${meal.strMeal}<h4>

 <img  onclick="mealShowDetails(${meal.idMeal})"        class="img" src="${meal.strMealThumb}">

`

        div.innerHTML = mealInfo


        divMeals.appendChild(div)
    })



}


// here i showed the details about meals--------------------------------->


const mealShowDetails = strMeal => {


    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeal}`)
        .then(res => res.json())
        .then(data => renderMilfDetails(data.meals[0]));



}



const renderMilfDetails = (meal) => {

    const mealDetails = document.getElementById("mealDetails");

    mealDetails.innerHTML = `
  
  <img class="imgDesing" src="${meal.strMealThumb}">

  <h4 class="headingDesing">${meal.strMeal}<h4>



  `

    const ul = document.getElementById("mealsContainer");

    ul.innerHTML = `


<li>${meal.strIngredient1}</li>
<li>${meal.strIngredient2}</li>
<li>${meal.strIngredient3}</li>
<li>${meal.strIngredient4}</li>
<li>${meal.strIngredient5}</li>
<li>${meal.strIngredient6}</li>
<li>${meal.strIngredient7}</li>
<li>${meal.strIngredient8}</li>
<li>available very soon</li>
<li>available very soon</li>



`

}


// ---------------here i showed the error message----------------------->


const errorMessageShow = error => {


    const errorTag = document.getElementById("errorMessage")

    errorTag.innerHTML = error;


}




