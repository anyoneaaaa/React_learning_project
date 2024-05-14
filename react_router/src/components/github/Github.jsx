// import React from 'react'

// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    // const [data, setdata] = useState([]);
    // useEffect(() => {
    //   fetch("https://api.github.com/user/anuoneaaaa")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       setdata(data);
    //     });
    // }, []);

   const data = useLoaderData()
  return <div>Github followers: {data.followers}
  <img src={data.avatar_url} alt="github pic" width={300} />
  </div>;
}

export default Github;

export const gihubinfoloader =async ()=>{
    const res =await fetch ("https://api.github.com/user/anuoneaaaa")
    return res.json()
}