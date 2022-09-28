// index.js

// Modules:

import React, { useEffect } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Code:

function Home()
{
  // Component Hooks

  const router = useRouter();
  const { data: session } = useSession();

  /*const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login");
    },
  });*/

  useEffect(function() {
    if (session) {
      router.push("/search")
    } else {
      router.push("/auth/login")
    }
  }, [session]);

  // Component Render

  return (
    <div>
      <Head>
      <title>Blast</title>
        <link rel="icon" href="/favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap"></link>
      </Head>
    </div>
  );
}

export default Home;

// index.js ends here