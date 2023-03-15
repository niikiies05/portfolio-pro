import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Maximilien KASSI <br />
          Bienvenue sur mon Portfolio personnel
        </SectionTitle>
        <SectionText>
        Je suis un développeur Fullstack passionné par la création de solutions innovantes et élégantes qui transforment les idées en réalité. Avec une expérience solide dans la conception, le développement et la maintenance de logiciels, je suis prêt à relever tous les défis de développement que vous pouvez me lancer.
        </SectionText>
        <Button onClick={props.handleClick}>Voir plus</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;