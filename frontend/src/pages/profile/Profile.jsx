import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TimeLine from '../../components/timeline/TimeLine'
import Topbar from '../../components/topbar/Topbar'
import './Profile.css'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../states/AuthContext'

export default function Profile() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState({});

    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?username=${currentUser.username}`);
            setUser(response.data);
        };
        fetchUser();
    }, [])

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className='profileCover'>
                            <img
                                src={currentUser.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"}
                                alt=""
                                className='profileCoverImg'
                            />
                            <img
                                src={
                                    currentUser.profilePicture
                                        ? PUBLIC_FOLDER + currentUser.profilePicture
                                        : PUBLIC_FOLDER + '/person/noAvatar.png'}
                                alt=""
                                className='profileUserImg'
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>{currentUser.username}</h4>
                            <span className="profileInfoDesc">{currentUser.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <TimeLine username={currentUser.username} />
                        <Rightbar user={currentUser} />
                    </div>
                </div>
            </div>
        </>
    )
}
