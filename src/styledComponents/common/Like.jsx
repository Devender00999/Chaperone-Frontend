import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Like = () => {
  const [liked, setLiked] = useState(true);
  return (
    <div onClick={() => setLiked(!liked)} className="cursor-pointer ">
      {liked ? (
        <FavoriteBorderOutlinedIcon />
      ) : (
        <FavoriteIcon className="secondary-color" />
      )}
    </div>
  );
};

export default Like;
