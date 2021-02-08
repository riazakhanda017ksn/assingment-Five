let button = document.getElementById("button")
let inputValues = document.getElementById("inputValue")


button.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValues.value + '')
        .then(res => res.json())
        .then(data => {
            DisplayShowMeals(data.meals);
        })
})




const DisplayShowMeals = mealsItem => {

    const divMeals = document.getElementById("meal")

    mealsItem.forEach(meal => {
        const  div = document.createElement("div")
        div.className =
            'mealPlaceStyle'

        const mealInfo = `

<h4 class="h4" >${meal.strMeal}<h4>

 <img class="img" src="${meal.strMealThumb}">

 <button  onclick="mealShowDetails(${meal.idMeal})"  class="button" > Details </button>


`

        div.innerHTML = mealInfo


        divMeals.appendChild(div)
    })



}

const mealShowDetails=strMeal=>{


fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeal}`)
.then(res=>res.json())
.then(data=> renderMilfDetails(data.meals[0].strIngredient1));



}



const renderMilfDetails=meal=>{

const mealDetailsItem=document.getElementById("mealDetails")

     mealDetailsItem.innerHTML=`
      <img class="img" src="${meal.strMealThumb}">
     <h4>${meal.strMeal}<h4>
    
     `

}

