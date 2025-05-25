import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const SkillCategoryContainer = styled.div`
  margin-bottom: 15px;
`;

const CategoryName = styled.h3`
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  background-color: #f4f6f7;
  color: #2c3e50;
  padding: 8px 16px;
  margin: 0 10px 10px 0;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid #dfe6e9;
`;

function Skills() {
  const skillCategories = [
    {
      category: "Technical Skills",
      skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6"]
    },
    {
      category: "Software",
      skills: ["Software 1", "Software 2", "Software 3", "Software 4"]
    },
    {
      category: "Soft Skills",
      skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Skills</SectionTitle>
      {skillCategories.map((skillCategory, index) => (
        <SkillCategoryContainer key={index}>
          <CategoryName>{skillCategory.category}</CategoryName>
          <SkillsList>
            {skillCategory.skills.map((skill, i) => (
              <SkillItem key={i}>{skill}</SkillItem>
            ))}
          </SkillsList>
        </SkillCategoryContainer>
      ))}
    </SectionContainer>
  );
}

export default Skills;