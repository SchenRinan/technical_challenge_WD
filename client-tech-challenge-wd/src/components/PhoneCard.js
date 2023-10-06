import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PhoneCard = (props) => {
    const navigate = useNavigate();
    return (
             <Card sx={{ display: 'flex', width: 345 }}>
                <CardMedia
                    component="img"
                    height='194'
                    sx={{ width: 151 }}
                    image={`/images/${props.phone.imageFileName}`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {props.phone.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            €{props.phone.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" onClick={()=>navigate(`/${props.phone.id}`)}>
                    Explore
                    </Button>
                </CardActions>
                </Box>
             </Card>
    );
}
 
export default PhoneCard;