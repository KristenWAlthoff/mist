# Notes

In server, every time we run the mistMiniflare.startServer(), it install node modules.
Running the tracer: node --require './server/tracing.js' server/miniflare

# mist

1. About mist
2. mist Set-Up
3. mist Usage
4. FAQ
5. Future Wish-List + Contact Us

## PART 1 - About mist


## PART 2 - mist Set-Up

### Option A - Using the npm package mist-analytics


### Option B - Using the GitHub repository

1. Clone this repo into your local machine in the same directory where the worker you want to test is located. `git clone https://github.com/oslabs-beta/mist.git`
2. Install the dependencies `npm install`
3. Create an ENV file in the same level as models folder
    - Then create a constant called `MY_URI` in ENV and set its value equal to your postgresSQL database link (see next step).
    - in metrics_model.js you must require dotenv and then invoke it.
      - Ex: `const dotenv = require('dotenv') dotenv.config();`
    - After invoking dotenv.config you will be able to set constant myURI equal to the env constant `MY_URI`.
4. Set up a postgreSQL database-- we recommend using elephantSQL-- and link it to the SQL schema
    - Copy the link to your empty database
    - Paste that link into the ENV file and save it as myURI
    - Open up the ***mist*** directory in your terminal
    - Run the following command: `psql -d <url from elephantSQL> -f db_template.sql`
5. Run the following scripts to start up the app:
    - `npm run dev` to start the GUI on localhost:8080
    - `node server/server.js` to start the server listening on your worker
    - `node --require './server/tracing.js' server/miniflare` to start your worker

## PART 3 - mist Usage
1. Once all servers are running and your Worker is ready to be tested, navigate to `localhost:8080`. Here, to initiate the metric recording session click the `Start` button.
2. Next, navigate to `localhost:8788` and fire off your Worker that is being tested. Allow for 5 seconds to elapse for data collection, prior to firing off the Worker again. This will ensure that the data is properly traced through Miniflare. Test whatever functionality you would like to see reflected in that session's metrics.
3. Once you have fired off all Worker invocations for that session, navigate back to `localhost:8080` and click the `Stop` button to end the session. 
4. In order to then display your session data, click the `Generate Metrics` button and the charts will display your metrics!
5. After you are finished analyzing this session data, click the `Reset Metrics`.
Check out our Medium article for more information.

[Medium](https://mistanalytics.com/)
### Logs
The logs that are retrieved from the Worker you are developing will be stored in an object called metrics which is composed of key that make up the logistics of the metrics information gathered.
`Method` : stores the HTTP Request method/
`URL` : is set to the endpoint that the Worker you are testing is firing HTTP requests from.
`Status` : the value is equal to whether the HTTP Request is successful `200` or a Bad Request `400` for example. 
`Response Time` : time set in milliseconds that is equal to the duration it took for the HTTP request to complete.
`Session Number` : set to the current session number in your database.
`Start Time ` : set equal to the time it was when you clicked the start button on mist.
### Request Time vs. Start Time
The data from the logs is plotted on this chart to show you the response time of the worker vs. the time it was fired off in the session you just ran.
### Success vs. Error Rate
This pie chart offers a quick look at the rate of successes vs. errors on your worker from your previous session.

### Past Sessions Average Response Time
When you fire off a worker, data from the last 5 sessions in which you tested that worker is aggregated and the response times are averaged. That data is rendered to this bar graph to give you a comprehensive comparison of how this worker has performed over sessions.


## PART 4 - FAQ

**Q: I ran a session but still am not seeing any data appear.**

**A:** Make sure you hit the `Generate Metrics` button to render your data. If ***mist*** is showing metrics from a previous session, make sure you hit `Reset Metrics` and then run a new session by pressing the  `Start` button.


**Q: I want to see a record of all logs from a specific worker. How can I access this data?**

**A:** While this feature is still in development, you can access this data from your postgreSQL database by running the following command:
    `SELECT * FROM "public"."metrics" WHERE worker = <your-worker-name>`
    
    
**Q: I fired off my Worker severeal times but I am not seeing all of that data reflected in the logs. What happened?**

**A:** What most likely happened here is that the tracer did not have time to process your request to the Worker and store it in the database. Try waiting approximately 5 seconds between invocations of the Worker to ensure that all data is collected without interference.



## Future Wish-List + Contact Us

- Modularize server, routing, controllers for Flare
- Update .env file with [secrets](https://towardsdatascience.com/keep-your-code-secure-by-using-environment-variables-and-env-files-4688a70ea286)
-
 node --require './server/tracing.js' server/miniflare


 ## PART 5 - Future Wish-List + Contact Us