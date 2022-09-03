// _app.js

// Modules:

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

import "../styles/globals.css";

// Code:

function MyApp({ Component, pageProps: { session, ...pageProps } }) 
{
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;

// _app.js ends here