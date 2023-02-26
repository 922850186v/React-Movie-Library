import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import searchIcon from "../Assets/Icons/Search White.svg"
import { Splide , SplideSlide } from '@splidejs/react-splide'
// import MovieBox from './MovieBox'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';



const QuickInfo = () =>{

    const [ movie , setMovie ]  = useState([]);

    const [ query , setQuery ] = useState('');

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = async(query)=>{
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await res.json();
        setMovie(data);
        return data;
    }
    const clickHandler=async()=>{
        const shows = await getMovie(query);
        console.log(shows);
        return shows
    }

    const changeHandler=(e)=>{
        e.preventDefault();
        setQuery(e.target.value)
    }

    const filteredMovie = movie.filter(show=>show.show.image && show.show.summary);

  return (
    <Info>
        <Label>
            <h1>Collect your favourites</h1>
            <Search>
            <searchIcon><img src={searchIcon} alt="" /></searchIcon>
            <input type="search" onChange={changeHandler} placeholder='Type Your Favourites Here' value={query}></input>
            <label htmlFor="search"></label>
            <button type="submit" className='search' onClick={clickHandler}>Search</button>
            </Search>
        </Label>
        <Searched>
            <Splide options={{
                perPage:4,
                arrows :false,
                pagination:true,
                drag : "free",
                gap:"2rem",
                width:"90%",
                
                }}>
                {filteredMovie.map((show )=>{
                    // const imageUrl = show.show.image?.original || '';
                        return(
                            <SplideSlide key={show.show.id}>
                                <Cards >
                                    <h1>{show.show.name}</h1>
                                    <img src={show.show.image.original} alt={show.show.name} />
                                    <Description>
                                    <p dangerouslySetInnerHTML={{__html:show.show.summary}}></p>
                                    </Description>
                                    
                                </Cards>
                            </SplideSlide>
                        )
                    })}      
            </Splide>
        </Searched>
    </Info>
  )

}

const Cards = styled.div`
    margin: auto;
    border: 2px solid white;
    border-radius: 10px;
    img{
        max-width: 400px;
        object-fit: cover;
    }
    h1{
        margin: 1rem 0.5rem;
    }
`
const Searched = styled.div`
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    color: white;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 1rem auto;
    min-height: 50vh;
`
const Info = styled.div`
    background-color: #1f1f1f;`

const Label = styled.div`
    color: #ffffff;
    display: flex;
    width: 90%;
    border-bottom: solid 5px #ffffff;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;

    button{
        width: 100px;
        height: 30px;
        margin: 0.25rem 2rem;
    }
`
const Search = styled.div`
    border: solid 2px gray;
    border-radius:10px;
    padding: 15px;
    width: 25%;
    margin: 1rem 0;
    input{
        background-color:  #242424;
        min-height: 50px;
        width: 90%;
        color: white;
        font-size: 16pt;
        padding-left: 1rem;
        margin-left: 0.75rem;
        border-radius: 5px;
        margin-bottom: 0.5rem;
    }
    button{
        margin-left: 2.5rem;
    }
`
const Description=styled.div`
    background-color: #474747;
    padding: 2rem;
`

export default QuickInfo