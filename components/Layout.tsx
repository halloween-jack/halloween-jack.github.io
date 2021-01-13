import Head from "next/head";
import styles from "./Layout.module.css";
import Link from "next/link";
import Nav from "./Nav";
import NavItem from "./NavItem";

const name = "halloween-jack";
const avaterURL = `https://github.com/${name}.png`;
export const siteTitle = `${name}'s blog`;

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Nav>
        <NavItem href="/" isActive>
          Home
        </NavItem>
        <NavItem href="/about" isActive>
          About
        </NavItem>
      </Nav>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={siteTitle} />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=${avaterURL}`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
