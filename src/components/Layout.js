import React from "react";
import Helmet from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import { Grid, Typography } from "@material-ui/core";

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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Helmet>
        <Grid>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <Grid container alignContent="center" justify="center">
            <Grid item xs={12} md={8} lg={4}>
              <div style={{ paddingTop: "50px" }}>{children}</div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )}
  />
);

export default TemplateWrapper;
