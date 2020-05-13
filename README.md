# Photos
<img src = "gitImages/1.png" width="25%" height="25%">
<img src = "gitImages/2.png" width="25%" height="25%">
<img src = "gitImages/3.png" width="25%" height="25%">
<img src = "gitImages/4.png" width="25%" height="25%">
<img src = "gitImages/5.png" width="25%" height="25%">

# Prerequisites  
* Android Studio.
* Node Server.
* Yarn.
* Add New environment variable called `ANDROID_HOME` and it's value `C:\Users\USER\AppData\Local\Android\Sdk`.
* Add these values to Path variable.
    * `C:\Users\USER\AppData\Local\Android\Sdk\tools`.
    * `C:\Users\USER\AppData\Roaming\npm`.
* Open android studio and create new virtual device.

# Clean Cache
* If you are facing problems please try to clean cache `npm start -- --reset-cache`.
# Create a New Project
* In powershell type `create-react-native-app {project name}`.

# To Run
* In powershell type `cd {project name}`.
* `react-native run-android` or `react-native run-ios`.

# Data
## Deck Sample
* Deck Title is unique.
```javascript
questions = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  }
}
```
