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
  height: auto;
  padding-top: var(--nav-height);

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

  const one = <h1>Hi, I'm</h1>;
  const two = <h2 className="big-heading">Bill Merickel.</h2>;
  const three = (
    <h2>
      I build native iOS apps with Swift and SwiftUI—from AT&amp;T&apos;s Atlas technician app in the field to CNN in millions of
      pockets worldwide. I prioritize efforts towards improving performance, modernization with current Apple frameworks, accessibility,
      and the quality work that keeps a large app maintainable.
    </h2>
  );
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
              I like taking a problem from rough idea to something users can tap on—then I&apos;ll stick around for the follow-through:
              performance metrics, crash monitoring, code review, and the refactors that make the next feature easier. That mix of
              product-facing UI and underlying engineering is what pulled me into iOS, and the elegance of Apple&apos;s engineering
              ecosystem is still what I enjoy the most in my developer career.
            </p>
            <p>
              I graduated with a Bachelor of Science in Computer Science from the{' '}
              <a href="https://www.cc.gatech.edu/">Georgia Institute of Technology</a> in May 2024. I worked as an iOS software engineer at{' '}
              <a href="https://www.att.com/">AT&amp;T</a> from July 2024 through December 2025, and I now build the{' '}
              <a href="https://www.cnn.com/">CNN</a> iOS app with a focus on performance optimization. With a strong academic background,
              diverse software engineering experience, and a passion for shipping reliable, high-performance apps, I specialize in iOS
              development, intelligence, and systems architecture.
            </p>
            <p>
            I have built games and apps for web and mobile. I have also gained valuable front-end and back-end experience interning as a software engineer at {' '}
              <a href="https://www.ncr.com/">a global retail POS software provider</a> and {' '}
              <a href="https://www.bpsecurity.net/">a cybersecurity consulting agency</a>.
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
