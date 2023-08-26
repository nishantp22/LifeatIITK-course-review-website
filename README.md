# Life@IITK : Course Review Website

## Description

This project is a web application where IITK students can post reviews about various courses, and moderators can approve or reject reviews. It is built using the MERN stack : MongoDB, Express.js, React.js and Node.js.

## Features

- The users can view already posted reviews, and can post their own reviews about any course.
- The moderators, with their credentials, can use the moderator interface, where they can approve or reject any review. For this purpose, two separate collections are maintained in the MongoDB database : courses (where the approved reviews are stored), and modreviews (where the reviews under moderation are stored).  

## Installation

- Clone the repository: `git clone <repository-url>`
- Navigate to the project directory: `cd <project-folder>`
- Install dependencies: `npm install`

## Usage

- Start the backend server to use the Express API : `node api.js`
- In a different terminal, start the react frontend development server: `npm start`
- Open your browser and visit: `http://localhost:4000`
- All the reviews are stored in MongoDB Atlas Cloud Database. We are accessing it via the URL from the MongoDB Atlas Cluster.
- For accessing the moderator interface, the username is : <b>pclubsecy</b>, and the password is : <b>pclubsecy</b>

## Contribute

I welcome contributions from the community to improve and expand the Pingala Timetable Chrome Extension. If you're a developer and would like to contribute, please fork our repository on GitHub and submit pull requests.
