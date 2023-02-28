import React from 'react'
import { SignPage,LoginPage,LoginItem,Button,Border,Button2,MediaIcons} from './style'
import Checkbox from 'antd/es/checkbox/Checkbox'
import IconN from '../../../assets/other/vs_naver.png'
import IconG from '../../../assets/other/Group.png'
import IconK from '../../../assets/other/ri_kakao-talk-fill.png'
import { Link } from 'react-router-dom'
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
        <Border>
<div></div>
<p>OR</p>
<div></div>
        </Border>
        <MediaIcons>
<div id='imgN'> <img src={IconN} alt="" /></div>

<Link to={'/GoogleLogin'}>
  <div id='imgG'> <img src={IconG} alt="" /></div>
  </Link>
<div id='imgK'> <img src={IconK} alt="" /></div>
        </MediaIcons>
        <Button2><p>CREATE ACCOUNT</p></Button2>

      </LoginItem>
    </LoginPage>
    </SignPage>
  )
}

export default Profil