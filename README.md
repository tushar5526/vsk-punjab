# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# src/pages/

- ## /Dashboard

  1.  React component which takes metabase dashboard id and reders metabase dasboard iframe
  2.  It's bieng used in ControlledTabs/index.tsx

- ## /Login

  1.  React component to login users using MIS Authentication

- ## /ControlledTabs

  1.  Controlles logic of the tabs Admistrative Overview, Academic Overview & Education Statistics
  2.  Controll of the tabs available in ControlledTabs/index.tsx
  3.  Main logic available in ControlledTabs/ControlledHeader/index.tsx

- ## linking.ts

1.  Contains helpers to link user to default geo locations

# src/pages/VedioWall

- ## /Autoplay

  1.  React component to Autoplay all 4 vedio wall metabase dashboards with a user defined duration
  2.  Contains controlls of Play/Pause & Duration Manangement

- ## /Combined

  1.  React component to show all 4 vedio wall metabase dashboards
  2.  Each dashboard contains 1/4 space of the screen

- ## /Filters

  1.  React component to manange filters for vedio walls
  2.  dispatches reducx actions to manage filters

- ## /Screen1

  1.  Contains react component for vedio wall 1
  2.  Shows student attendance stats

- ## /Screen2

  1.  Contains react component for vedio wall 2
  2.  Shows infrastructure stats

- ## /Screen3

  1.  Contains react component for vedio wall 3
  2.  Shows Mid-day Meal stats

- ## /Screen4

  1.  Contains react component for vedio wall 4
  2.  Filter Academic Year & Date Range

- ## /utils.ts

  1.  Contains some helper functions

# src/redux

- # root-reducer

  1. contains root reducer logic / state structure
  2. import other individual reducers and merge to create single reducer

- # Slider

  1. Contains states of the Autoplay screen

- # TabContoller

  1. Contains states of the Tabs/ControllHeader screen

- # user

  1. Contains states of the user

- # VedioWall

  1. Contains states of the Vedio Walls

# src/Routing

- # ProtectedRoute.tsx

  1. Contains React component for protected routes
  2. return Route of react-router-dom

- # RouteConstants.tsx

  1. Contains Routes as an object to be reused

# src/services

- # api-services.ts

  1. Contains api calls exported as an object
  2. Api calls are defined as functions

- # parameters.ts
  1. Contains some constant parameters such as api base url etc.
