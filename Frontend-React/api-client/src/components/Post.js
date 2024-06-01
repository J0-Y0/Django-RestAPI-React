import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CommentIcon from '@mui/icons-material/Comment';
import { ButtonGroup } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { createTheme, ThemeProvider } from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';


import ReportIcon from '@mui/icons-material/Report';
export default function Post({ post }) {
  const [label, setLabel ] = useState("Type your comment")
  const theme = createTheme({
    palette: {
      warning: {
        main: '#ffffff',
        light: "ffffff",
        dark:"aaaaaa",
      }
      
    }
})
  return (

        <ThemeProvider theme={theme}>
          <Card   sx={{ minWidth: 275 ,my: '3px',background:"primary"}}>
            <CardContent>
            
              <Typography variant="h5" component="div" >
              {post.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {post.title}
              </Typography> 
              <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                {post.content}        <Button size="small" endIcon={<KeyboardDoubleArrowRightIcon />} >Learn More</Button>

              </Typography>
              
            </CardContent>
        <CardActions>
          
          <TextField  icon size='small' label={label} onChange={(e)=>setLabel(e.target.value.length>0?"Commenting...":"Type your comment")} fullWidth />
              <ButtonGroup  color='primary' >

              <Button  endIcon={<FavoriteBorderIcon />} ></Button>
              <Button  endIcon={<BookmarkAddIcon />} ></Button>
              <Button  endIcon={<CommentIcon />} > </Button>
              <Button  endIcon={<ReportIcon />} > </Button>

              </ButtonGroup>
              
              
            </CardActions>
          </Card>
      </ThemeProvider>

  );
}
