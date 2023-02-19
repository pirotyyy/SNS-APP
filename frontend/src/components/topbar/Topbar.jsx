import { Chat, Notifications, Search } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../states/AuthContext';
import './Topbar.css';

export default function Topbar() {
    const { user } = useContext(AuthContext);
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleLogout = (e) => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Real SNS</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon' />
                    <input
                        type="text"
                        className='searchInput'
                        placeholder='探し物は何ですか?'
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarIconItems">
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <Link to={`/profile/${user.username}`} >
                        <img
                            src={user.profilePicture
                                ? PUBLIC_FOLDER + user.profilePicture
                                : PUBLIC_FOLDER + "/person/noAvatar.png"}
                            alt=""
                            className="topbarImg"
                        />

                    </Link>
                    <form onClick={(e) => handleLogout(e)}>
                        <button className='logoutButton'>ログアウト</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
