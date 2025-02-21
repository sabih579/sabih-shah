import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';





const Rightbar = () => {
    return(
<Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
    <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={5}>
       <Avatar alt="Remy Sharp" src="team-1.jpg" />
       <Avatar alt="Travis Howard" src="team-3.jpg" />
       <Avatar alt="Cindy Baker" src="team-4.jpg" />
       <Avatar alt="Agnes Walker" src="team-5.jpg" />
       <Avatar alt="Trevor Henderson" href="https://unsplash.com/photos/man-standing-near-white-wall-d1UPkiFd04A" />
       <Avatar alt="Trevor Henderson" href="https://unsplash.com/photos/man-standing-near-white-wall-d1UPkiFd04A" />
       <Avatar alt="Trevor Henderson" href="https://unsplash.com/photos/man-standing-near-white-wall-d1UPkiFd04A" />
       <Avatar alt="Trevor Henderson" href="https://unsplash.com/photos/man-standing-near-white-wall-d1UPkiFd04A" />
         </AvatarGroup>
         <Typography variant="h6" fontWeight={100}>
           Latest Photos
         </Typography>
         <ImageList cols={3} rowHeight={100} gap={5} mt={2} mb={2}>
            <ImageListItem>
                <img src="team-3.jpg" alt="img-1"/>
            </ImageListItem>
           
            <ImageListItem>
                <img src="team-1.jpg" alt="img-3"/>
            </ImageListItem>
            <ImageListItem>
                <img src="team-4.jpg" alt="img-1"/>
            </ImageListItem>
         </ImageList>
         <Typography variant="h6" fontWeight={100} pt={3}>
           Latest Conversation
         </Typography>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="team-1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="team-3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="team-4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
</Box>
)
}
export default Rightbar;