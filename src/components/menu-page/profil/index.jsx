import React from 'react'
import { SignPage,LoginPage,LoginItem,Button} from './style'
import Checkbox from 'antd/es/checkbox/Checkbox'
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
      <Checkbox style={{color: '#373737',fontFamily:'Open Sans',fontStyle:'normal', fontWeight:'400',fontSize:'14px',lineHeight:'19px',marginTop:'16px',}}>
        <span  style={{}}>Keep me logged in</span> <span style={{marginLeft:'160px'}} >Forget ypur password ?</span></Checkbox>
        <Button><p>SIGN IN</p></Button>
      </LoginItem>
    </LoginPage>
    </SignPage>
  )
}

export default Profil