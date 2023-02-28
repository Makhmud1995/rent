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
padding-top:10px;
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
    padding: 15px;
    margin-bottom: 10px;
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
    outline-color: #006DAB;
    width: 434px;
height: 50px;
left: 466px;
top: 195px;

background: rgba(55, 55, 55, 0.1);
border-radius: 10px;
border:none;
}
`
export const Button =styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 434px;
height: 50px;
cursor:pointer;
margin-top: 19px;
p{
    width: 98px;
height: 21.43px;
left: 654px;
top: 422px;

font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 20px;

color: #FFFFFF;
}

/* blue */

background: #006DAB;
border-radius: 20px;
`

export const Border = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
div{
    width: 119.02px;
    border-bottom: 2px solid rgba(55, 55, 55, 0.15);
}
p{
    margin-right: 10px;
    margin-left: 10px;
    width: 20px;
height: 19px;
left: 673.01px;
top: 478px;

font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
/* identical to box height */


color: #6D6D6D;
}
`

export const MediaIcons = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 46px;
margin:29px;
div{
    margin:11.5px;
    cursor: pointer;
}
#imgN{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
height: 46px;
border-radius: 50px;

background: #039600;
}
#imgG{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
height: 46px;
border-radius: 50px;

background: #BC0000;
}
#imgK{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
height: 46px;
border-radius: 50px;

background: #FFC700;
}
`
export const Button2 =styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 434px;
height: 50px;
cursor:pointer;
p{
width: 163px;
height: 20px;

font-family: 'Open Sans';
font-style: bold;
font-weight: 400;
font-size: 15px;
line-height: 20px;

/* blue */

color: #006DAB;

}

/* blue */
border: solid 2px #006DAB;
background: white;
border-radius: 20px;
`