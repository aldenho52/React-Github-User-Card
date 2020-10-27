import React from 'react'
import UserCard from './UserCard'

function Followers (props) {
    return (
        <div>
            <h2 className='followers-header'>Followers</h2>
            {
                props.followers.map(follower => {
                    return (<UserCard key={follower.id} data={follower} />)
                })
            }
        </div>
    )
}

export default Followers