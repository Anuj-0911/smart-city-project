import { React, useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Container,Row,Col,Card } from "react-bootstrap";

const Info=(props)=>{
    const area = props.match.params.area;
    const [data1, setData1] = useState("Adequate gas supply");
    const [data2, setData2] = useState("There will be no power cut in your area today :)");
    const [data3, setData3] = useState("Water is available 24*7");
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
            <h1>Utilities in {area}</h1>
            <h2>Today's Status</h2>
            <Container style={{marginTop:"6rem"}}>
                <Row>
                    <Col sm={12} xl={4} md={4}>
                        <Card className='category-card' style={{textAlign:"center"}}>
                            <h3>Electricity</h3>
                            <img src="https://cdn3.iconfinder.com/data/icons/energy-53/100/power_energy-07-512.png" style={{width:"50%",height:"50%",marginLeft:"25%"}}/>
                            <h5>{data2}</h5>
                        </Card>
                    </Col>
                    <Col sm={12} xl={4} md={4}>
                         <Card className='category-card'>
                         <h3>Gas</h3>
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-X6wnhy6ET6W-4HcNKL_WlTwo3giS2xN8tw&usqp=CAU" style={{width:"50%",height:"50%",marginLeft:"25%"}}/>
                         <h5>{data1}</h5>
                        </Card>
                    </Col>
                    <Col sm={12} xl={4} md={4}>
                         <Card className='category-card'>
                         <h3>Water</h3>
                         <img src="https://i.pinimg.com/originals/ba/43/14/ba4314acf8cec67242cb1cc2794b31df.jpg" style={{width:"50%",height:"50%",marginLeft:"25%"}}/>
                            <h5>{data3}</h5>
                        </Card>
                    </Col>
                </Row>
            </Container>
         </div>
    )
}
export default Info;