// O que é um Hook? Um Hook é uma função especial que te permite utilizar recursos do React.

import { fontsize } from '*.jpg';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { Container } from '../styles/pages/Home'


const themes = {
  light: {
    textcolor: "#000000",
    background: "#eeeeee"
  },
  dark: {
    textcolor: "#ffffff",
    background: "#222222"
  }
};

// O contexto fornece uma maneira de compartilhar valores entre...
// Componentes sem ter que passar explicitamente um adereço por todos os níveis da árvore.
const ThemeContext = createContext(themes.light);

interface Props {
  themeChange: any
}

const Component: React.FC<Props> = ({ themeChange }) => {
  const theme = useContext(ThemeContext)
  // Com o useState é possível criar estados para os componentes e guardar informações
  // Ao se alterar o estado de um componente ele é novamente carregado
  const [state, setState] = useState("LearningHooks")

  const [listState, setListState] = useState([
    {name: "Guilherme", surname: "Humberto"},
    {name: "Mathues", surname: "Pereira"}
  ])

  function AddElementsOnListState() {
    setListState([
      {name: "Paulo", surname: "Martinez"},
      {name: "Augusto", surname: "Abreu"},
      {name: "Jorge", surname: "Melo"},
    ])
  }

  // O useEffect é uma form menos verbosa de se trabalhar com métodos de ciclo de vida
  // Porém é apenas acessível em function components
  useEffect(() => {
    setTimeout(() => {
      setState("Aprendendo React Hooks")
    }, 1000);

    setTimeout(() => {
      setState("LearningHooks")
    }, 2000);
    // Ao passar o listState para [] dentro do useEffect, o título da página sofre alterações
    // O useEffect então irá observar o estado
    // Devido a alteração do estado o componente foi carregado e o useEffect executado
  }, [listState])

  const ThemeDark = () => themeChange(true)
  const ThemeLight = () => themeChange(false)
  
  return (
    <Container style={{ background: theme.background }}>
      <div style={{ display: "flex", gap: 10 }}>
        <button 
          onClick={ThemeLight}
          style={{ 
            background: theme.textcolor, 
            color: theme.background
          }}
        >Claro
        </button>
        <button
          onClick={ThemeDark}
          style={{ 
            background: theme.textcolor, 
            color: theme.background
          }}
        >Escuro
        </button>
      </div>

      <h1 style={{ color: theme.textcolor, margin: 10 }}>
        {state}
      </h1>

      {listState.map((item, index) => (
        <div key={index}>
          <h2 style={{ color: theme.textcolor }}>
            {item.name + " " + item.surname}
          </h2>
        </div>
      ))}
      <button 
        onClick={AddElementsOnListState}
        style={{ 
          background: theme.textcolor, 
          color: theme.background
        }}
      >
        Alterar estado
      </button>
    </Container>
  )
}

const pages: React.FC = () => {
  const [themeTeste, setThemeTeste] = useState(true)

  return (
    <ThemeContext.Provider value={themeTeste ? themes.dark : themes.light}>
      <Component 
        themeChange={setThemeTeste}
      />
    </ThemeContext.Provider>
  );
}

export default pages;