import React from "react";
import { Link } from "gatsby";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const Navbar = class extends React.Component {
  componentDidMount() {
    this.state = {};
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.setState;
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Link to="/">
            <Button color="inherit">Carlin</Button>
          </Link>
          <Link to="/about">
            <Button color="inherit">About Me</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
};

export default Navbar;
