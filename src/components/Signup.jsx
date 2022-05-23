import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase';
function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seteoor] = useState("");
  const [Mainloader, setmainloader] = useState(true)
  const [fullname, setfullname] = useState("")
  const handelsubmite = async () => {
    try {
      setloading(true);
      let userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential.user);
      setuser(userCredential.user)

    } catch (error) {
      console.log(error.message);
      seteoor(error.message);
      setTimeout(() => {
        seteoor("");
      }, 1000);
    }
    setloading(false);


  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setmainloader(false)
      if (user) {
        setuser(user)
      } else {
        setuser(null)
      }
    })
  }, []);

  return (
    <div>
      {
        Mainloader === true ? <h1>loading</h1> :
          error !== "" ? <h1>{error}</h1> : loading === true ? <h1>...loading</h1> : user !== null ? <h1>use id is {user.uid} <button onClick={async () => { await signOut(auth) }}>signout</button></h1> :
            <>
              <input type="text" name="" id="1" value={email} onChange={(e) => setemail(e.target.value)} />
              <input type="password" name="" id="2" value={password} onChange={(e) => setpassword(e.target.value)} />
              <input type="text" name="" id="3" value={fullname} onChange={(e) => setfullname(e.target.value)} />
              <button type="click" onClick={handelsubmite}>SignUp</button>
            </>
      }
      <Link to={'/Login'}>login</Link>
    </div>
  )
}

export default Signup