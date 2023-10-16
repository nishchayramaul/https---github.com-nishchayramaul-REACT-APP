import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, colors } from '@mui/material';
import '../Styling/cards.css'

export default function MultiActionAreaCard({content,imagesrc,title}) {
  return (
    <Card sx={{ height:500,width: 400,borderRadius:10,marginLeft:1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagesrc}
          alt="img"
          style={{height:300,
                  borderRadius:20}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
