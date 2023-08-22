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
          <DiAngularSimple size="3rem" />
        </picture>
      <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Angular and React
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            SpringBoot
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

      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>JAVA</ListTitle>
          <ListParagraph>
            Experience with <br />
            JAVA and Jakarta EE
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiUnitySmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Unity Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            JUnit5 and Mockito
          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
