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
* While submitting incorrect password, error toast and error indicatior on input box will be shown (Handling 401 status)
* A active device counter and a notify button with card (input box added where you can write your message) will be displayed in home page after a successful login
* Notify button error handling
* A success toast will be shown if notified successfully
* An error toast will be shown if any error get to notify
* User will be redirected to login page if no accesstoken found or getting 401 status for notify api
* User can not go to login page without logout the current successful session

