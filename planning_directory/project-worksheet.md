# Project Overview

## Project Description

For Project Two of the General Assembly SEI course, we were assigned to create a website that shows our knowledge and understanding of CRUD and RESTful APIs. We have to create the backend using express and MongoDB. We create our frontend using HTML, CSS, and JavaScript. 

For this project, we will be building a fitness tracker website. In order to do that and for the website to store data, we have to create the backend. Using express, we create different models to represent how users can input their data. Afterwards, we worked on controllers that will allow users to create, read, update, and delete (CRUD) their information on the website. Finally, we need to put them in routes so the backend and the frontend can communicate with one another. 

## User Stories

- Users will be able to use the navigation bar to navigate to different sections of the website
- Users will be able to access an exercise tracker
- Users will be able to access a food tracker 
- Users will be able to input exercises of their choice and details about the routine such as difficulty, sets, reps, and directions (as a URL to a document or video that instructs them)
- Users can add up to the three exercises to a day
- Users can add several amounts of days (if they want to plan ahead)
- While filling out the form for exercises, users can also input what their meal is (up to three items per meal) for the day
- Users can edit/remove exercises and food they want to update or remove

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Friday July 31st (Day 1)| Project Description / Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Saturday August 1st (Day 2)| Deployed to Heroku and Netlify and connected with MongoDB Atlas / Finished `backend` | Complete
|Sunday August 2nd (Day 3)| Creating CRUD in the `frontend`, finished showing and editing | Complete
|Monday August 3rd (Day 4)| Core Application Structure (HTML, CSS, etc.)| Complete
|Monday August 3rd (Day 4)| Creating CRUD in the `frontend`, finished update and delete | Complete
|Tuesday August 4th (Day 5)| Media Queries / MVP | Complete
|Wednesday August 5th (Day 6)| Bug Fixes | Complete
|Thursday August 6th (Day 7)| Documentation | Incomplete
|Friday August 7th (Day 8)| Final Touches and Present | Incomplete

## Wireframes

The top will include a navigation bar which includes navigations to the exercise tracker and food tracker sections. Below it will have a banner of sort displaying information about the website. Following that will be the exercise tracker and then the food tracker. Lastly, there will be a footer which will include a link to my website portfolio. Mobile, Tablet and Desktop designs all look very similar in terms of blocks and color schemes. Even though the colors in the wireframes were not used, the design of the site remains all the same. 

- [Mobile](https://res.cloudinary.com/dpggcudix/image/upload/v1596158534/Screen_Shot_2020-07-30_at_9.21.11_PM_eh4ib2.png)
- [Tablet](https://res.cloudinary.com/dpggcudix/image/upload/v1596158534/Screen_Shot_2020-07-30_at_9.21.21_PM_ki4eij.png)
- [Desktop](https://res.cloudinary.com/dpggcudix/image/upload/v1596158534/Screen_Shot_2020-07-30_at_9.21.30_PM_ks8yw3.png)

## Time/Priority Matrix 

The priority for the backend was focused on making the different controllers. Figuring how information from the database gets recieved from our model schemas was important, especially when you work with models that might have a key value pair with a ObjectId type. Creating the schema was also difficult because we might have to figure out what relationships we wanted (1:1, 1:N). Routes and setting up dependencies were not as hard and therefore does not take too much precedence. I did not need a seed for this project.

- [Backend](https://res.cloudinary.com/dpggcudix/image/upload/v1596160886/Screen_Shot_2020-07-30_at_10.00.45_PM_jp3fag.png)

#### MVP 

- Importing all the packages
- Creating our models
- Create the controllers
- Create the routes
- Finishing setting up the server.js page
- Testing the routes on Postman

#### PostMVP 

- Add more models
- Updating models
- Fixing any bugs

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Importing Packages | H | 0hr | 0hr | 0hr|
| Creating Models | H | 2hr | 2hr | 2hr|
| Creating Seed | H | 2H | 0hr | 0hr|
| Creating Controllers | H | 4hr| 6hr | 6hr |
| Creating Routes | H | 2hr | 0hr | 0hr|
| Server.js Page | H | 1hrs| 0hr | 0hr |
| Testing Routes | H | 2hr | 1hr | 1hr|
| Total | H | 13hrs| 9hrs | 9hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Add More Models | L | 2hr | 0hr | 0hr|
| Total | H | 2hrs| 0hrs | 0hrs |

## Additional Libraries

- [Bootstrap Library](https://getbootstrap.com/) 
- [jQuery](https://jquery.com/)
- [Popper](https://www.npmjs.com/package/popper)
- [FontAwesome](https://fontawesome.com/)

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
const create = async (req, res) => {
    try {
        const createFitness = async () => {
            const fitnessCreation = await Fitness.create(req.body[0]);
            return fitnessCreation
        } 
        const createFood = async () =>  {
            const foodCreation = await Food.create(req.body[1]);
            return foodCreation
        }
        const [fitness1, food1] = await Promise.all([createFitness(), createFood()])
        await fitness1.food.push(food1._id)
        await fitness1.save()
        await food1.fitnessId.push(fitness1._id)
        await food1.save()
        const allFitness =  await Fitness.find(fitness1._id).populate('food');
        res.status(200).json(allFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

```

This code above is for the create route (post route). Our body will have two elements in an array, therefore I can use req.body with an index to indicate which element of the body it is grabbing. We are creating two different things in here, and because we are creating them together, we can grab their id's and store them within one another by pushing them. 

## Issues and Resolutions

One of the coolest and new ways I found out I can connect two different schemas together is by creating both at the same time. My peer, Kristy Lee, was working on an issue like this and we tackled it together. We both wanted to connect two different model schemas together by their ObjectId, so we came up with the idea to put them with each other inside one function. This allowed us not to link by ObjectId by creating one before the other. 

We were figuring out how we could use one body for the req.params.body, and we experimented and found out arrays worked! We still aren't sure whether it's best practice but it works so we were not complaining.

Another major issue I encountered in the frontend was deploying it to Heroku properly. Me and my peer were working on deploying to Heroku and we realized our ObjectId was not pushing to Heroku from our Postman. After several hours of trying to figure out why, we enlisted the help of Alex Merced (from alexmercedcoder.com) to help solve our issue. He explained that our data we were sending to Heroku would go through several databases around the world, and that sometimes our data would not pass through properly. To resolve this issue, `w=majority&j=true&wtimeout=1000` was added to end of our mongoURI and this would somehow push most of the information to most of the databases for MongoDB and therefore, allowing the ObjectId to be go through and functioning how it's suppose to. 
