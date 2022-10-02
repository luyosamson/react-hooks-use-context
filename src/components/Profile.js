// import the useContext hook
import React,{useContext} from "react";
import Interests from "./Interests";
import {UserContext} from "../context/user"

function Profile({theme}) {
  //Call use context with our usercontext
const {user}=useContext(UserContext)

//now, we can use the user object just like we would if it was passed as a prop!
console.log(user)

  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
