import React, { useState, useEffect } from "react";

import { withKnobs } from "@storybook/addon-knobs";

const SearchMovie = () => {
    const input_movie = React.createRef();
    const url="https://ponm8ld221.execute-api.eu-west-1.amazonaws.com/dev/";
    const handleSubmit = async (event) => {
        alert ("Your query for " + input_movie.current.value + " has been taken into account");
        event.preventDefault();
        const response= await fetch(url
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