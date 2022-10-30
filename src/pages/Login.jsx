import React from 'react'
import Add from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Berry Chat</span>
            <span className="title">로그인</span>
            <form>
                <input type="email" placeholder='이메일'/>
                <input type="password" placeholder='비밀번호'/>
                <button>로그인</button>
            </form>
            <p>계정이 없으십니까? 회원가입</p>
        </div>
    </div>
  )
}

export default Login
