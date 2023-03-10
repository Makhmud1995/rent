import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function GoogleLogin() {
  const [user, setUser] = useState({})

function handleCallbackResponse(response){
  console.log("Encoded JWT ID token:" + response.credential);
  var userObject = jwt_decode(response.credential);
  console.log(userObject)
  setUser(userObject)
  document.getElementById("signInDiv").hidden = true;  // login bulgan google emailni yashirish

}
function handleSignOut(event){
  setUser({})
    document.getElementById("signInDiv").hidden = false;
}

useEffect(()=>{
/* global google */
google.accounts.id.initialize({
  client_id: "201836274858-489h5356265dt0uimja50577645oc2r6.apps.googleusercontent.com",
  callback: handleCallbackResponse
});

google.accounts.id.renderButton(
  document.getElementById("signInDiv"),
  {theme: "outline",size: 'large'}
)
google.accounts.id.prompt();
},[])
// If we have no user: sign in Button
// If we hava a user: show the log out button


  return (
    <div className="App">
      <div id="signInDiv"></div>
      {Object.keys(user).length !==0 &&
      <button onClick={(e)=> handleSignOut(e)}>Sign out</button>
}
        {user &&
        <div>

          <h3>{user.name}</h3>
          </div>
          }

      </div>
  );
}

export default GoogleLogin;