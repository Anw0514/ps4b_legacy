# Practical Solutions For Business Website

### I actually put effort into making this readme helpful
*please read it*

<img src="./src/assets/readme/spongebob_computer.jpg" width="400">

## Resources / Documentation
- [Semantic UI React](https://react.semantic-ui.com/)
- [React Router Dom](https://reacttraining.com/react-router/web/example/basic)
- [Free Pictures!](https://pixabay.com/)
- [React Slick (the Carousel)](https://react-slick.neostack.com/docs/example/simple-slider)
- [Click this one when you get too frustrated](https://www.reddit.com/r/wholesomememes/)

## Deployment
The site is deployed through Azure App Service, and is configured to update on every push to the master branch. There are a few steps that need to be taken to ensure that this goes smoothly.
1. Make sure you're in the master branch and merge from DevMaster
  - there's a line in `src/reusable/ContactForm` that should always be commented out in DevMaster but never commented out in master. it's `document.getElementById('form').submit()`
  - use the command `git merge DevMaster --no-commit` to ensure it doesn't auto-merge for you
2. `npm run build`
3. find and replace: `build/build` => `build` (should be found in the index.html file)
4. commit and push

## File Structure (within `src`)

#### `Data.js`

objects of data for different pages. It makes the component files a lot more readable and makes data accessible anywhere, incase there's something that needs to be used in multiple places

#### `/assets`

Contains the css files and all of the media for the app

#### `/containers`

For large container components with many children, such as App.js

#### `/constants`

For components that are present on almost every page, such as the header and footer

#### `/pages`

For components that are specific to a certain route or page

#### `/reusable`

For Components that are mainly stylistic and can change their content in order to be reused within different components/pages

## Navigating CSS files

#### `App.css`
The custom css written entirely by me. Includes workarounds for weird Semantic-UI things, defaults for certain elements, and component-specific styling. Organized **alphabetically**, with the exception of having the general styling before the class styling. The default styles are for mobile, and the media queries apply to screens that are tablet and larger.

#### `basic.css`
classes that are really just css shorthands. Very generic and some was copied and pasted from the old site. If there's a class that's abbreviated or doesn't make much sense, it can probably be found here. There are subtitle comments for easier navigation.

#### `index.css`
It's just that one cousin that shows up to all the family functions but doesn't talk to anyone. Is it contributing? who knows. Am I gonna go and tell it to leave? nah, bro

## Custom Styling Components


#### `ImgDiv`
Dynamic component for white divs that have an image on one side.

|  Prop Name |  Type  |        Required?        | Default |                                                                           Notes                                                                          |
|:----------:|:------:|:-----------------------:|:-------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|
|    image   |  image |           yes           |   n/a   |                                                             image to appear next to the text                                                             |
|    title   | string |            no           |   n/a   |                                                            title above text section of the div                                                           |
|    right   |  bool  |            no           |  false  | bool for whether or not the image appears on the right of the text instead of the left. Can be left out or set to false if the image appears to the left |
|    list    |  array | if paragraphs is absent |   n/a   |                         an array of list item strings for the content. If the content is not a list, this prop should be left out                        |
| paragraphs |  array |    if list is absent    |   n/a   |                                                              array of strings as paragraphs                                                              |

#### `SubHeader`
Section title component that includes a little hr for a lil extra *pizazz*.

|   Prop Name  |  Type  | Required? | Default |             Notes            |
|:------------:|:------:|:---------:|:-------:|:----------------------------:|
|     text     | string |    yes    |   n/a   |             title            |
|   marginTop  |  bool  |     no    |  false  |   adds a top margin of 3rem  |
| marginBottom |  bool  |     no    |  false  | adds a bottom margin of 3rem |
|  paddingTop  |  bool  |     no    |  false  |  adds a top padding of 3rem  |

#### `LoneParagraph`
Text section that has no title, but the first paragraph is a drop cap.

|  Prop Name  |  Type  | Required? | Default |                        Notes                       |
|:-----------:|:------:|:---------:|:-------:|:--------------------------------------------------:|
|     text    |  array |    yes    |   n/a   |               paragraphs (as strings)              |
|     list    |  array |     no    |   n/a   |      list to be displayed below the paragraphs     |
|   contact   |  bool  |     no    |  false  | toggles whether or not a contact button is present |
| contactText | string |     no    |   n/a   |     optional unique text for the contact button    |

#### `IconParagraph`
Small section for Icons with accompanying text.

| Prop Name |  Type  | Required? | Default |                Notes                |
|:---------:|:------:|:---------:|:-------:|:-----------------------------------:|
|  iconName |  image |    yes    |   n/a   | iconName as it appears on iconsmind |
|   title   | string |     no    |   n/a   |                title                |
|    list   |  array |     no    |   n/a   |       string items for a list       |
| paragraph | string |     no    |   n/a   |        string for a paragraph       |

#### `AlternatingMedia`
Styled content. Look at workplace modernization for reference.

| Prop Name |       Type       | Required? | Default |                             Notes                             |
|:---------:|:----------------:|:---------:|:-------:|:-------------------------------------------------------------:|
|   images  |  array of images |    yes    |   n/a   |                                                               |
|  content  | array of strings |     no    |   n/a   |                                                               |
|    left   |       bool       |     no    |  false  | toggles whether or not the first image appears after the text |
|   large   |       bool       |     no    |  false  |            makes images 'large' instead of 'medium'           |

#### `Carousel`'
Simple carousel styled to fit the theme of the site.

| Prop Name |           Type          | Required? |       Default      |                                  Notes                                 |
|:---------:|:-----------------------:|:---------:|:------------------:|:----------------------------------------------------------------------:|
|   width   |          string         |     no    |         ""         | className for the carousel - meant for the width but could be anything |
|   slides  | array of JSX components |     no    | dont worry bout it |                  slides for the carousel to go through                 |
|    show   |         integer         |     no    |          2         |                  number of slides to show at one time                  |
|   scroll  |         integer         |     no    |          2         |                      number of slides to scroll by                     |
|   arrows  |           bool          |     no    |        false       |           toggles clickable arrows on either side of carousel          |

#### `ComparisonTable`
Table to compare product plans.

| Prop Name |       Type       | Required? | Default |                                             Notes                                            |
|:---------:|:----------------:|:---------:|:-------:|:--------------------------------------------------------------------------------------------:|
|   items   | array of objects |    yes    |   n/a   | objects for each plan. Objects must include Title, Price, and values for all of the criteria |
|  criteria | array of strings |    yes    |   n/a   |                         criteria that the plans are being compared by                        |

#### `StyledList`
Literally just an unordered list. I just made it pretty so now it works with the site.

| Prop Name |       Type       | Required? | Default |      Notes     |
|:---------:|:----------------:|:---------:|:-------:|:--------------:|
|   items   | array of strings |    yes    |   n/a   | the list items |



---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
