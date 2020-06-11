import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

// ref: https://reacttraining.com/react-router/web/guides/quick-start

const ShowMovieInfo = () => {
  const routeInformation = useRouteMatch();
  const [movieInfo,setmovieInfo]=useState();
  const url="https://99doeod1u0.execute-api.eu-west-1.amazonaws.com/dev/items/";
  const movieName=routeInformation.params.name;
  
  

  useEffect(()=>{
    const fetchExample= async ()=>{
      try{
          const response = await fetch(url+movieName, {
              method:"get"
          });
          console.log({response});
          const responseJson = await response.json();
          console.log({responseJson});
          setmovieInfo(responseJson);
      } catch (error) {}
    };

    fetchExample();
   },[movieName]);
  
  console.log({movieInfo});
  return <div>{movieInfo?.Director}</div>;
};

export default ShowMovieInfo;