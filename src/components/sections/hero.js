import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 1000px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Bill Merickel.</h2>;
  const three = <h2>I am driven by a fascination for advancing human-machine interactions and solving complex real-world challenges.</h2>;
  const skills = ['React + Node.js', 'Python', 'Flutter + Dart', 'Java', 'Unity + C#', 'C'];
  const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
  const four = (
    <>
      <div className="inner">
        <StyledText>
          <div>
            <p>
            As a software engineer, I want to pioneer groundbreaking AI technologies that transform industries and improve lives. I am also eager to design and optimize scalable, efficient, and reliable applications by grasping the foundations of computing and its various systems.
            </p>
            <p>
            I am set to graduate with a computer science degree from {' '}
              <a href="https://www.cc.gatech.edu/">Georgia Institute of Technology</a> in May 2024. With a strong academic background, diverse software engineering internships, and a passion for developing innovative solutions, I am seeking a full-time position to leverage my expertise in intelligence and systems architecture and contribute to cutting-edge projects.
            </p>
            <p>
            I have built games and apps for web and mobile. I have also gained valuable front-end and back-end experience interning as a software engineer at {' '}
              <a href="https://www.bpsecurity.net/">a cybersecurity consulting agency</a>, {' '}
              <a href="https://www.ncr.com/">a global retail POS software provider</a>, and {' '}
              <a href="https://www.att.com/">the world's leading telecommunications company</a>. 
            </p>
          </div>
        </StyledText>
      </div>
    </>
  );
  function handleScroll() {
    window.scroll({
      top: window.innerHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  const five = (
    <a
      onMouseEnter={() => document.body.style.cursor = 'pointer'}
      onMouseLeave={() => document.body.style.cursor = 'auto'}
      type="button"
      onClick={handleScroll}
      className="email-link"
      target="_blank"
      rel="noreferrer">
      Learn more about me!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
