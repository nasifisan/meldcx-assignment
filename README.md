# meldcx-assignment

This project has been implemented with NextJs framework

Tools: ReactJs, TailwindCSS, SCSS, Redux Toolkit, Typescript

```
Follow these commands to run this project on your machine

npm install
// to install all node package of this project

npm run dev
// run server at http://localhost:3000

npm test
// run few ui unit test
```

# details
* UI is responsive
* Correct password in login page will redirect to home page
* While submitting incorrect password, error toast and error indicator on input box will be shown (Handling 401 status)
* A active device counter and a notify button with card (input box added where you can write your message) will be displayed in home page after a successful login
* Notify button error handling
* A success toast will be shown if notified successfully
* For a successful notify, notify button will be disabled immediately. (As it indicates the test as done. Note: After a reload on browser you'll be able to click notify button again)
* An error toast will be shown if any error get to notify
* User will be redirected to login page if no accesstoken found or getting 401 status for notify api
* User can not go to login page without logout the current successful session

# API error handling

* Login API: For 401 status, user will remain in the login page. Incorrect password indicatior in input field and error toast will be shown.
* Notify API: For 400 status, user will remain in the home page and an error toast will be shown. For 401 status, user will be logged out automatically using axios interceptor and redirect to login page for a new token.
