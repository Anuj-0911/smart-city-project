import React, { Component } from "react";
import {Carousel, Container,Card,Row,Col} from 'react-bootstrap';
export default class About extends Component {
  render() {
    return (
      <div>
        <h1>OUR VISION</h1>
        <h5>Unavailability of utilities is an ever present issue that many households have to contend with. Availability of water, electricity, gas cylinder, sewage lines, public toilets etc. is not super reliable in many areas and is a persistent cause of worry for residents.
For this concern, we propose a smart city solution for utilities. The data regarding schedule and availability of the various tracked utilities like electricity, water supply etc. will be collected and residents of a city will be notified of the relevant information. As an example, If a shortage of water has been reported, she will be notified to remember to fill up and store water that day. If many power cuts have reported, the resident will be notified accordingly.
We have chosen four important utilities that will be tracked in this project, namely Electricity, Water, Garbage collection and LPG cylinder availability. Residents will be notified if there is relevant information about these utilities that they need to be aware of. More utilities may be added as per the requirements of a particular city.
</h5>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" style={{width:"100%",height:"600px"}} src="https://www.arcweb.com/sites/default/files/Images/hero-images/smart-city-1200px.gif" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" style={{width:"100%",height:"600px"}} src="https://cdn.majorel.com/wp-content/uploads/2019/05/01135459/smartcityatlas.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-85 aboutimg" alt="" style={{width:"100%",height:"600px"}} src="https://etimg.etb2bimg.com/photo/74589972.cms" />
          </Carousel.Item>
        </Carousel>
        <h3>Basic utilities</h3>
        <Container style={{maxWidth:"100%"}}>
          <Row>
              <Col xl={4} sm={12} md={4} style={{marginBottom:"3rem"}}>
                <Card className="category-card" style={{height:"15rem"}}>
                    <h3>
                      Electricity
                    </h3>
                </Card>
              </Col>
              <Col xl={4} sm={12} md={4} style={{marginBottom:"3rem"}}>
              <Card className="category-card" style={{height:"15rem"}}>
                    <h3>
                      Water
                    </h3>
                </Card>
              </Col>
              <Col xl={4} sm={12} md={4} style={{marginBottom:"3rem"}}>
              <Card className="category-card" style={{height:"15rem"}}>
                    <h3>
                      Gas
                    </h3>
                </Card>
              </Col>
          </Row>
          <Row>
              <Col xl={4} sm={12} md={4} style={{marginBottom:"3rem"}}>
              <Card className="category-card" style={{height:"15rem"}}>
                    <h3>
                      Garbage Collection
                    </h3>
                </Card>
              </Col>
              <Col xl={4} sm={12} md={4} style={{marginBottom:"3rem"}}>
              <Card className="category-card" style={{height:"15rem"}}>
                    <h3>
                      Sewage system
                    </h3>
                </Card>
              </Col>
              <Col xl={4} sm={12} md={4} style={{marginBottom:"3rem"}}>
              <Card className="category-card" style={{height:"15rem"}}>
                    <h3>
                      Traffic conditions
                    </h3>
                </Card>
              </Col>

          </Row>
        </Container>
      </div>
    );
  }
}