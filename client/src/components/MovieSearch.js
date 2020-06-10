import React, { useState, useEffect } from "react";

import { withKnobs } from "@storybook/addon-knobs";
import { get } from "https";

const SearchMovie = () => {
    const input_movie = React.createRef();
    const url="https://y9ol4o92xk.execute-api.eu-west-1.amazonaws.com/dev/items/";
    const handleSubmit = async (event) => {
        alert ("Your query for " + input_movie.current.value + " has been taken into account");
        event.preventDefault();
        const response= await fetch(url+input_movie.current.value,{
          method: "get"
        });
        const responseJSON = await response.json();
        console.log(responseJSON);
        
    };

    return (
    
        <form onSubmit={handleSubmit}>
          <label>
            Movie : 
            <input type="text" ref={input_movie} />
          </label>
        <input type="submit" value="Search" />
        </form>

    );
};

export default SearchMovie;