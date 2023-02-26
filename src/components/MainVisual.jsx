import React from 'react'
import styled from 'styled-components';
import headerImage from "../Assets/Images/Header Image1.jpg";

function MainVisual() {
  return (
    <Image>
        <img src={headerImage} alt="" />
    </Image>
  )
}

const Image = styled.div`
margin: 0;
img{
    width: 100%;
    margin: 0;
}
border-bottom: solid 0.2px #2b2b2b;
`
export default MainVisual