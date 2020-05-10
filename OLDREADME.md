# Prerequisites  
* Android Studio.
* Node Server.
* Yarn.
* Add New environment variable called `ANDROID_HOME` and it's value `C:\Users\USER\AppData\Local\Android\Sdk`.
* Add these values to Path variable.
    * `C:\Users\USER\GV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGi-tools`.
    * `C:\Users\USER\AppData\Local\Android\Sdk\tools`.
    * `C:\Users\USER\AppData\Roaming\npm`.
* Open android studio and create new virtual device.
* Oracle Virtualbox.

# To Run
* Open CLI and type `emulator -list-avds` to get the name of your virtual device.
* Type `emulator -avd {your name}` to run the virtual device.
* Open another CLI and change directory to project folder.
* Type `yarn android`.

# Scripts
* **Scripts used are `Expo` not `NPM` so to run type `expo start`.**
# Prerequisites  
* Node Server.
* Expo `npm install expo-cli --global`.
* Download `Expo` on your phone.
* Phone and Computer must connect on same network. 


# Create a New Project
* In powershell type `expo init {project name}`.

# To Run
* In powershell type `cd {project name}`.
* `expo start` or `npm start`.
* scan the QR code on your phone.

# Genymotion
* You can also download Genymotion android emulator and run on it please refer to `OLDREADME.md`.

# Notes
* If you get error `Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class` just go to `node_modules/metro/src/blacklist.js` and refer to [this solution](https://stackoverflow.com/questions/59099456/metro-config-node-modules-not-found-in-react-native-project).
* If you get error `Uncaught error X.X.X is not a valid sdk version` go to `app.json` and update `sdkVersion` to the recommended one.
* If you get error `React Native version mismatch` 
* If you get error `Your project is in SDK version >= X.X.X, but the expo package version seems to be older.` remove folder `node_modules` and run `npm install` or `yarn install`.
* Don't forget to update `dependency` in `package.json` to latest versions. 
* Make `SDK Version` in `app.json` and `package.json` same.
