import React, { useEffect, useState } from "react";
import { useFetch } from "../util/hooks/useFetch";
import { API_STATUS } from "../util/constants/constant";
import ArticleList from "../components/ArticleList";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

function Articles() {
  const [articles, setArticles] = useState([]);
  const {
    execute: getArticle,
    data: response,
    isLoading: loading,
    error: error,
  } = useFetch(`${baseUrl}${apiKey}`);

  useEffect(() => {
    getArticle();
  }, []);

  useEffect(() => {
    if (!loading && response && response?.status === API_STATUS) {
      setArticles(response?.results);
    }
  }, [response, loading, error]);

  const handleChange = (e, value, reason) => {
    if (value && reason != "clear") {
      const filteredArticles = articles.filter(
        (article) => article.title === value
      );
      setArticles(filteredArticles);
    } else {
      getArticle();
    }
  };

  return (
    <>
      {loading && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          mt={20}
        >
          <CircularProgress sx={{ alignSelf: "center" }} data-testid="Loader" />
        </Box>
      )}
      {error && <p> There was error in loading articles</p>}
      {!loading && !error && articles && (
        <>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            options={articles.map((option) => option.title)}
            onChange={(e, value, reason) => handleChange(e, value, reason)}
            sx={{ margin: 5 }}
            filterSelectedOptions
            clearIcon={null}
            renderInput={(params) => {
              return (
                <TextField
                  disableClearable
                  {...params}
                  label="Search Articles"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    startAdornment: <SearchIcon />,
                  }}
                />
              );
            }}
          />
        </>
      )}
      {!loading &&
        articles?.map((art, index) => {
          const media =
            art?.media[0] &&
            art?.media[0]["media-metadata"] &&
            art?.media[0]["media-metadata"][0];
          return (
            <div key={index} style={{ margin: 30 }}>
              <ArticleList
                id={art.id}
                title={art.title}
                desc={art.abstract}
                image={media && art?.media[0]["media-metadata"][0]?.url}
                author={art.byline}
                url={art.url}
                dataTestId={"articleList"}
              />
            </div>
          );
        })}
    </>
  );
}

export default Articles;
