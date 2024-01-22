import React from "react";

function intro(){
    return <section>
    <div className="img-intro">
        <img src="https://images.squarespace-cdn.com/content/v1/649be50cfbde8a6e1125af5d/e02148ea-bea4-456c-8021-d55c0d98e669/Color%2Bwheel%2B-%2Bmatch%2Bclothes%2Bin%2Bthis%2B5%2Bways-min.jpeg" alt="" style={{
            height:"50vh",
        }}></img>
        <h1 className="intro-title" style={{
            color: "black",
            fontFamily: "noto Sans"
        }}>What is MixMatch?</h1>
    </div>
    <div>
    <p style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Poppins",
            color: "whitesmoke"
        }}>
            MixMatch is a website that gives you confidence to wear color, by showing you what colors co-ordinate with the clothing you have!
            <i class="fa-thin fa-check"></i>
            </p>
    </div>
    </section>
};

export default intro;