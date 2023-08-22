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
          My Portfolio Website!
        </SectionTitle>
        <SectionText>
        I am Luis Manrique, a Developer Full Stack! My passion for development begins in the year 2022
        acquiring skills in Python, JavaScript, PHP and many more tools that you can find in my github
        repository.
        </SectionText>
        <Button onClick={() => window.location = 'https://github.com/xLuisManrique'}>Repository</Button>
        <Button onClick={() => window.location = 'https://drive.google.com/file/d/1XSWJL2QzCGTiEb_srUA0Ti3j__y0-A3E/view?usp=sharing'}>My CV</Button>     
      </LeftSection>
    </Section>
  </>
);

export default Hero;
