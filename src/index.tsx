import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: linear-gradient(129.8deg, #0c0b1e 23.83%, #382a9e 100.44%),
    #0a0b2e;
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
