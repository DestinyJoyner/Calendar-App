<h1>Destiny Front End Pern-Portfolio Project</h1>

[Explore the Calendar Application Here!](https://destiny-calendar-project.netlify.app/)

[Deployed Backend](https://pern-portfolio-calendar-app.onrender.com/)&emsp; &emsp;

This is a React application that allows the user to create an account, login and have the option to add, update, view, and or delete an event to their unique calendar. The frontend uses various React libraries (axios, react-router-dom, react-icons, react-words, react-token-auth, react-uuid, use-sound). No additional CSS libraries are needed to run this application.  The user authentication is coded in the backend (Express, and Postgres database) using JSON Web Tokens (JWT), and Bcrypt.

<img src="/public/readme-screenshot.png" alt="screenshot"  width="500"/>

(when registering, be sure to type your password carefully, as it will be stored as is the first time you register for an account)

<h2>Instructions for Cloning</h2>
-You will need to also clone down the  [Backend Repo](https://github.com/DestinyJoyner/Pern-Portfolio-Backend) to run the application locally
-Once cloned, run the `npm i` command and then `npm start`
-You will need to create an .env file and set the `REACT_APP_API_URL` key to the local host port you will be running on your backend (SEE BACKEND REPO README ABOVE) 

##User Stories
- As a user, I can register for an account on the App
- As a user, I can successfully login to the application using the username and password I registered with
- As a user, I can see error messages if my login/registration values are incorrect
- As a user, once logged it, I can navigate to an index page where all (if any) of my scheduled events are displayed
- As a user, once logged in, I can see a user window on the top of the screen in order to LOGOUT
- As a user, if I haven't added any events, I am prompted to do so on the Index Page
- As a user, I can click an icon to add an Event to my schedule/calendar on the Index Page
- As a user, I can delete an event from my calendar on the Index Page
- As a user, I can see a list of scheduled events happening today (if any) on the Index Page
- As a user, I can see clickable dates that will show me the events scheduled for that day from my calendar
- As a user, I can click on an event from my calendar and be navigated to a Show page for that event
- As a user, I can VIEW, UPDATE, or DELETE an individual event from the Show Page
- As a user, I can open the Nav bar from a side panel and see clickable Links to the HOME page, INDEX page, NEW FORM page, and ABOUT page
- As a user, I can toggle the DARK theme on or off using the switch in the NAV bar
- As a user, I can contact the developer by accessing links on the HOME page or on the ABOUT page
- As a user, I can have a really fun time using this APP!!
