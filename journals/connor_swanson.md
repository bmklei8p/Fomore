## 12/5/22
- Today I worked on adding links to the yelp URLs of the event cards. After adding URLs to the models, I went ahead and used the html <a> tag around the rendered image and name, and a css class to reformat the link.
- I also changed the style of the buttons on the itinerary column and the buttons on the form pages.

## 12/2/22
- Today I plan to do: get add button to work on every tab, change the column for when a user isn't logged in, add a collapsible sidebar for when a user IS logged in. Add a footer??
	- Column button, "Add Custom Event"
	- Pagination, Link to Yelp page
	- What merges need to happen? What is the status of our branches?

- I got the add button to work for the "Events" and "Attractions" tabs to add the specific events to the selected itinerary.
- I added a Welcome message to help new users of the application with an overview of how it works.
	- I may want to go back as a stretch goal and have it welcome a logged in user by their name and include different information.
- I made a simple logo and added them into a new directory within the ghi called "media", then I imported it into the components using it, calling them with an HTML image tag.
I then made a quick change to the forms so they render centered horizontally on the screen.

## 12/1/22
- Today I plan on adding auth to the column so it displays nothing if a user isn't logged in. We may need to get that sorted out elsewhere first. I want to display the login/signup in the column otherwise.
- I also want to add a collapsible sidebar for if a user is logged in. This will show a user icon (or avatar) and have all of the user functionality links (Itineraries, Events, Forms, etc.). There will be no links in the navbar otherwise. I think this would be good for having a cleaner page.
- Format events and attractions cards, css for buttons?
- Format the body to make the background render at 100vh (view height) as opposed to 100% (content height)

- I ended up using min-height: 100vh and max-height 100% to render the background color as the full viewport window, but that led to it not showing the color below where you would scroll for larger content. The max-height then is 100% so it encompasses all content.
- I changed the NavLink "add" buttons to html tags <button> and added a className that I worked on previously. It now works with hover as well.

## 11/30/22
- Today the plan is to work on the Itinerary dropdown display on the main page. The intention is to have multiple options in a drop down menu showing all the user's itineraries by name. Selecting one will make it the active itinerary and populate the card with the events within that itinerary.
- Currently the card is populating with a list of itineraries, so the first step is to replace these with events for a specific itinerary.
- Once that can populate with the events of one "hard coded" itinerary, I will proceed with adding the dropdown to be able to switch between them, hopefully this will be as easy as specifying an itinerary id.
- I hardcoded the Itinerary to the top of the column to get something to populate it to start

## 11/23/22
- Today at stand up we discussed moving forward with using Redux to store our states
- I made some changes to the formatting of the cards and from here Cara, Patrick, and I will begin working on allowing a user to Login. This will allow the user to create itineraries and events using the forms we outlined yesterday.
- We really struggled breaking down the modals from mongo-api-example and getting them to work. Will revisit over the weekend and next week.

## 11/22/22
- Today Cara, Patrick, and I worked on building the Event Form and Itinerary Form
- While completing both, we did need to spend time with the Back-End team that was working on getting all of our requests to work so that our models for our API calls from Yelp gave the correct information to what we needed.
- Our biggest hurdles currently are getting our Front-End to work with Redux which will be a major part of the development going forward, as well as Front-End authentication which we have yet to set up.

## 11/21/22
- Today's standup began as we discussed creating an itinerary event using the itinerary_id.
- It was quickly revealed that a CORS issue was occurring due to .gitignore not pulling up the .env file cointaining our Yelp API key.
- Upon splitting up, I worked with Cara and Patrick to start the outline/skeleton of our Main.js file which will be our landing page.
- We used the Yelp API to fetch restaurant data which we displayed via Cards using react-bootstrap
- Diving deeper into react-bootstrap, we set up our Main.js by importing a new component from Tabs.js which will display other components in various tabs to be clicked. One of which we populated by importing the Cards from earlier as a Component within one of the tabs.
- Tomorrow we will hopefully have our cards fully formatted to the page as well as add our search bar, date component, and possible adding a column to display an itinerary dropdown with events.

## 11/17/22
- We built the models/routes/queries for events using itinerary_id to connect it with the owner itinerary
- Cara and Patrick went into another room to begin outlining the front-end code in React

## 11/16/22
- Continued working on backend with Bryan sharing his screen.
- Made changes to mongodb/Dockerfile.dev to view our model in Mongo via our router/query/model for itineraries
- Added our application context to fastapi in docker-compose.yml to view use our get request for itineraries in FastAPI docs
- We had an issue making post requests as we needed to generate a token to create an itinerary.
- We were able to create an account (despite getting an error response) that showed up in Mongo.
	- It was used to generate a token which could then be used to create an itinerary
	- We had to change the from_date/to_date data type to a str instead of importing date from datetime
	- Something to mess with later, but we got it to work.
- Authentication was removed for faster testing of itinerary creation.
- At the last minute we were messing with creating an itinerary, eventually using a setattr method with account_id as an optional string.
- Tomorrow we will implement events as they relate to itineraries