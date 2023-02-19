import React from 'react'

export default function Online({ friend }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={
                    friend.profilePicture
                    ? PUBLIC_FOLDER + friend.profilePicture
                    : PUBLIC_FOLDER + '/person/noAvatar.png' 
                    } 
                    alt="" 
                    className='rightbarProfileImg' 
                />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{friend.username}</span>
        </li>
    )
}
