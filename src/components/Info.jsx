import { React, useState, useEffect, useContext } from "react";
import axios from 'axios';

const Info=(props)=>{
    const area = props.match.params.area;
    const [data, setData] = useState("");
    console.log(area);
    useEffect(()=>{
        const getData= async()=>{
            const res = await axios.get(
                `https://salty-garden-87397.herokuapp.com/area/Amer/util/Gas`
              );
            console.log(res);
        }
        getData();

    },[area]);
    return(
        <div>hii</div>
    )
}
export default Info;