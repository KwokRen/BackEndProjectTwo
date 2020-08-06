# OnTrack (Kwok Ren's CRUD Website for GA Project Two)

#### Project Snapshots

[<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1596636649/Screen_Shot_2020-08-05_at_9.41.47_AM_nijhdi.png" width="800" height= "400">](https://res.cloudinary.com/dpggcudix/image/upload/v1596636649/Screen_Shot_2020-08-05_at_9.41.47_AM_nijhdi.png)
[<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1596637297/Screen_Shot_2020-08-05_at_10.19.09_AM_cgqo8k.png" width="800" height= "400">](https://res.cloudinary.com/dpggcudix/image/upload/v1596637297/Screen_Shot_2020-08-05_at_10.19.09_AM_cgqo8k.png)
[<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1596636647/Screen_Shot_2020-08-05_at_9.42.40_AM_c3qvzu.png" width="800" height= "400">](https://res.cloudinary.com/dpggcudix/image/upload/v1596636647/Screen_Shot_2020-08-05_at_9.42.40_AM_c3qvzu.png)

#### Website Link

<a href="https://kwokrengaproject2.netlify.app/" target="_blank"><img src="https://res.cloudinary.com/dpggcudix/image/upload/v1596637877/Screen_Shot_2020-08-05_at_10.31.04_AM_z4ikzo.png" width="200" height= "80"></a>

#### Description

Finding it hard to follow through on plans for a exercise regimen? Never fear, OnTrack is here to keep you on track! OnTrack is a free website application that you can use to keep track of your routines and meals for the day. 

Users can navigate to the exercise tracker, and create up to three routines per day. In addition to the routines, you can describe the difficulty, the amount of sets and reps you plan to do and even add a link to an instructional video! While you create your exercise, you can also implement your meals for the day (which will be shown in the food tracker below the exercise tracker). The best part is, you can create multiple plans for different days. Cross off any exercises you finish and you can edit or delete any entries anytime!

The website is made with HTML, CSS, and JavaScript in the frontend. I also used the BootStrap library and icons from FontAwesome. In the backend, I used express to create APIs. With Heroku, MongoDB Atlas, and Netlify, I was able to create a full CRUD (create, read, update, and delete) application. I intend of updating it as I learn more developer languages and skills both in the frontend and backend.


#### Technologies

*Frontend*

<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" width="50" height="50">
<img src ="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" width="50" height="50">
<img src ="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" width="50" height="50">
<img src ="https://www.netlify.com/img/press/logos/logomark.png" width="50" height="50">

*Backend*

<img src ="https://expressjs.com/images/express-facebook-share.png" width="100" height="50">
<img src ="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" width="50" height="50">
<img src ="https://cdn.worldvectorlogo.com/logos/mongodb.svg" width="50" height="50">
<img src ="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png" width="50" height="50">

#### Features

- Users can create new day entries
- Users can select which dates to appear on the tracker
- Users can cross off routines they have done
- Users can edit and delete their date
- Users can add their meals and cross off foods they've already eaten
- Users can edit their food choices
- Accessible over all media devices
- Hovering over things have different effects

#### Future Implementation (Backend)

- A new model Schema for Login (Username and Password)
- Updating Fitness Schema to add a Calories section
- A new model Schema for reviews / testimonies
- Refactoring code
- Learn how to use reference ObjectId's in a easier way
- Adding more routes (i.e. deleting one food, creating food seperately)

## [Read about how I created my frontend](https://github.com/KwokRen/FrontEndProjectTwo/blob/master/planning_directory/README.md)

# The Backend

#### Models

I created two model schemas. One for the fitness side of things (which included exercise, day, and food which referenced to the other model schema). Inside this schema was an embedded schema exercise, which included routine, difficulty, amount of sets, amount of reps, and description (where you can input a URL string). The other schema was the food schema, and that one held breakfast, lunch, dinner, as long as the day and a fitnessId that tracked that had an ObjectId referred to the exercise schema. These models represent how our data will be structured and what their inputs can or cannot be.

#### Controllers

There are eight different controllers. I start with the ones that displayed the data. `indexFitness` was the first controller, and all it does is display all the data gathered for the fitness schema. I used populate to display data that was stored inside a certain ObjectId. `indexFood` does something very similar where it gets all the data from the food schemas specifically instead of fitness schema (which also includes food). 

`getOneFitness` displays one fitness schema model of your choosing. You would have to find the objectId that is assigned with that fitness schema to grab the data from it. `getOneFood` does the same except instead of the fitness schema, it grabs one specific (based on objectId) from the food schema.

I did something different for create. For `create`, I created both the food schema and fitness schema together so I could link both of their ObjectId's easier. This way, I can push into one another's property as a ObjectId and then I can reference it when I call one or the other. This is easier because they are both created together and the variables are all defined within the function because of local scope. So I called two functions within this function called `createFitness` and `createFood`. I returned a id so on the frontend, the page would display automatically the day you created. 

I can edit/update using the `fitnessUpdate` and `foodUpdate` controllers. Each of them takes in a specific id, and then using the schema model I have, I can follow it's format and input it in a body, which will replace the old values the specific id had. 

Lastly, there is one delete route (but in the future two), and this one is called `destroy`. This takes in the id of both the fitness I want to grab and since I can refer to the food in that same fitness schema using it's ObjectId, I can just grab that id and delete the food model related to it too. 

#### Routes 

Since there are eight controllers, I have eight different routes. `indexFitness` and `create` did not need anything attached to the website URL. `indexFood` would require you to add a /food to the current URL to grab all the food. `getOneFitness`, `fitnessUpdate`, and `destroy` would all require you to put after the / the specific id you are trying to grab, update or delete. `getOneFood` and `foodUpdate` require you to combine both /food and then add another /:id with id being the specific id of the food you want to get or update.

#### Server.js

I used different dependecies such as morgan, cors, express and mongoose. I had to require them to use them. To hide information like our PORT and NODE_ENV, I had to put them in a another file and also use dotenv. I connect to our mongoose and whitelist sites with our cors for security purposes. On the bottom past our middleware, I needed to make the route. When there is a /fitness, it will use all the routes I created. Finally, I create a listener on the bottom.