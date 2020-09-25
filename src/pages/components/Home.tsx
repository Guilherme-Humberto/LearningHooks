import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import {
     Container
} from '../../styles/pages/Home';

const Components: React.FC = () => {
  return (
      <Container>
          <h1>Next.JS + TypeScript + Styled-Components</h1>
          <p>O Next.js oferece a melhor experiência de desenvolvedor com todos os recursos necessários para a produção: estática híbrida e renderização de servidor, suporte ao TypeScript, agrupamento inteligente, pré-busca de rotas e muito mais. Não é necessário config.</p>
            <a href="https://nextjs.org/docs/getting-started">
              <button>Documentação <FiArrowRight /></button>
            </a>
      </Container>
  );
}

export default Components;