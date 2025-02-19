import { AppBar, Avatar, Box, InputBase, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledToolbar = styled(Toolbar) ({
    display:'flex',
    justifyContent:'space-between',
    
    
});
const Search = styled ("div") (({ theme })=> ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}));

const Icons = styled (Box) (({theme})=> ({
    display:"flex",
    alignItems:"center",
    gap:"20px"
}));

const Navbar = () => {
    const [open, setOpen] = useState (false)
    return(
 <AppBar position="sticky">
   <StyledToolbar>
   <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>LAMA DEV</Typography>
   <PetsIcon sx={{display:{xs:"block", sm:"none"}}}/>
   <Search><InputBase  sx={{color:"grey"}} placeholder="search..." /></Search>
   <Icons>
    <Badge badgeContent={4} color="error">
    <MailIcon/>
    </Badge>
    <Badge badgeContent={4} color="error">
    <Notifications/>
    </Badge>
    <Avatar 
    sx={{height:30, width:30}} 
    src="team-5.jpg"
    onClick= {(e)=>setOpen(true)}
    />
    </Icons>
   </StyledToolbar>

   <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose = {(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

 </AppBar>
)
}
export default Navbar;