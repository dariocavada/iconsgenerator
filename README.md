# iconsgenerator
Nodejs application to create splash screens and icons for android and ios apps

# Quick Start

- Download or clone the repository
- From the command line `npm install`
- Replace `splash.png` (must be 2732 × 2732 pixel) and `icon.png` ( must be 1024x1024 pixel) files inside the main folder
- From the command line execute `npm start` the application reads the file `automations.json`, it create the screens and icons folders with ios and android subfolders and all the variations of icons and splash needed by Android and iOS.

# Dependencies
- The application use `sharp` to resize and crop the various images
