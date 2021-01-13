import Head from "next/head";
import Layout from "../components/Layout";
import Avater from "../components/Avater";
import utilStyles from "../styles/utils.module.css";

const name = "halloween-jack";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{`about ${name}`}</title>
      </Head>

      <div className="flex flex-col items-center">
        <Avater />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>

        <p>Web Developer</p>
      </div>
    </Layout>
  );
}
