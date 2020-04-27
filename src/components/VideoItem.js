import React from 'react'

import {Grid, Paper, Typography} from '@material-ui/core'

const VideoItem = ({video, onVideoSelect}) => {
    return (
   
            <Grid container spacing={4} onClick={() => onVideoSelect(video)}>
                <Grid item xs={8} >   
                    <img style={{width: "100%"}} src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" style={{ paddingLeft: '10px'}}><b>{video.snippet.title}</b></Typography>
                </Grid>
            </Grid>
   
    )
}

export default VideoItem;