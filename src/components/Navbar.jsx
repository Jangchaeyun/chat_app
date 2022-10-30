import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Berry chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/5245865/pexels-photo-5245865.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <span>sally</span>
        <button>로그아웃</button>
      </div>
    </div>
  );
}

export default Navbar;
