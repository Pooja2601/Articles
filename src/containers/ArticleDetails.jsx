import React from "react";
import { useLocation } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

function ArticleDetails() {
  const location = useLocation();
  const { id: id, image = "", title, desc, author, url } = location.state || {};

  return (
    location?.state && (
      <ArticleCard
        id={id}
        image={image}
        title={title}
        desc={desc}
        author={author}
        url={url}
        dataTestId={"articleDetails"}
      />
    )
  );
}
export default ArticleDetails;
