import React, { Component } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const location = useLocation();
    console.log(location.pathname.slice(10));

    axios
      .get("https://react1-7a0609.appdrag.site/api/getAllArticles/getApiId", {
        params: {
          id: location?.pathname?.slice(10),
          AD_PageNbr: "1",
          AD_PageSize: "500",
        },
      })
      .then((response) => {
        this.setState({
          data: response.data.Table[0],
        });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 shadow rounded-3 m-3 p-3">
            {data && (
              <>
                <div>{data.id}</div>
                <h1 className="text-center">{data.title}</h1>
                <p className="m-4">{data.articles}</p>
                <img className="img-fluid" src={data.image} alt="" />
                <p>L'auteur = {data.auteur}</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
