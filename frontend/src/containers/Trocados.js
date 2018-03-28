import React, { Component } from 'react';
import List, { ListItem } from 'material-ui/List';
import { Switch, Route, withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import Categories from './basics/categories/Categories';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const Menu = withRouter((props) => {
    function goto(path) {
        props.history.push(path);
        props.handleClose();
    };

    return (<Drawer
        open={props.open}
        onClose={props.handleClose}
    >
        <List type="nav">
            <ListItem button onClick={() => goto("/categories")}>Categories</ListItem>
        </List>
    </Drawer>);
});

export default class Trocados extends Component {
    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
    }

    handleMenuToggle = () => this.setState({ menuOpen: !this.state.menuOpen });

    handleMenuClose = () => this.setState({ menuOpen: false });

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.handleMenuToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">Trocados</Typography>
                    </Toolbar>
                </AppBar>

                <Menu handleClose={this.handleMenuClose} open={this.state.menuOpen} />

                <Switch>
                    <Route exact path="/categories" component={Categories} />
                </Switch>
            </div>
        );
    }
};