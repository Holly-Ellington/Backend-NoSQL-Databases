# Backend-NoSQL-Databases Wheather Tracker API
 


Weather Tracker API
In this assignment, you are asked to complete the Mongoose model and controller functions for a Weather Tracker API.

Tasks
1. Create the mongoose model for WeatherStatus
In weather.model.js, complete the Mongoose model so that it include a date (Date), city (String), state(String), country (String), temperature (Number), and condition (String).

const schema = mongoose.Schema({
  // TODO: Add date (Date), city (String), state(String), country (String), temperature (Number), and condition (String).


})
2. GET /weather - list all the weather documents
In weather.controller.js complete the list() function so that it lists all the WeatherStatus documents in the database. For the tests to pass, make sure that res.status returns a 200. res.body should look something like this:

[
  {
    _id: '6310cd192459c24367f150fc',
    date: '2022-08-09T00:00:00.000Z',
    city: 'San Antonio',
    state: 'Texas',
    country: 'United States of America',
    temperature: 90,
    condition: 'Sunny',
    __v: 0
  }
]
3. POST /weather - add a new weather status
In weather.controller.js complete the create() function so that it creates a new document with the information that was sent from the POST request. res.status should returns a 201 and res.body should return the document that was added like this:

{
  data: {
    date: '2022-08-10T00:00:00.000Z',
    city: 'San Antonio',
    state: 'Texas',
    country: 'United States of America',
    temperature: 90,
    condition: 'Sunny',
    _id: '6310cd192459c24367f150ff',
    __v: 0
  }
}
Note: you can use the following format to add the date: "2022-08-09". Mongoose automatically converts it to the Date format that you see in the JSON file (date: '2022-08-10T00:00:00.000Z').

Hint: Use res.status(201).json({ data: newWeatherStatus }); to return the status and the new weather status.

4. GET /weather/:weatherStatusId - get the weather status with a specific id
In weather.controller.js complete the read() function so that it returns the weather status with the :weatherStatusId. The response should look something like this:

{
  data: {
    _id: '6310d3a86a720e0c4bf3e8d0',
    date: '2022-08-09T00:00:00.000Z',
    city: 'San Antonio',
    state: 'Texas',
    country: 'United States of America',
    temperature: 90,
    condition: 'Sunny',
    __v: 0
  }
}
Hint: After implementing the read() function, don't forget to add the controller (.get(controller.read)) to the router in weather.router.js.

5. PUT /weather/:weatherStatusId - update the weather status with a specific id
In weather.controller.js complete the update() function so that it updates a weather status. The response should return the updated weather status.

{
  data: {
    _id: '6310d3a86a720e0c4bf3e8d5',
    date: '2022-08-10T00:00:00.000Z',
    city: 'San Diego',
    state: 'California',
    country: 'United States of America',
    temperature: 80,
    condition: 'Sunny',
    __v: 0
  }
}
6. DELETE /weather/:weatherStatusId - delete the weather status with a specific id
In weather.controller.js complete the read() function so that it returns the weather status with the :weatherStatusId. Only return a 204 status code after the document was deleted.

Tips
Review the code in the lesson. The methods that you are asked to implement should be very similar.
If you are working on the web IDE you only need to make changes on the weather.model.js and weather.controller.js files.
If you are working on this assignment from your local machine, follow the instructions below to get the code running. Make sure to only drag the weather.controller.js and weather.model.js to Qualified when submitting.
Working on your local machine
Some extra steps are necessary if you are working on this project from your machine.

Download the code and unzip it into your working folder.
Set your MongoDB connection string in DATABASE_URL in your .env file.
Uncomment the mongoose.connect code in app.js.
Type npm install and then npm start to start the server. To run the tests type npm test.
When you are done passing the tests and want to submit to Qualified, only drag the weather.controller.js and weather.model.js files into Qualified. Do not drag-and-drop app.js or the .env file (submitting your .env file will make your connection string visible to others and may cause issues with the tests).
