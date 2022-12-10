# project-purple-cow
A Counting Application that uses the [CounttAPI](https://countapi.xyz/) to track the number of hits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Technologies 
- JavaScript 
- React / CRA 
- Docker 

# Instructions for Use 
1. Fork and clone respository 
1. Inside root directory run `docker build -t project-purple-cow .`
1. Inside root directory run `docker-compose-up`
1. Open browser and navigate to localhost:3000
(For instructions on setting up docker: [Docker](https://www.docker.com/get-started/))


# Features 
- Click Me Button: Clicking this button adds 1 to the count, which is displayed on the web page. The increase in count is also visually depicted with a growing bubble. 
- Reset: Clickin this button resets the count to 0. 

# Future Updates 
- Currently,  there are two types of buttons: Hit and Reset, the HitButton Component could be refactored to include other type of button (e.g if the user wanted to add two to the count each time the hit button was clicked or if the user wanted to subtract from the count). This would also require specifying a different call to the countAPI endpoint.
- Adding tests for the hit button component using jest to ensure that the user receives the expected output.

# Implementation Details  
- This project was implemented using Create React App out of the box. Certain configurations (e.g. webpack) were used as is. This project could be more customized and there is potential to reduce the file size by configuring some of these tools and enhancing security by removing potentially unnecessary dependencies. 




