import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Label } from "@mui/icons-material";

const Post =() => {
    return(
        <div>
            <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar alt="john" src="john.jpeg" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia sx={{objectFit:"contain"}}
          component="img"
          height="300px"
         
          image="dish-4.webp"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
         
        </CardActions>
       
      </Card>
  </div>
    )
}
export default Post;