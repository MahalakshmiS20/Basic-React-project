import React from "react";
const Header= ()=>{
    return(
        <header className="h-96 bg-cover bg-center flex items-center justify-center" style={{backgroundImage:"url('./images.jpg')"}}>
            <h1 className="text-3xl font-bold text-white border rounded-xl bg-black/50 backdrop:blur-lg p-4">🚀Welcome to my Website</h1>
        </header>
    )
};


export default Header;