# Screen Castify Video of Social-Network-API-NoSQL - User & Friend Routes

https://drive.google.com/file/d/1ib26WAcE57U6AKP9MtcKAryad9tyOTET/view?usp=sharing

# Screen Castify Video of Social-Network-API-NoSQL - Thought & Reaction Routes

https://drive.google.com/file/d/1GTjEcfOs8it0Q-DWiMANvs_w2WcBl7Ji/view?usp=sharing

# Social-Network-API-NoSQL - Github Repository

https://github.com/Muzan67/Social-Network-API-NoSQL

# Social-Network-API-NoSQL

# Desciption

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.

## Table of Contents

- Screen Castify Video of Social-Network-API-NoSQL - User & Friend Routes
- Screen Castify Video of Social-Network-API-NoSQL - Thought & Reaction Routes
- Social-Network-API-NoSQL - Github Repository
- Description
- User Story
- Acceptance Criteria
- License
- Technologies Used
- Installation
- Usage
- Screenshots of Social-Network-API-NoSQL

# User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

# Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Technologies Used

- MongoDB for Database
- Express.js for routing
- Mongoose ODM (Object Data Modeling)
- MongoDB
- Node
- Insomnia

## Installation

To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command npm install into the terminal. Install express and mongoose by entering npm i express and npm i mongoose into the command line, respectively.

# Usage

1. Install npm and dependencies: npm install
2. Open Insomnia and test API GET, POST, PUT, and DELETE routes for thoughts, users, friends, and reactions

## Screenshots of Social-Network-API-NoSQL

- User GET
  ![image](https://user-images.githubusercontent.com/102841726/185250798-769267a1-86a1-4897-8479-d5300fc06596.png)

- Thought GET
  ![image](https://user-images.githubusercontent.com/102841726/185250966-1768beec-7b25-4b1c-9a99-0a86cf9e5927.png)

- Reaction POST
  ![image](https://user-images.githubusercontent.com/102841726/185251081-704d6640-8a55-4e23-aa09-314a1aa00661.png)

- Friend POST
  ![image](https://user-images.githubusercontent.com/102841726/185251277-ba757345-1ee8-4ce9-a326-7ca091501455.png)
