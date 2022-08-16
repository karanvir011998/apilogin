import React, {useEffect, useState} from "react";
function Logout()
{
    const [data, setdata] = useState("")
    useEffect(() => { 
        const data = JSON.parse(localStorage.getItem("user"));
        console.log(data);
        setdata(data.data)
      }, [])


    return(
        <div className="container">
            Welcome {
                 data.email
            }   
        </div>
    )
}
export default Logout;
