import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function ArticleList(props) {
  const { id, image = "", title, desc, author, dataTestId } = props;
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }} state={props}>
      <Card sx={{ maxWidth: "100%" }}>
        <List
          sx={{
            width: "100%",
            maxWidth: "100%",
            bgcolor: "background.paper",
          }}
        >
          <ListItem
            alignItems="center"
            data-test-id={dataTestId}
            data-testid={dataTestId}
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={image} />
            </ListItemAvatar>
            <ListItemText
              primary={title}
              secondary={
                <React.Fragment>
                  Author :
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {author.split("y")[1]}
                  </Typography>
                  <Typography
                    sx={{ display: "block" }}
                    component="span"
                    variant="paragraph"
                    color="text.secondary"
                  >
                    {desc}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Card>
    </Link>
  );
}
export default ArticleList;
