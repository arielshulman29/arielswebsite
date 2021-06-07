import React, { useEffect } from 'react'
import * as aboutStyles from './about.module.scss'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {
    useEffect(() => {
        Aos.init({});
    });
    return (
        <section className={aboutStyles.background} id="about">
            <Container className={aboutStyles.flex} fluid>
                <Row>
                    <Col xs={12} md={6} className={aboutStyles.colFlex}>
                        <Image data-aos="fade-right" src='/profile.jpg' className={aboutStyles.imagesize} roundedCircle />
                    </Col>
                    <Col xs={12} md={6} className={aboutStyles.colFlex}>
                        <h1 className={aboutStyles.header} data-aos="fade-left" data-aos-delay="100" >So,</h1>
                        <h1 className={aboutStyles.header2} data-aos="fade-left" data-aos-delay="200" >a bit about me,</h1>
                        <div data-aos="fade-left" data-aos-delay="300" className={aboutStyles.text}>
                            <>My name is<br />
                            Ariel shulman and I'm a Full Stack-<br />
                            Web developer. I started programming as a<br />
                            teenager and later on did my military service as<br />
                            a programmer as well. At the time when Covid hit I<br />
                            was travelling Australia and New Zealand, In order to<br />
                            support myself I decided to make the transition and I<br />
                            started to freelance. I enjoy being creative, solving<br />
                            problems and learning new tecnologies. I use<br />
                            the most modern tools out there! These days I<br />
                            like to use: NodeJs, ReactJS, ExpressJS,<br />
                            Docker, MongoDB, SQLserver<br /> 
                            and Bootstrap
                        </></div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;