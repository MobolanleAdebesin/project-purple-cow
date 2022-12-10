# project-purple-cow
A Counting Application that uses the [CounttAPI](https://countapi.xyz/) to track the number of hits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Features 
- Click Me Button: Clicking this button adds 1 to the count, which is displayed on the web page. The increase in count is also visually depicted with a growing bubble. 
- Reset: Clickin this button resets the count to 0. 

# Future Updates 
- Currently,  there are two types of buttons: Hit and Reset, the HitButton Component could be refactored to include other type of button (e.g if the user wanted to add two to the count each time the hit button was clicked or if the user wanted to subtract from the count). This would also require specifying a different call to the countAPI endpoint.
- Adding tests for the hit button component using jest to ensure that the user receives the expected output.

# Implementation Details  
- This project was implemented using Create React App out of the box. Certain configurations (e.g. webpack) were used as is. This project could be more customized and there is potential to reduce the file size by configuring some of these tools and enhancing security by removing potentially unnecessary dependencies. 





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
