import React from 'react'

import { Grid } from '@material-ui/core'
import youtube from './api/youtube'

import {SearchBar, VideoList, VideoDetail} from './components'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {params: {
             q: searchTerm,
             part: 'snippet', //means return videos
             maxResults: 5,
             key: "YOUR YOUTUBE API_KEY"
            }});
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    onSelectVideo = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
    render () {
        const {selectedVideo, videos} = this.state;
        return (
            <Grid container spacing={10} justify="center" >
                <Grid item xs={11}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                           <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                           <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default App;