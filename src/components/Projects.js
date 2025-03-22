import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Section id="projects">
      <Title>My Projects</Title>
      <ProjectList>
        {/* Coffee Shop App */}
        <Project>
          <h3>Coffee Shop App</h3>
          <p>
            A full-stack application built to manage coffee orders, users, and
            inventory.
          </p>
        </Project>

        {/* C++ Projects */}
        <Project>
          <h3>Student Grading System</h3>
          <p>A C++ project to grade students based on their scores.</p>
          <a href="https://github.com/mealingj/C-Projects/blob/main/studentGradeSystem.cpp" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </Project>
        <Project>
          <h3>Random Number Game</h3>
          <p>A C++ game that generates random numbers and challenges the user.</p>
          <a href="https://github.com/mealingj/C-Projects/blob/main/randomNum.cpp" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </Project>
        <Project>
          <h3>Text-Based Adventure Game</h3>
          <p>A C++ text-based game where users navigate a fictional world.</p>
          <a href="https://github.com/mealingj/C-Projects/blob/main/textAdventure.cpp" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </Project>

        {/* Instagram Clone */}
        <Project>
          <h3>Instagram Clone</h3>
          <p>A React clone of Instagram with user authentication, posts, and more.</p>
          <a href="https://github.com/mealingj/Instagram-Clone-App-Reatcjs" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </Project>
      </ProjectList>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  padding: 60px 20px;
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
`;

const ProjectList = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Project = styled.div`
  background: #ecf0f1;
  margin: 15px;
  padding: 20px;
  border-radius: 8px;
  width: 45%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
  }
  a {
    font-size: 16px;
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;