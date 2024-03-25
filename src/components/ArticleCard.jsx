import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function ArticleCard(props) {
  const {
    id: paramId,
    image = "",
    title,
    desc,
    author,
    url,
    dataTestId,
  } = props;
  return (
    <Card
      sx={{ minWidth: 275, minHeight: "100%", margin: 10 }}
      data-testid={dataTestId}
    >
      <CardContent>
        <CardMedia sx={{ height: 240 }} image={image} title={title} />
        <Link to={url}>
          <Typography variant="h4" gutterBottom align="left" mt={5}>
            {title}
          </Typography>
        </Link>
        <Typography variant="h5" component="div" align="left" mt={5}>
          {desc}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="left" mt={5}>
          Author : {author?.split("y")[1]}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default ArticleCard;
