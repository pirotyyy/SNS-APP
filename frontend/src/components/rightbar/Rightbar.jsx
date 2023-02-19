import React, { useContext, useEffect, useState } from 'react';
import Online from '../online/Online';
import './Rightbar.css';
import { AuthContext } from '../../states/AuthContext';
import axios from 'axios';

export default function Rightbar({ user }) {
    const { user: currentUser } = useContext(AuthContext);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const response = await axios.get(`/users/${currentUser._id}/followings`);
            setFriends(response.data);
        };
        fetchFriends();
    }, [])

    const HomeRightbar = () => {
        const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
        return (
            <>
                <div className="eventContainer">
                    <img src={PUBLIC_FOLDER + "/star.png"} alt="" className='starImg' />
                    <span className='eventText'><b>フォロワー限定</b>イベント開催中</span>
                </div>
                <img src={PUBLIC_FOLDER + "/ad.jpeg"} alt="" className='adImg' />
                <h4 className='rightbarTitle'>オンラインの友達</h4>
                <ul className="rightbarFriendList">
                    {friends.map((friend) => (
                        <Online friend={friend} key={friend._id} />
                    ))}
                </ul>
                <p className="promotionTitle">プロモーション広告</p>
                <img src={PUBLIC_FOLDER + "/promotion/promotion1.jpeg"} alt="" className='rightbarPromotionImg' />
                <p className="promotionName">ショッピング</p>
                <img src={PUBLIC_FOLDER + "/promotion/promotion2.jpeg"} alt="" className='rightbarPromotionImg' />
                <p className="promotionName">カーショップ</p>
                <img src={PUBLIC_FOLDER + "/promotion/promotion3.jpeg"} alt="" className='rightbarPromotionImg' />
                <p className="promotionName">Shin Code株式会社</p>
            </>
        )
    }

    const ProfileRightbar = () => {
        const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
        return (
            <>
                <h4 className='rightbarTitle'>ユーザー情報</h4>
                <div className="rightbarInfo">
                    <span className="rightbarInfoKey">出身：</span>
                    <span className="rightbarInfokey">福岡</span>
                </div>
                <h4 className="rightbarTitle">あなたの友達</h4>
                <div className="rightbarFollowings">
                    {friends.map((friend) => (
                        <div className="rightbarFollowing">
                            <img src={
                                friend.profilePicture
                                    ? PUBLIC_FOLDER + friend.profilePicture
                                    : PUBLIC_FOLDER + '/person/noAvatar.png'
                            } alt="" className='rightbarFollowingImg' />
                            <span className="rightbarFollowingName">{friend.username}</span>
                        </div>
                    ))}
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
