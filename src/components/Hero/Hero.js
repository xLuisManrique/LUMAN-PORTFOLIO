import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          LUMAN Portfolio Website!
        </SectionTitle>
        <SectionText>
        Luman is a Junior Developer Full Stack! with solid knowledge in creating web applications, both BackEnd and FrontEnd client.
        My passion for development begins in the year 2023 acquiring skills in Python, JAVA, Pyhton, Javascript, TypeScript, 
        Angular, PHP, Laravel, Symfony, NodeJS, MongoDB, SQL, and many others. tools that you can find in my github repository.
        This allows Luis to have a complete profile, with the best coding practices.
        </SectionText>
        <Button onClick={() => window.location = 'https://github.com/xLuisManrique'}>Repository</Button>
        <Button onClick={() => window.location = 'https://drive.google.com/file/d/1aGo6RzWXyQHOUmRoHs4zFAi-orGxM4P1/view?usp=drive_link'}>CV</Button>   
      </LeftSection>
    </Section>
  </>
);

export default Hero;
