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
