import {React, useEffect} from 'react'



export function HomePage(props){
    return (
        <body>
        <div className="topnav">
            <img src='https://st4.depositphotos.com/5040187/19681/v/600/depositphotos_196811144-stock-illustration-logo-swoosh-ellipse-green-letter.jpg'/>
            <a href="/login">Đăng nhập</a>
            <a href="/support">Hỗ trợ</a>
            <a href="/news">Tin tức</a>
            <a href="/partner">Hợp tác</a>
        </div>
        <div className="main">
            <img src='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&w=0&h=pCjvUkNlz9_esVvQw2Wgc8VJZBMgJrB0FQmktCA0KYY=' alt="test" width='1520' height={'760 '}/>
        </div>
        </body>
            )
}