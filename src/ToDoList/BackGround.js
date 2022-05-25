import React from 'react'

const BackGround = (props) => {
    const backImgStyle = {
        backgroundImage: "url('../background.jpg')", //배경화면 이미지 고르는게 제일 힘들엉...
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        overflow: 'scroll',

    };


    return (
        <div style={backImgStyle}>
            {props.children}
        </div>
    );
}


export default BackGround