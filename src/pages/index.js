import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from "@material-ui/core";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <Grid>
          <Typography variant="h1">Latest Posts</Typography>
        </Grid>

        {posts.map(({ node: post }) => (
          <Grid>
            <Card>
              <CardHeader>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </CardHeader>
              <CardContent>
                <Typography variant="h6">{post.frontmatter.date}</Typography>
                <Typography paragraph>{post.excerpt}</Typography>
                <Typography>
                  <Link to={post.fields.slug}>Keep Reading →</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
