# A Movie Watching History App

### To Run:
Install third-party code with:  
NOTE: Make sure you are in the `lib` folder
```
npm init
npm install
```
You will need to make a `values` folder from project room with:
```
cd app
mkdir values
touch fireBaseAuth.js
```

Open the `fireBaseAuth.js` file and copy this into it:
```
"use strict";

app.constant("FBCreds", {
	apiKey:"[YourFirebaseAuthKeyHere]",
	authDomain: "[YourFirebaseAuthDomainHere]"
});
```

After you set this up you can run the app by going running `http-server` in the terminal and navigating to localhost:8080 in your Chrome browser. 
