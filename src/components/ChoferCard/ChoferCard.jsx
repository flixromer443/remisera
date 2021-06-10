import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ChoferCard({name,vehicle,patente,rol,state}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="h2">
          {vehicle}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {patente}
        </Typography>
        <Typography variant="body2" component="p">
          {rol}
         
        </Typography>
      </CardContent>
      {state==1
      ?<CardActions>
        <IconButton size="small" placeholder="agregar viaje" title="Agregar viaje" ><AddIcon/></IconButton>
        <IconButton size="small" placeholder="agregar viaje" title="Observaciones"><InfoIcon/></IconButton>
        <IconButton size="small" placeholder="agregar viaje" title="Quitar de la lista"><BackspaceIcon/></IconButton>
      </CardActions>
      :<CardActions><Button size="small" color="secondary">Finalizar Viaje</Button></CardActions>}
    </Card>
  );
}
