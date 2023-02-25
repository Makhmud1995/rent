import styled from "styled-components";


export const MotorPage= styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;


`


export const Reccomend = styled.div`
width: 100%;
height: 35px;
display:flex;
justify-content: center;
align-items: center;
font-family: 'Gilroy';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 35px;

padding-bottom:30px;

color: #373737;
`
export const Motor = styled.div`

`
export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 105px;
    padding: 40 0 40 0px;
    p{


        &:hover{
            border-bottom:2px solid #FF7A00
        }
    
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    /* identical to box height */
    
    
    /* text */
    
    color: #373737;
    }
`

export const Blog = styled.div`
width: 1226px;
height: 605.95px;
display: flex;
justify-content: space-between;

`

export const Img= styled.div`
  display: grid;
  grid-template-areas: "a a a";
  align-items: center;
  justify-content: space-evenly;
width: 258px;
height: 258px;
img{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(image.png);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;10px;
    margin:15px
}


`
export const Text = styled.div`
display: flex;
align-items: start;
flex-direction: column;
width: 500px;
margin-top:50px;
margin-left: 100px;
h2{
    width: 116px;
height: 34px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 34px;

color: #000000;
}
h4{
    width: 104px;
height: 22px;
left: 70px;
top: 2107.05px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
/* identical to box height */
padding-top: 15px;


/* sariq */

color: #FF7A00;

}
p{
    width: 380px;
height: 124px;
left: 70px;
top: 2139px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;

color: #000000;
padding-top: 15px;

}

`

export const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background:#006DAB ;
height: 350px;
margin-top: 60px;
`
export const Con1 = styled.div`
margin-left:25px;
margin-bottom:100px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 49px;
/* identical to box height */


color: #FFFFFF;
`
export const Con2 = styled.div`
h2{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
margin-bottom: 15px;

color: #FFFFFF;
}
p{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */
margin-bottom:10px;

color: #FFFFFF;
}
`
export const Con3 = styled.div`
h2{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
margin-bottom: 15px;

color: #FFFFFF;
}
p{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */
margin-bottom:10px;

color: #FFFFFF;
}
`
export const Con4 = styled.div`
h2{
    margin-right:25px;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
margin-bottom: 15px;

color: #FFFFFF;
}
p{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */
margin-bottom:10px;

color: #FFFFFF;
}

`