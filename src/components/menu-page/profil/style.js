import styled from "styled-components";


export const SignPage = styled.div`
width: 100%;
height: 840px;
display:flex;
align-items: center;
justify-content: center;
background: #E5E5E5;
`


export const LoginPage = styled.div`
width: 500px;
height: 614px;
display: flex;
flex-direction: column;

background: #FFFFFF;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
border-radius: 20px;
`

export const LoginItem = styled.div`
margin-top: 33px;
margin-left:33px;
margin-right:33px;
margin-bottom:43px;
width: 434px;
height: 82px;
h2{
 width: 90px;
height: 37px;
left: 466px;
top: 101px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 37px;
color: #373737;
}
p{
    width: 43px;
height: 22px;
left: 476px;
top: 163px;

font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height */


color: rgba(55, 55, 55, 0.8);
}
input{
    width: 434px;
height: 50px;
left: 466px;
top: 195px;

background: rgba(55, 55, 55, 0.1);
border-radius: 10px;
border:none;
}

`