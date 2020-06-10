import React, { useState, useEffect } from "react";

import { withKnobs } from "@storybook/addon-knobs";
import "./MovieSearch.css";

const SearchMovie = () => {
    const input_movie = React.createRef();
    const url="https://jk7m2nfn96.execute-api.eu-west-1.amazonaws.com/dev/items/";
    const handleSubmit = async (event) => {
        alert ("Your query for " + input_movie.current.value + " has been taken into account");
        event.preventDefault();
        const response= await fetch(url)
        const responseJSON = await response.json();
        console.log(responseJSON);
        
    };

    return (
      <div className="MovieSearch">
        <form onSubmit={handleSubmit}>
          <label className="Movie">
            Movie : 
            <input type="text" ref={input_movie} />
          </label>
        <input type="submit" value="Search" />
        </form>
      </div>

    );
};

export default SearchMovie;