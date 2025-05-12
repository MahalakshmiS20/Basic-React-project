import React from "react";
const Hero= ()=>{
    return(
        <article className="container place-items-center mx-auto p-6">
            <h1 className="text-2xl font-bold mr-auto ml-56">📰Latest News</h1>
            <div className="flex ">
            <div className="flex shadow-lg bg-white p-4">
              <img src="./public/news.jpg" alt="news" className="rounded-lg"/>
            <div className="ml-4">
              <h2 className=" text-xl font-semibold">🚀Vite is Revolutionzing Frontend</h2>
              <p className="text-gray-600 mt-2">Vite is next-gen frontend tool that delivers frontend development</p>
            </div>
            </div>
            </div>
        </article>
    )
};

export default Hero;