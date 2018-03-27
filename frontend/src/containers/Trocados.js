import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import NewCategory from './basics/categories/NewCategory';

const Menu = withRouter((props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><NavigationExpandMore /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        <MenuItem
            primaryText="Basics"
            rightIcon={<ArrowDropRight />}
            menuItems={[
                <MenuItem primaryText="Categories" onClick={() => props.history.push('/categories')} />
            ]} />
        <MenuItem primaryText="Sign out" containerElement={<Link to="/logout" />} />
    </IconMenu>
));

export default class Trocados extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Trocados"
                    iconElementLeft={<Menu />} />
                <Switch>
                    <Route exact path="/categories" component={NewCategory} />
                </Switch>
            </div>
        );
    }
};