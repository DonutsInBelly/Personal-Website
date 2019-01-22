import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Grid, Header, Item, Responsive, Segment } from "semantic-ui-react";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <Responsive>
          <Header as="h1">Latest Posts</Header>
        </Responsive>

        {posts.map(({ node: post }) => (
          <Responsive>
            <Segment basic>
              <Item>
                <Item.Content>
                  <Item.Header>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </Item.Header>
                  <Item.Meta>{post.frontmatter.date}</Item.Meta>
                  <Item.Description>{post.excerpt}</Item.Description>
                  <Item.Extra>
                    <Link to={post.fields.slug}>Keep Reading →</Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Segment>
          </Responsive>
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
