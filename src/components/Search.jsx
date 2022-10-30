import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='이름 검색...'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/373394/pexels-photo-373394.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
        <div className="userChatInfo">
          <span>skykang</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
