import { React, useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Container,Row,Col,Card } from "react-bootstrap";

const Water=(props)=>{
    // const area=["Amer","Jhotwara","Vaishali","Vidhyadhar","Malviyanagar"];

    const area11 = "Amer";
    const [data11, setData11] = useState("Water is available 24*7");
    console.log(area11);
    useEffect(()=>{
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
          
        const getData= async()=>{
           
              const res11 = await axios.get(
                `https://hackshetra-smart-city.el.r.appspot.com//area/${area11}/util/Water`
              );
             
              setData11(res11.data);
             console.log(res11.data);
        }
        getData();

    },[area11]);

    const area21 = "Jhotwara";
    const [data21, setData21] = useState("Water is available 24*7");
    useEffect(()=>{
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
          
        const getData= async()=>{
           
              const res21 = await axios.get(
                `https://hackshetra-smart-city.el.r.appspot.com//area/${area21}/util/Water`
              );
             
              setData21(res21.data);
              console.log(res21.data);
        }
        getData();

    },[area21]);

    const area31 = "Vaishali";
    const [data31, setData31] = useState("Water is available 24*7");
    console.log(area31);
    useEffect(()=>{
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
          
        const getData= async()=>{
           
              const res31 = await axios.get(
                `https://hackshetra-smart-city.el.r.appspot.com//area/${area31}/util/Water`
              );
             
              setData31(res31.data);
              console.log(res31.data);
        }
        getData();

    },[area31]);

     const area41 = "Vidhyadhar";
    const [data41, setData41] = useState("Water is available 24*7");
    console.log(area41);
    useEffect(()=>{
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
          
        const getData= async()=>{
           
              const res41 = await axios.get(
                `https://hackshetra-smart-city.el.r.appspot.com//area/${area41}/util/Water`
              );
             
              setData41(res41.data);
              console.log(res41.data);
        }
        getData();

    },[area41]);

    const area51 = "Malviyanagar";
    const [data51, setData51] = useState("Water is available 24*7");
    console.log(area51);
    useEffect(()=>{
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
          
        const getData= async()=>{
           
              const res51 = await axios.get(
                `https://hackshetra-smart-city.el.r.appspot.com//area/${area51}/util/Water`
              );
             
              setData51(res51.data);
              console.log(res51.data);
        }
        getData();

    },[area51]);

    const area61 = "Tilaknagar";
    const [data61, setData61] = useState("Water is available 24*7");
    console.log(area61);
    useEffect(()=>{
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
          
        const getData= async()=>{
           
              const res61 = await axios.get(
                `https://hackshetra-smart-city.el.r.appspot.com//area/${area61}/util/Water`
              );
             
              setData61(res61.data);
              console.log(res61.data);
        }
        getData();

    },[area61]);

     return(
        <div>
            <h1>Water status</h1>
            <Container style={{marginTop:"6rem"}}>
                <Row>
                    <Col sm={12} xl={4} md={4}>
                        <Card className='category-card' style={{textAlign:"center"}}>
                            <h3>{area11}</h3>
                            <img src="https://i.pinimg.com/originals/ba/43/14/ba4314acf8cec67242cb1cc2794b31df.jpg" style={{width:"50%",height:"50%",marginLeft:"25%"}}/>
                            <h5>{data11}</h5>
                        </Card>
                    </Col>
                    <Col sm={12} xl={4} md={4}>
                        <Card className='category-card' style={{textAlign:"center"}}>
                            <h3>{area21}</h3>
                            <img src="https://i.pinimg.com/originals/ba/43/14/ba4314acf8cec67242cb1cc2794b31df.jpg" style={{width:"50%",height:"50%",marginLeft:"25%"}}/>
                            <h5>{data21}</h5>
                        </Card>
                    </Col>
                    <Col sm={12} xl={4} md={4}>
                        <Card className='category-card' style={{textAlign:"center"}}>
                            <h3>{area31}</h3>
                            <img src="https://i.pinimg.com/originals/ba/43/14/ba4314acf8cec67242cb1cc2794b31df.jpg" style={{width:"50%",height:"50%",marginLeft:"25%"}}/>
                            <h5>{data31}</h5>
                        </Card>
                    </Col>
    
                </Row>
               
                <Container style={{marginTop:"6rem"}}>
                <Row>
                   <Col sm={12} xl={4} md={4}>
                        <Card className='category-card' style={{textAlign:"center"}}>
                            <h3>{area41}</h3>
                            <img src="https://i.pinimg.com/originals/ba/43/14/ba4314acf8cec67242cb1cc2794b31df.jpg" style={{width:"50%",height:"50%",marginLeft:"25%"}}/>
                            <h5>{data41}</h5>
                        </Card>
                    </Col>
                    <Col sm={12} xl={4} md={4}>
                        <Card className='category-card' style={{textAlign:"center"}}>
                            <h3>{area51}</h3>
                            <img src="https://i.pinimg.com/originals/ba/43/14/ba4314acf8cec67242cb1cc2794b31df.jpg" style={{width:"50%",height:"50%",marginLeft:"25%"}}/>
                            <h5>{data51}</h5>
                        </Card>
                    </Col>
                     <Col sm={12} xl={4} md={4}>
                        <Card className='category-card' style={{textAlign:"center"}}>
                            <h3>{area61}</h3>
                            <img src="https://i.pinimg.com/originals/ba/43/14/ba4314acf8cec67242cb1cc2794b31df.jpg" style={{width:"50%",height:"50%",marginLeft:"25%"}}/>
                            <h5>{data61}</h5>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
             </Container>
         </div>
    )


}
export default Water;