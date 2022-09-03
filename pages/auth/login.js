// login.js

// A login page component

// Modules:

import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Code:

function LoginPage({ providers })
{
  const { data: session } = useSession();
  const router = useRouter();

  // Component Hooks

  useEffect(function() {
    if (session) {
      router.push("/");
    }
  }, [session]);

  // Component Render

  return (
    <div className="bg-cyan-900 flex flex-col w-screen h-screen items-center justify-center space-y-8">
      <Head>
        <title>Login - Blast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image 
        src="/logo.jpeg" 
        width={150} 
        height={150} 
        objectFit="contain"
        className="animate-pulse" />

      {Object.values(providers).map((provider) => (
        <div key={ provider.id }>
          <button 
            className="bg-neutral-400 hover:bg-white text-cyan-900 font-bold py-2 px-4 rounded-full"
            onClick={() => { signIn(provider.id) }}>
              Blast in!
          </button>
        </div>
      ))}
      
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default LoginPage;

// login.js ends here