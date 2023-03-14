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
          Passionné de développement web depuis plusieurs
          années, Je suis un développeur web motivé et
          autodidacte qui aime résoudre des problèmes. Je
          fusionne une passion pour la convivialité et l'expérience
          utilisateur avec des connaissances techniques pour créer
          des expériences numériques unique.
        </SectionText>
        <Button onClick={props.handleClick}>Voir plus</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;