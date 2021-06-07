import React, { useEffect } from 'react'
import * as myworksStyles from './myworks.module.scss'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Aos from "aos";
import "aos/dist/aos.css";

const Myworks = () => {
    useEffect(() => {
        Aos.init({});
    });
    return (
        <div>
            <section className={myworksStyles.background} id="myworks">
                <Container className={myworksStyles.centerContainer} fluid>
                    <Row className={myworksStyles.rowFlex}>
                        <Col className={myworksStyles.colFlex} xs={12} md={6} lg={4}>
                            <Card data-aos="fade-up" style={{ padding: '1.5em', background: 'none', border: '4px solid #ffffff', color: 'white', fontFamily: "'Montserrat', sans-serif", alignItems: 'center', display: 'block', height: '100%'}}>
                                <Card.Img variant="top" src="/responsive-design.png" className={myworksStyles.imagesize} alt="responsiveDesign" />
                                <Card.Body>
                                    <Card.Title>Responsive Design</Card.Title>
                                    <Card.Text>
                                        Esthetic, modern, responsive websites that would look good on any device! Don't settle on designs given to you by a CMS, have your vision come to life!</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className={myworksStyles.colFlex} xs={12} md={6} lg={4}>
                            <Card data-aos="fade-up" style={{ padding: '1.5em', background: 'none', border: '4px solid #ffffff', color: 'white', fontFamily: "'Montserrat', sans-serif", alignItems: 'center', display: 'block', height: '100%' }}>
                                <Card.Img variant="top" src="/speed.png" className={myworksStyles.imagesize} alt="pageSpeed" />
                                <Card.Body>
                                    <Card.Title>Speed</Card.Title>
                                    <Card.Text>
                                        If you're here then you've probably heard of the term SEO. When building a website speed is something you have to take into account. I use technologies that are page-speed oriented.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className={myworksStyles.colFlex} xs={12} md={6} lg={4}>
                            <Card data-aos="fade-up" style={{ padding: '1.5em', background: 'none', border: '4px solid #ffffff', color: 'white', fontFamily: "'Montserrat', sans-serif", alignItems: 'center', display: 'block', height: '100%' }}>
                                <Card.Img variant="top" src="/modern.png" className={myworksStyles.imagesize} alt="modernTech" />
                                <Card.Body>
                                    <Card.Title>Latest News</Card.Title>
                                    <Card.Text>
                                        I only develop with the most modern and popular technologies. Think forward and don't settle for nothing but the latest! ReactJs, NodeJs, Bootstrap...</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </section>
        </div>
    )
};

export default Myworks;