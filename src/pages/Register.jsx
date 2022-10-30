import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Berry Chat</span>
            <span className="title">회원가입</span>
            <form>
                <input type="text" placeholder='이름'/>
                <input type="email" placeholder='이메일'/>
                <input type="password" placeholder='비밀번호'/>
                <input style={{display: "none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>프로필 사진 등록</span>
                </label>
                <button>가입</button>
            </form>
            <p>계정이 있으십니까? 로그인</p>
        </div>
    </div>
  )
}

export default Register
