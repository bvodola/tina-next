import React from "react";
import { TinaProvider, TinaCMS } from "tinacms";

const cms = new TinaCMS({ enabled: true, toolbar: true });

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default App;
