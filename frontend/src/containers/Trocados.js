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
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux'
import { allErrors } from '../store/system/selectors';
import { setErrors } from '../store/system/actions';
import { findErrorMessage } from '../lib/utils';

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

class Trocados extends Component {
    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
    }

    handleMenuToggle = () => this.setState({ menuOpen: !this.state.menuOpen });

    handleMenuClose = () => this.setState({ menuOpen: false });

    render() {
        const { errors } = this.props;

        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={errors.length > 0}
                    onClose={this.props.clearErrors}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={(
                        <ul id="message-id">
                            {errors.map(e => <li key={e.id}>{findErrorMessage(e.response)}</li>)}
                        </ul>
                    )}
                />

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

const mapStateToProps = (state, ownProps) => {
    return {
        errors: allErrors(state)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clearErrors: () => dispatch(setErrors([]))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trocados)