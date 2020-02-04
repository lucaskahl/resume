import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import GlobalStyle from '../styles/global';

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <SEO title="Home" />
    <h1>Home</h1>
  </Layout>
);

export default IndexPage;
