import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React from "react";
import { Link } from "react-router-dom";

const Professional = ({ users, dispatch, favs }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={user.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={user.name}
            />
            <CardMedia
              component="img"
              height="194"
              image={
                "https://res.cloudinary.com/dnqfh2chg/image/upload/v1680834957/doctor_mpg4ix.jpg"
              }
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() =>
                  dispatch({ type: "HANDLE_FAVORITE", payload: user })
                }
              >
                <FavoriteIcon
                  color={
                    favs.some((fav) => fav.id === user.id)
                      ? "error"
                      : "disabled"
                  }
                />
              </IconButton>
              <Link to={`/dentista/${user.id}`}>
                <Button variant="contained">Ver detalle</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Professional;
