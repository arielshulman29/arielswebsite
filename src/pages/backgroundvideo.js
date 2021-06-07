import React from 'react'
import Water from '../components/video/water.mp4'
import * as bgVideoStyles from './backgroundvideo.module.scss'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  fontFamily: "'Montserrat', sans-serif";
  border: 1px solid #fff;
  display:block;
  font-size: 20px;
  margin-left:auto;
  margin-top: 25px;
  :hover
  {
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      box-shadow: inset 0 0 5rem rgba(255, 255, 255, 0.4);
  }
  .active{
    text-decoration: none;
    color: #fff;
  }
  }
`;

const BackgroundVideo = () =>
  <section className={bgVideoStyles.background} id='backgroundvideo'>
    <video
      autoPlay
      loop
      muted
      className={bgVideoStyles.bgVideo}>
      <source src={Water} type="video/mp4" />
    </video>
    <div className={bgVideoStyles.flex}>
      <div className={bgVideoStyles.text}>
        <>I'm <span className={bgVideoStyles.name}>Ariel Shulman</span>.
          <br />
            I'm a Full-Stack web developer </>
        <br />
        <StyledLink to="myworks"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
          Check out my works <i className="fa fa-angle-right icon"></i>
</StyledLink>
      </div>
    </div>
  </section>
export default BackgroundVideo;
