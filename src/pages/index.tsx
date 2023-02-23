import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>JulianneFurnishings</title>
        <meta
          name="description"
          content="A demo website based on a furniture shop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <main>
        <div>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/auth/login">Login</a>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/auth/logout">Logout</a>
        </div>
      </main>
    </>
  );
}
