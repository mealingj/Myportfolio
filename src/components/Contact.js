import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Section id="contact">
      <Title>Contact Me</Title>
      <Content>
        <p>
          Feel free to reach out via email at <strong>jaylen@example.com</strong>
        </p>
      </Content>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  padding: 60px 20px;
  background-color: #2c3e50;
  color: white;
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