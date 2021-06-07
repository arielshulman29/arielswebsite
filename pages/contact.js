import React,{ useState, useEffect }  from 'react'
import * as contactStyles from './contact.module.scss'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { send } from 'emailjs-com';
import Aos from "aos";
import "aos/dist/aos.css";

const Wrapper = styled.div` 
  svg  {
    width: 100%;
    polyline {
      stroke-width: none;
      fill: #e2e2ff;
    }
  }
`;
const Contact = () => {
  useEffect(() => {
      Aos.init({});
  });
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [isSubmit, setIsSubmit] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    send(
      'service_ebxwcv8',
      'template_00wf75q',
      toSend,
      'user_7XlwOawAKlBmI4KXJSCnx'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className={contactStyles.background} id="contact">
      <Wrapper>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox={`0 0 100 10`}
          preserveAspectRatio='xMaxYMin'
        >

          <polyline points="0,0 100,0 50,2 0,0" />
        </svg>
        <Container fluid>
          <h1 data-aos="fade-left" data-aos-delay="100">CONTACT</h1>
          <span data-aos="fade-left" data-aos-delay="100" className={contactStyles.smallText}>Feel free to leave your details if you want to know more!</span>
          <Row className="justify-content-center mt-auto mb-auto">
            <Col xs={10} md={4}>
              {!isSubmit ? (
                <form onSubmit={onSubmit}>
                  <input data-aos="fade-left" data-aos-delay="200" className={contactStyles.formField} type="text" name="from_name" placeholder="Name" value={toSend.to_name} onChange={handleChange} />
                  <input data-aos="fade-right" data-aos-delay="300" className={contactStyles.formField} type="text" name="from_email" placeholder="Email" value={toSend.from_email} onChange={handleChange} />
                  <textarea data-aos="fade-left" data-aos-delay="400" className={contactStyles.formField} type="textarea" rows={3} name="message" placeholder="message" value={toSend.message} onChange={handleChange} />
                  <button className={contactStyles.buttonCustom} type="submit">SUBMIT</button>
                </form>) :
                (<span className={contactStyles.thankYou}>Thank you for your interest I will get back to you shorty!</span>)}
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </section>)
}

export default Contact;