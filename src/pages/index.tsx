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
          <a href="/api/auth/login">Login</a>
        </div>
        <div>
          <a href="/api/auth/logout">Logout</a>
        </div>
      </main>
    </>
  );
}
