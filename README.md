# Test task
**What is done:**
- A way to input the artist’s name.
- Show results based on the input of the artist’s name:
  - Artist Name
  - Artist Picture
  - Artist Facebook URL
  - Artist Events
  - Event Venue
    - Event City
    - Event Country
    - Event Date
- Unit tests of your JS code - *Jest + Enzyme*
- Styling - *Emotion*

**Bonus Features**
- Some features (add `react-loadable` for splitting components which are not using at first app mount, `react-on-visible` for **EventCard** appearing animation);
- Cache​ (each api response is cached for 3 hours);
- Deploy​ (add deploy to gh-pages [Skills Test](https://ronny25.github.io/skills-test)).


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Available Scripts

In the project directory, you can run both **npm** and **yarn** commands:

### `npm start` / `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` / `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build` / `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy` / `yarn deploy`

Builds the app for production to the `build` folder and deploys it to **gh-pages** branch of the repo.

### `npm run eject` / `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
