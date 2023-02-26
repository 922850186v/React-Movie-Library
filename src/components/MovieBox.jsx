import React from 'react'
// import { Routes, Route, useParams } from 'react-router-dom';
import styled from 'styled-components'
import cardImage1 from "../Assets/Images/Batman.jpg"
import cardImage2 from "../Assets/Images/Wild West.jpg"
import cardImage3 from "../Assets/Images/Spiderman.jpg"

function MovieBox() {
    
    
      return (
        <Cards>
            <Show>
            {/* {gettvshow.map((show)=>{
                return(
                    <Show>
                    <p>{show.id}</p>
                    <img src={show.image} alt="" />
                    </Show>
                );
            })} */}
            </Show>

        <IMG>
                

            <img src={cardImage1} alt="batman" />
            <h1>Batman Returns</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium obcaecati quos consequuntur nemo incidunt, expedita dicta iusto numquam facere similique praesentium possimus? Nisi expedita delectus error temporibus quam laborum explicabo.</p>
        </IMG>
        <IMG>
            <img src={cardImage2} alt="batman" />
            <h1>Wild Wild West</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sapiente non unde impedit molestiae, placeat aspernatur perspiciatis asperiores quidem est nobis nesciunt, suscipit porro aliquam molestias doloremque reiciendis consectetur ratione.</p>
        </IMG>
        <IMG>
            <img src={cardImage3} alt="batman" />
            <h1>The Amazing Spiderman</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis explicabo ipsa? Debitis magnam exercitationem consequatur porro earum nobis alias culpa, ullam, nisi beatae ad obcaecati officiis, reprehenderit eius et.</p>
        </IMG>
    </Cards>
      )

}

const Show = styled.div`
    color: white;
`
const Cards = styled.div`
    background-color: #202020;
    padding: 2rem 0;
    color: white;
    display: flex;
    justify-content: center;
    gap: 5rem;
    text-align: center;
    img{
        max-height: 400px;
    }
    h1{
        margin: 1rem 0;
    }
`
const IMG = styled.div`
    max-width: 17.5%;
    padding: 1rem ;
    background-color: #414141;
`
export default MovieBox