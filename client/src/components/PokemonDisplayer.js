import React, { useState, useEffect } from "react";

const PokemonDisplayer = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const triggerFetchAgain = () => setFetchAgain(!fetchAgain);

  const fetchExample = async () => {
    try {
      const response = await fetch("https://y9ol4o92xk.execute-api.eu-west-1.amazonaws.com/dev/items/");
      const responseJson = await response.json();
      console.log({responseJson})
      setIsLoaded(true);
      setError(false);
      setItems(responseJson);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    setIsLoaded(false);
    fetchExample();
    // The useEffect hook will retrigger every time an element in the dependency array changes.
    // changes = strict egality, so beware when mutating objects
  }, [fetchAgain]);

  const displayPokemons = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <li>
            {items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </li>
        </ul>
      );
    }
  };

  return (
    <div>
      <button onClick={triggerFetchAgain}>Fetch again</button>
      {displayPokemons()}
    </div>
  );
};

export default PokemonDisplayer;
