import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Phone = () => {
    const {id} = useParams();
    const [phone, setPhone] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:5000/phones/${id}`)
        .then(data =>{
            setPhone(data.data)
        })
        .catch((err) => {
            console.log(err.message);
         });
    },[id])
    return (
        <div>
            <Box 
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom:10
            }}>
            <Stack spacing={0}>
                <Typography component="div" variant="h3" sx={{textAlign:'center'}}>
                    {phone.name}
                </Typography>
                {phone.imageFileName && <img src={require(`../../public/images/${phone.imageFileName}`)} alt='phoneimage' style={{objectFit:'contain', height:'450px'}}/>}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Container>
                            <Typography component="div" variant="h3" sx={{textAlign:'center'}}>
                            Highlights
                            </Typography>
                        </Container>
                        <Container>
                            <Typography component="div" variant="p" sx={{textAlign:'center'}}>
                            {phone.description}
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Container>
                            <Typography component="div" variant="h3" sx={{textAlign:'center'}}>
                            Specs
                            </Typography>
                        </Container>
                        <Container>
                            <Typography component="div" variant="p">
                            Manufacturer: {phone.manufacturer}
                            </Typography>
                            <Typography component="div" variant="p">
                            Color: {phone.color}
                            </Typography>
                            <Typography component="div" variant="p">
                            Screen: {phone.screen}
                            </Typography>
                            <Typography component="div" variant="p">
                            Processor: {phone.processor}
                            </Typography>
                            <Typography component="div" variant="p">
                            Ram: {phone.ram}
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Stack>
            </Box>
            {/* <Container component="main" maxWidth="xs">
                {phone.imageFileName && <img src={require(`../../public/images/${phone.imageFileName}`)} />}
            </Container>
            <div> {phone.name}
            {phone.imageFileName && <img src={require(`../../public/images/${phone.imageFileName}`)} />}
            </div> */}

        </div>
        
    );
}
 
export default Phone;