

const tableheading=[
    {
        icon: "👤",
        colname:"Avatar"
    },
    {
        icon: "🎃",
        colname:"Name"
    },
    {
        icon:"✅",
        colname:"Status"
    }
]

const tablebody =[
    {
        usericon :"👨‍💼" ,
        username:"Alice",
        userstatus:"Active"
    },
    {
        usericon :"👨‍💼" ,
        username:"Bob",
        userstatus:"Inactive"
    }
]

const Tablesection = ()=>{
     return(
        <div className="container place-items-center mx-auto p-6 ">
         <h2 className="text-2xl font-bold mr-auto ml-60 mb-4 ">📊User data</h2>   
            <table className="w-3/5 border border-collapse">
                <thead>
                    <tr>
                       { tableheading.map((heading)=>(
                          <th key={heading.colname} className="bg-gray-300 border border-gray-400 px-4 py-2">{heading.icon}
                          {heading.colname}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                        {tablebody.map((userdata)=>(
                           <tr key={userdata.index}>
                               <td className="bg-gray-200 border border-gray-400 px-4 py-2">{userdata.usericon}</td>  
                               <td className="bg-gray-200 border border-gray-400 px-4 py-2">{userdata.username}</td> 
                               <td className={`bg-gray-200 border border-gray-400 px-4 py-2 ${userdata.userstatus == "Active"? `text-green-600`:`text-red-600`}`}>{userdata.userstatus} </td>
                           </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
     
)};

export default Tablesection;