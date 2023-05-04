import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import styles from "/styles/Home.module.css"
import SearchIcon from '@mui/icons-material/Search';
import SimpleImageSlider from "react-simple-image-slider";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import productCard from '../Components/Card/productCard';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => {
    const images = [
        { url: require("/public/download (1).jpg") },
        { url: "../../public/download (2).jpg" },
        { url: "../../public/download (3).jpg" },
        { url: "../../public/download.jpg" },
        { url: "../../public/images (1).jpg" },
        { url: "../../public/images (2).jpg" },
        { url: "../../public/images.jpg" },
    ];

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <section className={styles.trending}>
                    <div className={styles.box}>
                        <h1 style={{ marginBottom: "20px" }}>TRENDING GOODS</h1>

                        <SimpleImageSlider
                            width={1200}
                            height={600}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                </section>




                <section className={styles.searchBar}>
                    <div className={styles.box}>
                        <h1 style={{ marginBottom: "20px" }}>Looking for goods in your area?</h1>
                        <input type="search" placeholder="Search your Location...." />
                    </div>
                </section>






                <section className={styles.products}>
                    <div className={styles.box}>
                        <h1 style={{ marginBottom: "20px" }}>Popular Products</h1>

                        <div className={styles.listProducts}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                        <Item><productCard /></Item>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Item></Item>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Item></Item>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Item></Item>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Item></Item>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Item></Item>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Item></Item>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Item></Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </div>
                </section>




                <section className={styles.categories}>
                    <div className={styles.box}>
                        <h1 style={{ marginBottom: "20px" }}>Popular Products</h1>

                        <div className={styles.listCategories}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={4}>
                                        <Item><productCard /></Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item></Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item></Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item></Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item></Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item></Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home