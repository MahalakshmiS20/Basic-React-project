import React from "react"
import {FaBook,FaReact,FaRocket} from "react-icons/fa"

const link = [
    {
        icon: <FaBook/>,
        title: "Vite Documentation",
        link:"#"
    },
    {
        icon:<FaReact/>,
        title: "React Guide",
        link:"#"
    },
    {
        icon:<FaRocket/>,
        title:"Frontend Guide",
        link:"#"
    }
]


const aside = ()=>{
    return(
        <aside className=" p-6 bg-gray-200 rounded shadow-md">
           <h2 className="text-xl font-bold">📌Related links</h2>
           <ul className=" mt-2 space-y-2" >
           {link.map((link,index)=>(
                <li key={index}>
                  <a href={link.link} className="flex items-center gap-1 text-blue-400 hover:underline">
                    {link.icon}
                    {link.title}
                  </a>
                </li>
          
           )
        )}
         </ul>
          
        </aside>
    )
}

export default aside;