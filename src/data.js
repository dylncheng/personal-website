import zm1 from './assets/zm1.png'
import yuki from './assets/yuki.png'
import recipe from './assets/recipe.png'
import spacestagram from './assets/spacestagram-landing.png'

let data = {
    projects:  [
        {
            name: "Spacestagram",
            description: "A mock social media platform created using the NASA Mars Rover API",
            image: spacestagram,
            github:"https://github.com/dylncheng/spacestagram",
            link: "https://dylncheng.github.io/spacestagram/"
        },
        {
            name: "Yuki Weather App",
            description: "A weather app created with the purpose of being minimalistic and accessible. ",
            image: yuki,
            github:"https://github.com/dylncheng/weather-app-new",
            link: "https://weather-app-newest.herokuapp.com/"
        },
        {
            name: "Recipe API",
            description: "A recipe API created as an exercise to be able to implement REST priciples for a large amount of data. The API interacts with a database with over 200,000 recipes, which were parsed from a CSV file.",
            image: recipe,
            github:"https://github.com/dylncheng/recipeAPI",
            link: ""
        },
        {
            name: "Zen-mo Task App",
            description: "Created for NewHacks 2021: A task app with an intuitive interface for students to use",
            image: zm1,
            github:"https://github.com/dylncheng/productivity-app",
            link: "https://devpost.com/software/zen-mo"
        }
    ]
};

export default data;