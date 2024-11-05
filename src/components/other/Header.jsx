import React, { useEffect, useState } from 'react';
import Login from '../Auth/Login';
import { setLocalStorage } from '../../utils/LocalStorage';

const Header = ({ data, changeUser }) => {
  const [userData, setuserData] = useState('');

  useEffect(() => {
    if (!data) {
      setuserData('Admin');
    } else {
      setuserData(data.firstName);
    }
  }, []);

  const LogOut = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('')  // changeUser araha hai App.jsx se. Humne jese hi logOut btn pr click kia wese hi User empty ho jae ga or logIn page khul jae ga
    
  };

  return (
    <div className="flex items-end justify-between px-3 py-2">
      <h1 className="text-2xl font-medium">
        Hello <br />{' '}
        <span className="text-3xl font-semibold">{userData} 👋</span>
      </h1>
      <button
        onClick={LogOut}
        className="bg-red-600 text-white px-3 py-2 rounded-md font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
