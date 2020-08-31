import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-scroll'; Nacho errores 31/08/2020
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, subtitle } = hero; /* cta Nacho errores 31/08/2020 */

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  console.log('remdering header');

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          ssrFadeout
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title">
            {title || 'Hi, my name is'} <span className="text-color-main">Nacho</span>
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          {/* <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to = title smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p> */}
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
