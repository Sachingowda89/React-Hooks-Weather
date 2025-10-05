import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({info}){
  let Int_URL="https://images.unsplash.com/photo-1759504677326-ed09c6dc7bc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
   
  let Hot_URL="https://plus.unsplash.com/premium_photo-1664367985110-e09860a022e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Cold_URL="https://images.unsplash.com/photo-1672753350299-826bce687f28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxjb2xkJTIwc2VzaW9uc3xlbnwwfHwwfHx8MA%3D%3D";
  let Rain_URL="https://images.unsplash.com/photo-1542308716-0d8306ad1c08?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return(
    <div className="InfoBox">
        <div className="CardCantainer">
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>75 ? Rain_URL:info.temp>30? Hot_URL:Cold_URL}
        title="green iguana" 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
          <p>Temperature={info.temp}&deg;c</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;c</p>
           <p>Max Temp={info.tempMax}&deg;c</p>
           <p>
            The Weather can be described as <i>{info.weather}</i> and
            feelslike {info.feelslike}&deg;c
           </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    )
}