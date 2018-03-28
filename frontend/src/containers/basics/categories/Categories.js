import React from 'react';
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import { lazyFetchCategories, lazyRemoveAndUpdateCategories, lazyAddAndUpdateCategories } from '../../../store/basics/actions';
import { CircularProgress } from 'material-ui';
import { allCategories, incomeTree, expenseTree } from '../../../store/basics/selectors';
import CategoryTree from './CategoryTree';
import EditCategory from './EditCategory';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

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

    handleDisplayAddCategory = (type) => (parent) => {
        this.setState({ 
            editableCategory: {
                parent: parent, 
                type: type
            }
         });
    }

    handleCancelAddCategory = () => {
        this.setState({ editableCategory: null });
    }

    handleConfirmAddCategory = category => {
        this.props.lazyAddAndUpdateCategories(category)
        this.setState({ editableCategory: null });
    }

    render() {
        const { classes, incomeTree, expenseTree, lazyRemoveAndUpdateCategories } = this.props;

        let result = <CircularProgress style={{ marginLeft: "50%", marginTop: "20%" }} />

        if (this.state.editableCategory != null) {
            result = <EditCategory onCancel={this.handleCancelAddCategory} onConfirm={this.handleConfirmAddCategory} category={this.state.editableCategory} />
        } else if (this.props.loaded) {
            result = <Grid container className={classes.container}>
                <Grid item sm={6}>
                    <Paper><CategoryTree title="Income" categories={incomeTree} onRemoveClick={lazyRemoveAndUpdateCategories} onAddClick={this.handleDisplayAddCategory("income")} /></Paper>
                </Grid>
                <Grid item sm={6}>
                    <Paper><CategoryTree title="Expenses" categories={expenseTree} onRemoveClick={lazyRemoveAndUpdateCategories} onAddClick={this.handleDisplayAddCategory("expense")} /></Paper>
                </Grid>
            </Grid>
        }

        return result;
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
        lazyRemoveAndUpdateCategories: payload => dispatch(lazyRemoveAndUpdateCategories(payload)),
        lazyAddAndUpdateCategories: payload => dispatch(lazyAddAndUpdateCategories(payload)),
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
