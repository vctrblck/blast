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

/* suppose this was a server.js file

const lyricsFinder = require("lyrics-finder")
const bodyParser = require("body-parser")

const app = express(){
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended : true}))
}

app.get("/lyrics", async (req,res) => {
  const lyrics = (await lyricsFinder(req.query.artist,req.query.track)) || "No Lyrics Found"
  res.json({ lyrics })
})

app.listen(3000)

*/

// _app.js ends here