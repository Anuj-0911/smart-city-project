import { React, useState, useEffect, useContext } from "react";
import axios from 'axios';

const Info=(props)=>{
    const area = props.match.params.area;
    const [data1, setData1] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");
    console.log(area);
    useEffect(()=>{
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
          
        const getData= async()=>{
            const res1 = await axios.get(
                `https://hackshetra-smart-city.el.r.appspot.com//area/${area}/util/Gas`
              );
              const res2 = await axios.get(
                `https://hackshetra-smart-city.el.r.appspot.com//area/${area}/util/Electricity`
              );
              const res3 = await axios.get(
                `https://hackshetra-smart-city.el.r.appspot.com//area/${area}/util/Water`
              );
              setData1(res1.data);
              setData2(res2.data);
              setData3(res3.data);
            console.log(res1.data);
            console.log(res2.data);
            console.log(res3.data);
        }
        getData();

    },[area]);
    return(
        <div>
            <h1>{data1}</h1>
            <h1>{data2}</h1>
            <h1>{data3}</h1>
         </div>
    )
}
export default Info;