import React from "react";
import { TinaProvider, TinaCMS } from "tinacms";
import "../styles/globals.css";

const cms = new TinaCMS({ enabled: true, sidebar: true });

const App = (props) => {
  const { Component, pageProps } = props;

  // Wrap the TinaProvider around all page components
  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default App;
