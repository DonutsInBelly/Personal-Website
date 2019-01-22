import React from "react";
import { Link } from "gatsby";
import { Menu, Icon, Image } from "semantic-ui-react";

const Navbar = class extends React.Component {
  componentDidMount() {
    this.state = {};
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.setState;
    return (
      <Menu fixed="top">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Link to="/" style={{ color: "inherit" }}>
            <Icon name="home" />
          </Link>
        </Menu.Item>
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        >
          <Link to="/about" style={{ color: "inherit" }}>
            About Me
          </Link>
        </Menu.Item>
        <Menu.Item position="right">
          <a
            href="https://github.com/dominusbelli"
            target="_blank"
            style={{ color: "inherit" }}
          >
            <Icon name="github" />
          </a>
        </Menu.Item>
      </Menu>
    );
  }
};

export default Navbar;
