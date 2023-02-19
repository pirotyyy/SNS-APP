import React from 'react'

export default function Friend({ friend }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
            <img
                src={
                    friend.profilePicture
                        ? PUBLIC_FOLDER + friend.profilePicture
                        : PUBLIC_FOLDER + '/person/noAvatar.png'
                }
                alt=""
                className='sidebarFriendImg'
            />
            <span className="sidebarFriendName">{friend.username}</span>
        </li>
    )
}
