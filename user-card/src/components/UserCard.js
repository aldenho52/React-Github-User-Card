import React from 'react'
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        width: '40%',
        margin: '5% auto',
    },
    media: {
        height: '35vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '0 auto',
        maxWidth: '400px'
    },
    link: {
        textDecoration: 'none'
    }
})

function UserCard (props) {
    const classes = useStyles()

    return(
        <Card className={classes.card}>
            <CardMedia
                className={classes.media} 
                image={props.data.avatar_url}
                title="avatar url"
            />
            <CardContent>
                <Typography variant='h4' component='h2'>{props.data.login}</Typography>
                <Typography variant='h4'>{props.data.name}</Typography>
                <Typography variant='h5'>ID: {props.data.id}</Typography>
                <Typography variant='h5'>Public Repos: {props.data.public_repos}</Typography>
                <Typography variant='p'>Bio: {props.data.bio}</Typography>
                <a href={props.data.repos_url} className='link'>Repos URL</a>
            </CardContent>
        </Card>
    )
}

export default UserCard