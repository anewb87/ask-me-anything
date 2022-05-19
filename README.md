# Ask Me Anything- Fun with AI

## Table of Contents
- [Deployed Link](#deployed-link)
- [Overview](#overview)
- [Project Goals](#project-goals)
- [Tech Stack](#technologies-used)
- [Installation & Setup](#installation-and-setup)
- [API](#api)
- [Author](#author)

## Deployed Link
[Ask Me Anything]()   
*DISCLAIMER: It appears that OpenAI API lacks compatibility with Heroku. While the application doesn't fully function on this deployed site, it does on my local device.*

## Overview
*Ask Me Anything* is an application built for the Shopify Front End Developer Intern Challenge. The project specifications can be found [here](https://docs.google.com/document/d/1O7mCynsz_cBXkEaCFGSZAuvAOY84QVq35l20xJwjOYg/edit#).  
This application allows users to have some fun with Artificial Intelligence by sending questions or instructions to an api that processes their input and sends back a human-language response. 

## Project Goals
- **Input Text Promps and Recieve a Response:** The responses should display both the user input and the response. Additionally, the newest prompt should be displayed first.  
![user-input-and-response](https://media.giphy.com/media/F1ilSzEw7f4yCODpYM/giphy.gif)  <br/><br/>

- **Accessible:** This application was tested with the [WAVE web accessibility evaluation tool](https://wave.webaim.org/) with zero errors detected.  
<img width="1440" alt="Wave accessibility with zero erros" src="https://user-images.githubusercontent.com/89421307/169362382-f5a60458-fe1a-4fc1-81f9-b78104d14b6e.png">  <br/><br/>
  
- **Responsive Design:** *Ask Me Anything* is responsive to varying screen sizes.  
![responsive-design](https://media.giphy.com/media/PGItL3qAO8oSJwT9xC/giphy.gif)  <br/><br/>

- **E2E Testing:** Cypress was used to build end-to-end tests for user flow, employing an intercept and fixture.
<img width="1440" alt="Cypress testing of all tests passing" src="https://user-images.githubusercontent.com/89421307/169365146-7f6f0689-6839-410c-9053-d7891d7e1c5c.png">


## Technologies Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Installation and Setup
To run *Ask Me Anything* locally:
- Fork this repository
- Run ```git@github.com:anewb87/ask-me-anything.git``` in your command line
- Run ```cd ask-me-anything```
- Run ```npm install```
- Run ```npm start``` and visit ```localhost:3000``` in your browser

## API
The api used for this project is [OpenAI API](https://openai.com/api/)

##  Author
- Lexy Newby (she/her) [LinkedIn](https://www.linkedin.com/in/lexy-newby/) || [GitHub](https://github.com/anewb87)
