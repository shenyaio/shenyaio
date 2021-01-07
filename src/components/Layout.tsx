import * as React from "react";
import Head from "next/head";

import styles from "styles/Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>深雅·SHENYA</title>
      </Head>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>© 2020 深雅·SHENYA</footer>
    </>
  );
};

export default Layout;
