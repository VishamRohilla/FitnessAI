const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const mongoDB = require ('./mdb');
module.exports = getListofData;
const routes = require('./Routes/routes');

mongoDB();

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors(
  {
    origin : ["https://fitness-ai-omega.vercel.app/"],
    methods: ["POST"],
    credentials: true
  }
));
app.use(bodyParser.json());

app.use(express.json())
app.use("/",routes);

function getListofData(body) {
    return {
        "messages": [
          {
            "role": "system",
            "content": "You are an expert Gym Trainer, who as trained more than 1000+ people across the world. You have helped people lose weight and gain weight by providing them with accurate and best diet plan and exercises. You know all different kind of exercises and their impact on human bodies.\nAlso you have all the knowledge of veg and nonveg specific diets that will help any person lose or gain weight.\n\n"
          },
          {
            "role": "user",
            "content":"I am looking to improve my fitness and need a personalized workout plan from a gym trainer. Here are some details to help you create the plan:\nPersonal Information:Height: " + body.height + "in centimeters \nWeight: "+ body.weight +" in Kilograms \n\n Gender: {{gender}} (Male,Female, etc.)\n\nFitness Goals:Primary Goal: "+ body.primarygoal +" (e.g., weight loss, muscle gain, overall fitness)\nSecondary Goal: "+body.secondarygoal+" (if any)\n\nFitness Level:"+ body.fit_level+" (e.g., beginner, intermediate, advanced)\n\nPreferred Workout Time:"+ body.timing +" (e.g., morning, afternoon, evening)\n\nEquipment Availability:"+ body.equip_available +" (e.g., full gym access, home gym, limited equipment)\n\nDietary Preferences:"+ body.diet_pf +" (e.g., vegetarian, non-vegetarian)\nAny specific dietary restrictions or allergies: "+ body.diet_rst +" (if any)\n\nExisting Health Conditions or Concerns:"+ body.Health_Conditions +" (if any, e.g., joint issues, allergies)\n\nPreferred Types of Exercises:"+ body.pfd_ex +" (e.g., cardio, strength training, flexibility)\n\nNumber of Days Available for Workouts:"+ body.day_pw +" days per week\n\nAny specific likes or dislikes:"+ body.like_dl + " (e.g., enjoy running, dislike weightlifting)\n\nIf any data is left empty, assume it to be \"None\".Also state the assumptions taken in output because input was left empty of that particular field.Give Assumptions in this manner. \n Assumptions: \n- \n- \n\nDo use spacings and line endings where required.\nPlease create a comprehensive workout and diet plan based on the provided information. Include the following details for each workout day:\nDay (e.g., Day 1)\nWarm-up routine\nMain workout routine\nCool-down activities\nDuration of each activity\nDiet plan of that day keeping in mind the goal of the person\nGive each day data separately\nFeel free to suggest variations or modifications based on progress and adapt the plan for a holistic fitness journey.\n Try to start your output with such texts-As an expert gym trainer, I'm happy to help you in your fitness journey."
            ,
          }
        ],
        "model": {
          "name": "openai/gpt-4-0613"
        },
        "variables": [
            {
              "name": "height",
              "value": body.height // height from your form input
            },
            {
              "name": "weight",
              "value": body.weight // weight from your form input
            },
          {
              "name": "gender",
              "value": body.gender 
            },
          {
              "name": "primary_goal",
              "value": body.primarygoal
            },
          {
              "name": "secondary_goal",
              "value": body.secondarygoal
            },
          {
              "name": "fitness_level",
              "value": body.fit_level
            },
          {
              "name": "preferred_time",
              "value": body.timing
            },
          {
              "name": "equipment_available",
              "value": body.equip_available
            },
          {
              "name": "dietary_preferences"	,
              "value": body.diet_pf
            },
          {
              "name": "dietary_restrictions"	,
              "value": body.diet_rst
            },
          {
              "name": "health_conditions"	,
              "value": body.Health_Conditions
            },
          {
              "name": "preferred_exercises"	,
              "value": body.pfd_ex
            },
          {
              "name": "number_of_days"	,
              "value": body.day_pw
            },
          {
              "name": "likes_dislikes"	,
              "value": body.like_dl
            },
      
          
            
          ]
        
    };
}
  app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`)
  })
  module.exports = app;