import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { likeAdArticle } from "../../redux/actions/admissionActions";

const Like = (props) => {
  const dispatch = useDispatch();

  const [liked, setLiked] = useState(props.liked);
  return (
    <div
      onClick={() => {
        console.log(props.id);
        dispatch(likeAdArticle(props.id));
        setLiked(!liked);
      }}
      className="cursor-pointer "
    >
      {!liked ? (
        <FavoriteBorderOutlinedIcon />
      ) : (
        <FavoriteIcon className="secondary-color" />
      )}
    </div>
  );
};

export default Like;
