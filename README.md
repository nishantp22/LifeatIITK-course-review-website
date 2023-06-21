# Life@IITK : PCLub Secy Recruitment Task 6

## Description

This project is a web application built using React. I have choosen a template from MUI templates and have built the entire app over this template.
There are various componants involved, which are:<br>
1. App.js : The root component integrating the other sub-commponents and determining the overall structure.<br>
2. Home.js : The homepage component for the web application where all the courses are visible. User can access reviews of any particular course.
3. Mods.js and Lock.js : The Page specifically for moderators, which is accessed via Lock.js, a component which has the login interface for a moderator.
4. Course components (eg: MTH111_112.js) : These are the pages for a particular course, where user can post reviews about the course.
5. There is also a style.css which is used to style elements that are not in the template<br><br>

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-folder>`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your browser and visit: `http://localhost:3000`
3. <b>The built web application is deployed at "https://lifeatiitk.netlify.app"</b>
4. For accessing the moderator interface, the username is : futuresecy, and the password is : pclubsecy

## Approach
- The key idea is to create states(arrays) which will dynamically store any review object based on the inputs provided by the user.
- There are states(arrays) of reviews of each course and a master array for reviews under moderation(modList).
- Whenever a user submits a review, it is added to the modList array.
- In the moderator interface, all the reviews in the modList array are fetched using .map() method in JS. The moderator can then choose to approve or reject any review. Do note that a username and password is required to access the moderator interface.
- If the review is approved, it is added to the state(array) of reviews of that particular course and is removed from the modList array.
- If the review is rejected, it is removed from the modList array
- Finally, for each course, the state(array) of reviews basically contains all the approved reviews. These are then displayed using the .map() function in JS


