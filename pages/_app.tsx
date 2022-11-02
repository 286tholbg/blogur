import React, { useEffect, useState } from 'react';
import { Layout } from '../components';

import '../styles/globals.scss'
import 'tailwindcss/tailwind.css';

// import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
