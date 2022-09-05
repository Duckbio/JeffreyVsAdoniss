import React from "react";

export default function due() {
    const [value, setValue] = React.useState('');
    let kcal_goal = 2384;
    let protein_goal = 149;
    let fat_goal = 79;
    let carbohydrate_goal = 268;
    function handleChange(e) {
        setValue(e.target.value)
    }

    async function fetchAPI() {
        let data = {
            query: value,
        }
        let fetchData = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-app-id': '9d5d9a81',
                'x-app-key': 'c5142431f3705ea6904a2244a791c096',
                'x-remote-user-id': 0
            })
        }
        let response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', fetchData)
        let text = await response.json();
        const foodTypes = text.foods.map(food => {
            const grams_for_calories = (food.nf_calories > 1) ? kcal_goal / food.nf_calories / text.foods.length : kcal_goal * food.nf_calories / text.foods.length;
            const grams_for_protein = protein_goal / food.nf_protein / text.foods.length;
            const grams_for_fat = fat_goal / food.nf_total_fat / text.foods.length;
            const grams_for_carbs = carbohydrate_goal / food.nf_total_carbohydrate / text.foods.length;
            const average_gramage = (grams_for_calories + grams_for_protein + grams_for_fat + grams_for_carbs) / 4;
            const info_for_grams = {cals_per_gram: food.nf_calories, protein_per_gram: food.nf_protein, fat_per_gram: food.nf_total_fat, carbs_per_gram: food.nf_total_carbohydrate, grams_for_cals: grams_for_calories, grams_for_protein: grams_for_protein, grams_for_fat: grams_for_fat, grams_for_carbs, gram_average: average_gramage, calories: food.nf_calories*average_gramage, protein: food.nf_protein*average_gramage, fats: food.nf_total_fat*average_gramage, carbs: food.nf_total_carbohydrate*average_gramage};
            console.log(info_for_grams)
        })
    }
    return (
        <div>
            <input type='text' name="input" onChange={(e) => handleChange(e)} value={value}></input>
            <button onClick={fetchAPI}>Fetch</button>
            <style jsx>{`
                input {
                    width: 200px;
                    height: 20px;
                }
            `}</style>
        </div>
    )
}