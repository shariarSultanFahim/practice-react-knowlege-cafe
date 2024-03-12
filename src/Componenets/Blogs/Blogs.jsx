import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    
    const [blogs,setblogs] = useState([]);
    useEffect( ()=>{
        fetch('api.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    } ,[]);

    return (
        <div>
            
        </div>
    );
};

export default Blogs;