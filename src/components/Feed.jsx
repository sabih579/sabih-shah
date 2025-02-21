import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import MyTable from "./Table";



const Feed = () => {
    return(
    <Box flex={4} p={2}>
     <Post />
     <Post />
     <Post />
     <Post />
    
     <MyTable />
    </Box>
   
)
}
export default Feed ;
