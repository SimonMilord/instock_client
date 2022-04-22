# InStock Inventory management web application

InStock is a responsive inventory management application that allows users to keep track of inventories spread across multiple warehouses. Users can add, edit, delete both warehouses and inventory items. The app itself was built with React and SASS on the frontend and Node and Express on the backend.

## The Context

InStock was built as a week-long team project for the Brainstation program where we got to collaborate in an agile development environment using Jira Software. We got to work with both frontend and backend technologies as well as exposure working with Figma wireframes.
My contributions range from backend routing, to React logic, to building some React components for the frontend including styling with SASS. I was also acting project manager, responsible for deadlines and tasks attribution on Jira.


## Demo

[Click here](https://instock-demo.netlify.app/) to see the live demo
<br>
(might take a few seconds for Heroku server to load)

## Team

This project was built with the collaboration of : <br>
[Brodie Snelling](https://github.com/bsnelling9)<br>
[Lucy Wightwick](https://github.com/lwightwick)<br>
[Cristian Aróstegui](https://github.com/carosteguig)<br>
[Jagjot Singh Manoor](https://github.com/Ramgarhia007)<br>


## Screenshots

<img src="https://github.com/SimonMilord/instock_client/blob/production/Screenshots/warehouselist.png" width=50% height=50%><img src="https://github.com/SimonMilord/instock_client/blob/production/Screenshots/warehouseinfo.png" width=50% height=50%><img src="https://github.com/SimonMilord/instock_client/blob/production/Screenshots/editwarehouse.png" width=50% height=50%><img src="https://github.com/SimonMilord/instock_client/blob/production/Screenshots/inventorylist.png" width=50% height=50%>


## Tech Stack
Client:
[React.js](https://reactjs.org/),
[Sass](https://sass-lang.com/),
[Axios](https://axios-http.com/),
[Material UI](https://mui.com/)


Server:
[Express](https://expressjs.com/),
[Node.js](https://nodejs.org/en/),

Deployment & tools:
[Figma](https://www.figma.com/),
[Jira](https://www.atlassian.com/software/jira),
[Netlify](https://www.netlify.com/),
[Heroku](https://id.heroku.com/login)

## Environment Variables
Add the following variables in client .ENV file

Client: 

REACT_APP_API_URL=https://instock-app-server.herokuapp.com/
  
Server:

PORT = 8080

## Usage
To run this project locally, follow these steps:

Clone the server repository
##### `$ git clone https://github.com/SimonMilord/instock_server.git`

Install server dependencies
##### `$ npm install`

Start the server
##### `$ node index.js`

Clone the server repository
##### `$ git clone https://github.com/SimonMilord/instock_client.git`

Install server dependencies
##### `$ npm install`

Start the client
##### `$ npm start`


## Next Steps

Here are some additional features that consider adding in the future:

- Adding search functionality to the search bar
- Adding sorting functionality to table columns (warehouse and inventory)
- Migrating the server data from JSON files to actual Database


## Contact

Feel free to follow me on [Github](https://github.com/SimonMilord) or [LinkedIn](https://www.linkedin.com/in/simonmilord/)
