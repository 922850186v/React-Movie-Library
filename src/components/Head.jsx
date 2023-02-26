import React from 'react'
import styled from "styled-components"
import logo from "../Assets/Logos/Logo-White.svg";
import menu from "../Assets/Icons/Menu White.svg";

function Head() {
  return (
    <Header>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <Links>
                <li>
                <a href="home.jsx">HOME</a>
                </li>
                <li>
                <a href="">OUR SCREENS</a>
                </li>
                <li>
                <a href="">SCHEDULE</a>
                </li>
                <li>
                <a href="">MOVIE LIBRARY</a>
                </li>
                <li>
                <a href="">LOCATION & CONTACT</a>
                </li>
                <li>
                <img src={menu} alt="" />
                </li>
            </Links>
    </Header>
  )
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: black;
    min-height: 100px;
    align-items: center;
    border-bottom: solid 0.2px #2b2b2b;
`
const Logo = styled.div`
    float: left;
    align-items: center;
    margin-left: 5%;
    img{
        height: 60px;
    }
`
const Links = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
    margin-right: 7.5%;
    font-size: 16pt;
a{
    text-decoration: none;
    color: white;
}
a:hover{
    text-decoration: underline;
}
li{
    list-style: none;
}
`
export default Head