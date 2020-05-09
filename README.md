# Photos

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
