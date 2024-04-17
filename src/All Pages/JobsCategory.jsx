import MenuBar from "./MenuBar";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Styles from '../Styles/JobsCategory.module.css'


const JobsCategory = () => {
    return (
        <div className={Styles.mainDiv}>
            <MenuBar />
            <div className={Styles.container}>
                <div >
                    <Card sx={{ Width: 450, height: 300}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="FindJobs.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    <div style={{color:'balck',textAlign:'center'}}>
                                    Find New Jobs...!
                                    </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div>
                    <Card  sx={{ Width: 450, height: 300}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="StartHiring.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                <div style={{color:'balck',textAlign:'center'}}>
                                    Start Finding Your Employees...!
                                </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default JobsCategory;