import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
      <form action="/signup" method="post" >

      <label>Name</label>
      <input type="text" placeholder="Enter Your Name" name="name" required></input>
      <br></br><label>Email</label>
      <input type="text" placeholder="Enter Your Email Address" name="email" required></input>
      <br></br>
      <label>RollNO</label>
      <input type="text" placeholder="Enter Your Roll_NO" name="roll_no" required></input>
      <br></br>
      <label>Phone</label>
      <input type="Number" placeholder="Enter Your phone" name="phone" required></input>
      <br></br>
      <label>user name</label>
      <input type="text" placeholder="Enter Your username" name="user_name" required></input>
      <br></br>
      <label>password</label>
      <input type="text" placeholder="Enter Your password" name="password" required></input>
      <br></br>
      <footer>
      <input type="submit"  value="SignUp" tabindex="1"></input>
      </footer>

      </form>
      </div>
    );
  }
}

export default App;
/*

*/
