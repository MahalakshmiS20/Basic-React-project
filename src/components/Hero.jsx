import React from "react";

const Hero = ()=>{
    return(
        <section className=" bg-gray-100 text-center py-16">
            <img src="./public/react+vite.jpg" alt="react+vite"  className="mx-auto rounded-lg"/>
            <h2 className="text-3xl font-bold mt-4 ">🎨Build Amazing UI's with React & Vite</h2>
            <p className="text-gray-600 mt-2">Fast,lightweight and modern frontend development</p>
            <button className="bg-blue-400 rounded-lg px-6 py-2 mt-4 text-white hover:bg-blue-600 transition"> 🚀Get Started</button>
        </section>
    )
};

export default Hero;