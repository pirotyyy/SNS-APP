import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import Friend from '../friend/Friend';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../states/AuthContext';
import axios from 'axios';


export default function Sidebar() {
    const { user: currentUser } = useContext(AuthContext);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const response = await axios.get(`/users/${currentUser._id}/followings`);
            setFriends(response.data);
        };
        fetchFriends();
    }, [])

    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <Link to='/' style={{ textDecoration: "none", color: "black" }}>
                        <li className="sidebarListItem">
                            <Home className="sidebarIcon" />
                            <span className="sidebarListItemText">ホーム</span>
                        </li>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <li className="sidebarListItem">
                            <Search className="sidebarIcon" />
                            <span className="sidebarListItemText">検索</span>
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Notifications className="sidebarIcon" />
                        <span className="sidebarListItemText">通知</span>
                    </li>
                    <li className="sidebarListItem">
                        <MessageRounded className="sidebarIcon" />
                        <span className="sidebarListItemText">メッセージ</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">ブックマーク</span>
                    </li>
                    <Link to={`/profile/${currentUser.username}`} style={{ textDecoration: "none", color: "black" }}>
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon" />
                            <span className="sidebarListItemText">プロフィール</span>
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Settings className="sidebarIcon" />
                        <span className="sidebarListItemText">設定</span>
                    </li>
                </ul>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                    {friends.map((friend) => (
                        <Friend friend={friend} key={friend._id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
