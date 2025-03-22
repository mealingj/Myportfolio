import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <Content>
        <p>
          Hi, I'm Jaylen! I'm a passionate developer who loves building
          meaningful applications. I have experience with various technologies
          including React, JavaScript, Java, and more. I'm always looking to
          learn and grow!
        </p>
      </Content>
    </Section>
  );
};

export default About;

const Section = styled.section`
  padding: 60px 20px;
  background-color: #f2f2f2;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
`;