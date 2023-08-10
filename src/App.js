import logo from './logo.svg';
import Header from "./components/Header"
import FeedbackItem from './components/FeedbackItem';
import ReactDOM from "react-dom";
import { useState , useEffect } from "react"
import './App.css';
import "./styles.css";
import axios from 'axios';

function App({text}) {

const [errorMessages, setErrorMessages] = useState("");
const [isSubmitted, setIsSubmitted] = useState(false);

const database = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
];


const errors = {
  uname: "invalid username",
  pass: "invalid password",
  mname:"Please enter movie name",
  myear : "Please enter movie year"
};


const handleIMDBFormInput = (event) => {
//Prevent page reload
event.preventDefault();
var { mname, myear } = document.forms[0];
if(mname=="")
{
  setErrorMessages({ name: "mname", message: errors.mname });
  return ;
}

if(myear=="")
{
  setErrorMessages({ name: "myear", message: errors.myear });
  return ;
}

//var requestURL ="http://www.omdbapi.com/?apikey=1e7be9b7&t=avatar"

// axios.get(`http://www.omdbapi.com/?apikey=1e7be9b7&t=avatar`,{ headers : {
//   'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
//   'Access-Control-Allow-Origin' : '*'
// }, crossdomain: true },).then((result)=>{
//         console.log("result",result);
//       }).catch((error)=>{
//         console.log("Error",error);
//       });

// await fetch(
//   "http://www.omdbapi.com/?apikey=1e7be9b7&t=avatar")
//               .then((res) => res.json())
//               .then((json) => {
//                   this.setState({
//                       items: json,
//                       DataisLoaded: true
//                   });
//               })

fetch("https://www.omdbapi.com/?apikey=1e7be9b7&t="+mname.value)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });

// axios({
//   method:'get',
//   url:"http://www.omdbapi.com/?apikey=1e7be9b7&t=avatar",
//   headers: {
//   'Accept': 'application/json',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'

// },
// mode:"no-cors"
// }).then(res=>{
//   console.log("res",res)
// }).catch(function(error){
//   console.log(error)
// })
// axios(requestURL, {
//   method: 'GET',
//   headers: {
    
//       mode: 'no-cors',
//     },
//     crossorigin:true
//   }).then(function (response) {
//         // handle success
//         console.log(response);
//       })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// axios.get('http://www.omdbapi.com/?apikey=1e7be9b7&t='+mname, { crossdomain: true })
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

};

const handleSubmit = (event) => {
  //Prevent page reload
  event.preventDefault();

  var { uname, pass } = document.forms[0];

  // Find user login info
  const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  if (userData) {
    if (userData.password !== pass.value) {
      // Invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      uname.value = "";
      pass.value =""
      setIsSubmitted(true);
    }
  } else {
    // Username not found
    setErrorMessages({ name: "uname", message: errors.uname });
  }
  
  

};

// Generate JSX code for error message
const renderErrorMessage = (name) => 
 name === errorMessages.name && (
  <div className="error">{errorMessages.message}</div>);

// JSX code for login form
const renderForm = (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" value="Login" />
      </div>
    </form>
  </div>
);

// JSX code for login form
const renderMovieInputForm = (
  <div className="form">
    <form onSubmit={handleIMDBFormInput}>
      <div className="input-container">
        <label>Movie Name </label>
        <input type="text" text="" name="mname" required />
        {renderErrorMessage("mname")}
      </div>
      <div className="input-container">
        <label>Year </label>
        <input type="text" text="" name="myear" required />
        {renderErrorMessage("myear")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
);

  // return (
  //   <>
  //   <Header>
  //   <div className='container'><h1>My Appp</h1> 
  //     <h2>{text}</h2>
  //         </div>
  //   </Header>
  //   <FeedbackItem></FeedbackItem>
  //   </>

  // );
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Movie IMDB Rating</div>
        {isSubmitted ? renderMovieInputForm : renderForm}
      </div>
    </div>
  );

}


export default App;
