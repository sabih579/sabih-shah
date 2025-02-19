import React, { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { display, Stack, styled } from "@mui/system";
import { Avatar } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';



const StyledModal = styled(Modal) ({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox = styled(Box) ({
    display:"flex",
    alignItems:"center",
    marginBottom:"20px",
    gap:"10px"
})
const Add = () => {
    const [open, setOpen] = useState(false)
    return(
        <>
            <Tooltip onClick={e => setOpen (true)} title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30},}}>
            <Fab color="primary" aria-label="add">
            <AddIcon />
            </Fab>
            </Tooltip>

            <StyledModal
             open={open}
             onClose={e => setOpen (false)}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
            >
       <Box width={400} height={280} p={3}  bgcolor={"background.default"} color={"text.primary"} borderRadius={5}>
        <Typography variant="h6" color="grey" textAlign="center">Create Posts</Typography>
        <UserBox>
    <Avatar src="john.jpeg" 
     sx={{width:30, height:30}}
     />
     <Typography fontWeight={500} variant="span">
        John Doe
     </Typography>
        </UserBox>
        <TextField
        sx={{width:"100%"}}
          id="standard-multiline-static"
         
          multiline
          rows={3}
          placeholder="What's on your mind"
          variant="standard"
        />
<Stack direction="row" gap={1} mt={2} mb={3}>
    <EmojiEmotions color="primary" />
    <Image color="secondary" />
    <VideoCameraBack color="success"/>
    <PersonAdd color="error"/>
</Stack>

<ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}>
    <DateRange />
    </Button>
  
</ButtonGroup>

       </Box>
   </StyledModal>
      </>
    )
};
export default Add;