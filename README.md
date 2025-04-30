This is the readme for our project; important topics will be here 

commands to remember:

npm start: will allow you to view application on mobile devices

npm run deploy: pulls changes from React Native to GitHub Pages

git add . x2: will initialize all changes made to the program

git commit -m ["update message"](get rid of brackets): will commit all changes made to GitHub

git push -u origin main: will fully push update to code repository

# Creating Pull Requests

Pull requests are basically updates that have to be reviewed before they are pushed to the main codebase

To create a pull request:

1. Sign in with GitHub account in VSCode
    A. You can do this by clicking the account icon in bottom left of VSCode GUI and selecting sign in with GitHub
2. Install GitHub Pull Requests & GitHub Repositories Extensions
3. Click the GitHub icon in left navigation bar
4. Click the 'Create Pull Request' button in the Pull Requests section of the GUI

# Icon showing

Currently when running the deploy command, there is a manually addressable issue with the icons. 

To fix icons not appearing, do the following:

1. Find newest entry-(insert string).js file
   ex. entry-ebf77edbbb595e441f301dd1eedfef87.js
2. Press CTRL-F, and search for: /cdareference-trainingapp/assets/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf
3. Replace the string with: /cdareference-trainingapp/assets/assets/fonts/MaterialIcons.4e85bc9ebe07e0340c9c4fc2f6c38908.ttf
4. Save, commit, and pull!
