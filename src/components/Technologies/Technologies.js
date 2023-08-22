import React from 'react';
import { DiAngularSimple, DiFirebase, DiJava, DiPython, DiReact, DiSprings, DiUnitySmall, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've Learn with a range a technologies in the web development world.
      From Back-end To Design to make me Full Stack.
    </SectionText>
    <List>

      

      <ListItem>
      <picture>
          <DiAngularSimple size="3rem" /> <pitcture> <DiReact size="3rem" /> </pitcture>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            JavaScript | Angular and React
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="3rem" /> <pitcture> <DiJava size="3rem" /> </picture> <pitcture> <DiPhp size="3rem" /> </picture>
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP, Laravel, Symfony | Java, SpringBoot | Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
      <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with <br />
            Data scientist and Machine Learning
          </ListParagraph>
        </ListContainer>
      </ListItem>

     


    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
