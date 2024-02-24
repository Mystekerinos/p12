import React from "react";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <PageWrapper>
      <h1 className="">404</h1>
      <h2 className="subTitle">Oups! La page que </h2>
      <h2 className="subTitle">vous demandez n'existe pas.</h2>
      <div className="return-to-home">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </PageWrapper>
  );
};

export default PageNotFound;
