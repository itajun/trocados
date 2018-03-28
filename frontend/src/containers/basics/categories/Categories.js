import React from 'react';
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import { lazyFetchCategories } from '../../../store/basics/actions';
import { CircularProgress } from 'material-ui';
import { allCategories, incomeTree, expenseTree } from '../../../store/basics/selectors';
import CategoryTree from './CategoryTree';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';

class Categories extends React.Component {
    componentWillMount() {
        this.setState({ loaded: false });
    }

    componentDidMount() {
        if (!this.state.loaded) {
            this.props.lazyFetchCategories();
            this.setState({ loaded: true });
        }
    }

    render() {
        if (!this.props.loaded) {
            return <CircularProgress style={{ marginLeft: "50%", marginTop: "20%" }} />
        }

        const { classes, incomeTree, expenseTree } = this.props;

        return (
            <Grid container className={classes.container}>
                <Grid item sm={6}>
                    <Paper><CategoryTree title="Income" categories={incomeTree} /></Paper>
                </Grid>
                <Grid item sm={6}>
                    <Paper><CategoryTree title="Expenses" categories={expenseTree} /></Paper>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        incomeTree: incomeTree(state),
        expenseTree: expenseTree(state),
        loaded: allCategories(state) != null
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        lazyFetchCategories: payload => dispatch(lazyFetchCategories()),
    }
};

const styles = theme => ({
    container: {
        padding: theme.spacing.unit * 2
    }
});

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories))
