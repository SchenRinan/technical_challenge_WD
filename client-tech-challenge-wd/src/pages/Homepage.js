import { useEffect, useState } from "react";
import PhoneCard from "../components/PhoneCard";
import axios from "axios";
import { Box, Container, Grid, Skeleton } from "@mui/material";

const Homepage = () => {
    const [phones, setPhones] = useState(null);
    // const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            axios.get('http://localhost:5000/phones')
            .then(data =>{
                setPhones(data.data)
            })
            .catch((err) => {
                console.log(err.message);
             });    
        }, 1000);
        
    },[])
    

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
            {phones ? phones.map(item=><Grid item xs={12} md={6}><PhoneCard phone={item} /></Grid>)
            :
            <>
            <Grid item xs={12} md={6}>
                <Skeleton variant="rectangular" height={118} />
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Skeleton variant="rectangular" height={118} />
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Skeleton variant="rectangular" height={118} />
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Skeleton variant="rectangular" height={118} />
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Skeleton variant="rectangular" height={118} />
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton />
                </Box>
            </Grid>
            </>}
            </Grid>
        </Container>
    );
}
 
export default Homepage;