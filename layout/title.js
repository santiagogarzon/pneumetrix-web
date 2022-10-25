import React from "react";
import Head from "next/head";

export default function Title({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
