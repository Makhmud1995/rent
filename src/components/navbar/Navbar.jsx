import React from 'react'
import { Container, Login, Logo, MenuWrapper,NavLink } from './style'
import logo from '../../assets/Camper.png'
import Login2 from '../../assets/login.png'
import Login1 from '../../assets/login1.png'


const Navbar = () => {
  return (
    <Container>
    <Logo src={logo}/>
    <MenuWrapper>
        <NavLink to="/Motor">
            <div>Motor</div>
        </NavLink>
        <NavLink to="/Caravan">
            <div>Caravan</div>
        </NavLink>
        <NavLink to="/Tuning">
             <div>Tunig</div>
        </NavLink>
        <NavLink to="/UsedCar">
             <div>Used Car</div>
         </NavLink>
        <NavLink to="/CampingPlace">
            <div>Camping Place</div>
        </NavLink>
    </MenuWrapper>
    <Login>
        <img src={Login2} alt="" />
        <img src={Login1} alt="" />
        <div>Eng</div>
    </Login>
    </Container>
  )
}

export default Navbar