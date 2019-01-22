import React from "react";
import Helmet from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import { Grid } from "semantic-ui-react";

import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
          />
        </Helmet>
        <Grid padded centered>
          <Grid.Row>
            <Navbar />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column />
            <Grid.Column textAlign="left">
              <div style={{ paddingTop: "50px" }}>{children}</div>
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </div>
    )}
  />
);

export default TemplateWrapper;
