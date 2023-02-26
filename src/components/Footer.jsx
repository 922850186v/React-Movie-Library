import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <MainFooter>
        <FooterData>
            <div>
            <h1>Amadeus IT Group</h1>
            <p>C. Salvador de Madariaga,<br></br>1
                28027 Madrid<br></br>
                Spain
            </p>
            </div>
            <div>
                <h2>Follow us on</h2>
            </div>
        </FooterData>
        <Copyright>
            <p>Copyright &copy;{new Date().getFullYear()} Amadeus Hotels. All rights reserved</p>
            <p>Photos by Felix Mooneeram & Serge Kutuzov on Unsplash</p>
        </Copyright>
    </MainFooter>
    
  )
}

const MainFooter = styled.div`
    
`
const FooterData = styled.div`
    background-color: #1f1f1f;
    color: white;
    height: 100px;
    bottom: 0;
    position: relative;
    justify-content: space-between;
    padding: 2rem 10rem;
    text-align: left;
    display: flex;
    border-bottom: solid 1px #696969;
`
const Copyright = styled.div`
    color: white;
    height: 20px;
    background-color: #1f1f1f;
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 1rem 10rem;
`
export default Footer