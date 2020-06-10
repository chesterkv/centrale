import React, { useState, useEffect } from "react";
const displayPokemons = (film) => {
      console.log({film});
        return (<div>{film?.Country}</div>)
    };  
const SearchMovie = () => {
    const input_movie = React.createRef();
    const [film, setfilm] = useState(null);
    const url="https://y9ol4o92xk.execute-api.eu-west-1.amazonaws.com/dev/items/";
    const handleSubmit = async (event) => {
        alert ("Your query for " + input_movie.current.value + " has been taken into account");
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