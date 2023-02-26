import React from 'react'
import styled from 'styled-components';

function Introduction() {
  return (
    <Title>
        <h1>MOVIE LIBRARY</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
        </p>
    </Title>
  )
}

const Title = styled.div`
    padding: 4rem 10rem;
    width: 27%;
    color: white;
    h1{
        margin-bottom: 5%;
        font-size: 40pt;
        font-weight: 500;
    }

    p{
        font-size: 18pt;
        font-weight: 100;
    }
`
export default Introduction