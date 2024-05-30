import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Post({post}) {
  return (
    <Card  sx={{ minWidth: 275 ,my: '3px'}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
         {post.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.title}
        </Typography>
         <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.content}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
