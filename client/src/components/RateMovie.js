import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

// reference: https://reactjs.org/docs/uncontrolled-components.html

const SubmitRating = () => {
  const input_name = React.createRef();
  const input_movie = React.createRef();
  const input_rating = React.createRef();

  const handleSubmit = (event) => {
    alert("A new entry was submitted: " + input_name.current.value + " a noté " + input_movie.current.value + " " + input_rating.current.value + "/20");
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={input_name} />
      </label>
      <br/>
      <label>
          Movie:
          <input type="text" ref={input_movie} />
      </label>
      <br/>
      <label>
          Rating 
          <input type="number" ref={input_rating} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SubmitRating;