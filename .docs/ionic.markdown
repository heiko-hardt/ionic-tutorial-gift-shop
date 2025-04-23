# First example setup:

`$ ionic start myApp tabs --capacitor --type=angular-standalone`

Your Ionic app is ready! Follow these next steps:
- Go to your new project: cd ./photo-gallery
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition

```
$ cd myApp/

# browser:
$ ionic serve --host 0.0.0.0 --port 8100

# mobile device (check environment.markdown for details for IP & PORT)
$ adb connect 192.168.125.210:5050
$ ionic capacitor add android
$ ionic capacitor run android --list
$ ionic capacitor build android --no-open
$ ionic capacitor run android --target=192.168.125.210:5050 --prod
```
