import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UseEffectCompo = () => {

const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://react1-7a0609.appdrag.site/api/getAllArticles/getAllArticles",
        {
          params: {
            AD_PageNbr: "1",
            AD_PageSize: "500",
          },
        }
      )
      .then(function (response) {
        console.log(response.data.Table);
        setData(response.data.Table)
      });
  }, []);

  return (
    <div className='container'>
      <h1>hello uSeEffect</h1>
      {
        data?.map((row)=>(
          <Link className="text-decoration-none text-dark" to={`/articles/${row.id}`}>
          <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
            <h2>{row.title}</h2>
            <p>{row.articles}</p>
            <img src={row.image} className="image-fluid" alt="imageArticle" />
            <button className='btn btn-danger' style={{ borderRadius: "50px"}}>alert</button>
            <button className='btn btn-info'>info</button>
            <button className='btn btn-success'>valide</button>
            <button className='btn btn-warning'>warning</button>
          </div>
          </Link>
        ))
      }
    </div>
  )
}


export default UseEffectCompo;
