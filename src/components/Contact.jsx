import React from 'react'
import styled from 'styled-components'

function Contact() {
  return (
    <Wrapper>
        <Feilds>
        <h1>How to reach Us</h1>
        <p>Lorem ipsum dolor sit amet, consetetur.</p>
        <Details>
            <Name>
            <label htmlFor="firstname">First Name *</label>
            <input type="text" required/>
            </Name>
            <Name>
            <label htmlFor="firstname">Last Name *</label>
            <input type="text" required/>
            </Name>

        </Details>
        <label htmlFor="email">Email *</label>
        <input type="email" required/>
        <label htmlFor="email">Telephone </label>
        <input type="number" />
        <label htmlFor="email">Message </label>
        <input type="textarea" />
        <CheckBox>
        <input type="checkbox" />
        <label htmlFor="checkbox">I agree to the <u>Terms & Conditions</u></label>
        </CheckBox>
        <button type="submit">SUBMIT</button>
        </Feilds>


        <Map>
            text
        </Map>

    </Wrapper>
  )
}
const CheckBox = styled.div`
    display: flex;
    margin-top: 3%;
    float: left;
    input{
        margin-left: -29%;
        margin-top: 20%;

    }
    label{
        margin-left: -27.5%;
        margin-top: -2.5%;
    }
    height: 40px;
`

const Map = styled.div`
    width: 50%;
    background-color: wheat;
    margin-top: 7rem;
`
const Feilds = styled.div`
    width: 40%;
    margin: 2rem;
    display: grid;
    input{
        width: 62.5%;
        border-radius: 5px;
        background-color:  #414141;
        margin-top: -20px;
        margin-bottom: 35px;
        color: white;
        font-size: 12pt;
    }
    button{
        width: 40%;
        background-color: orange;
        color: white;
        font-weight: bold;
        float: right;
        border-radius: 5px;
    }
`
const Wrapper = styled.div`
    min-height: 750px;
    color: white;
    margin: 5rem;
    font-size: 16pt;
    display: flex;
    h1, p{
        margin-bottom: 1rem;
    }
`
const Details = styled.div`
    input{
        width: 200px;
        min-height: 30px;
        border-radius: 5px;
        margin-top: -10px;
        
    }
    display: flex;
    margin-right: 2rem;
    gap: 5rem;
`

const Name = styled.div`
    display: grid;
    gap: 0.1rem;
    margin-bottom: 2rem;

`
export default Contact