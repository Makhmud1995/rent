import React from 'react'
import { SignPage,LoginPage,LoginItem } from './style'
const Profil = () => {
  return (
    <SignPage>
    <LoginPage>
      <LoginItem>
        
      <h2>Sign in</h2>
      <p>Email</p>
      <input placeholder='Your email'></input>
      <p>Password</p>
      <input placeholder='Your password'></input>
      </LoginItem>
    </LoginPage>
    </SignPage>
  )
}

export default Profil