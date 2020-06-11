import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";



const displayPokemons = (film) => {
      console.log({film});
        return (<div>{film?.name}</div>)
    };  


const SearchMovie = () => {
    const [movieName,setmovieName]=useState();
    const input_movie = React.createRef();
    const [film, setfilm] = useState(null);
    const url="https://99doeod1u0.execute-api.eu-west-1.amazonaws.com/dev/items/";
    const handleSubmit = async (event) => {
        alert ("Your query for " + input_movie.current.value + " has been taken into account");
        setmovieName(input_movie.current.value);
        event.preventDefault();
        const response= await fetch(url+input_movie.current.value,{
          method: "get"
        });
        const responseJSON = await response.json();
        setfilm(responseJSON);
        console.log({responseJSON});
      };
    
        
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Movie : 
            <input type="text" ref={input_movie} />
          </label>
        <input type="submit" value="Search" />
        </form>
        <div>
          {displayPokemons(film)}
        </div>
      </div>

    );
  
}


export default SearchMovie;