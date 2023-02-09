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
        <h1 className="text-red-400">Hello world!</h1>
      </main>
    </>
  );
}
