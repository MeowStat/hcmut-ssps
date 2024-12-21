# HCMUT-SPSS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
https://hcmut-ssps-kappa.vercel.app/

HCMUT-SPSS is a comprehensive smart printing solution designed specifically for the students of Ho Chi Minh City University of Technology. It aims to simplify and streamline the printing process across various campuses, offering easy access to printing services through a user-friendly digital interface.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Changelog

### Update 27/11
**Add new:**
- `node_module/find-root`
- `@nivo/line` for graph
- `SPSOApp.css` for flexing row
- `Components/` - Header text and StatBox function. 
- `Components/BarChart` to draw graph.
- `Dashboard/` for index page

**Update:**
- `src/index.js` use path * to subroute
- Add "path" in tabs json and use Link to covered button in SPSOMenu.js
- Use route in SPSOApp.js

### Update 1/12
**Add new:**
- `@tanstack/react-table@8.20.5`
- Add dependencies `tailwindcss-animate` `class-variance-authority` `clsx` `tailwind-merge` `lucide-react`
- `tsconfig.json`
- `global.css`
- `components.json` to pack and `lib/utils.ts` for cn helper.
- configuration index page with FileConfig support by Bootstrap
- Components/columns.tsx|DataTable.tsx|Table.tsx with TypeScript for read data and display Data table in Dashboard
- New 4 file .svg to icon


**Update:**
- Config `tailwind.config.js`
- Data Table in Dashboard listen change in `data/RecentPrint.tsx`

### Update 18/12
***Add new:***
- Merge all source (maybe) from `branch/clgslsm` for login page when location is index and SPSO button login to go SPSO_UI at href `domain.xyz/SPSO/{}`.
- Add sub route SPSOApp.

***Update:***
- Add import locate file to SPSOApp sub href in `src/index.js`
- Config some (or all, i hope that) href of Printer Manager.
- `All printing logs, Statistics, Report, Manual and Tips` are not support in your location!