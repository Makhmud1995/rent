import styled from 'styled-components';
import { Link } from 'react-router-dom';
  const Container =styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 70px;
  height:90px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  `
const Logo =styled.img`
width: 157px;
height: 46px;
cursor: pointer;
`

const MenuWrapper= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
div{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #373737;
cursor: pointer;
}

`
const Login =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 8%;
div ,img{
    cursor: pointer;
}
`

export const NavLink = styled(Link)`
display: flex;
text-decoration: none;
`
export {Container,Logo,MenuWrapper,Login}