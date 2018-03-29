import React from 'react';
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import { asyncFetchCategories, asyncRemoveCategory, asyncAddCategory, asyncUpdateCategory } from '../../../store/basics/actions';
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
            this.props.asyncFetchCategories();
            this.setState({ loaded: true });
        }
    }

    handleAddCategory = (type) => (parent) => {
        this.setState({ 
            editableCategory: {
                parent: parent, 
                type: type
            }
         });
    }

    handleEditCategory = (category) => {
        this.setState({ editableCategory: category });
    }

    handleCancelPopup = () => {
        this.setState({ editableCategory: null });
    }

    handleConfirmPopup = category => {
        this.props.asyncAddCategory(category)
        this.setState({ editableCategory: null });
    }

    render() {
        const { classes, incomeTree, expenseTree, asyncRemoveCategory } = this.props;

        let result = <CircularProgress style={{ marginLeft: "50%", marginTop: "20%" }} />

        if (this.state.editableCategory != null) {
            result = <EditCategory onCancel={this.handleCancelPopup} onConfirm={this.handleConfirmPopup} category={this.state.editableCategory} />
        } else if (this.props.loaded) {
            result = <Grid container className={classes.container}>
                <Grid item sm={6}>
                    <Paper><CategoryTree title="Income" categories={incomeTree} onRemoveClick={asyncRemoveCategory} onAddClick={this.handleAddCategory("INCOME")} onEditClick={this.handleEditCategory} /></Paper>
                </Grid>
                <Grid item sm={6}>
                    <Paper><CategoryTree title="Expenses" categories={expenseTree} onRemoveClick={asyncRemoveCategory} onAddClick={this.handleAddCategory("EXPENSE")} onEditClick={this.handleEditCategory} /></Paper>
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
        asyncFetchCategories: payload => dispatch(asyncFetchCategories()),
        asyncRemoveCategory: payload => dispatch(asyncRemoveCategory(payload)),
        asyncAddCategory: payload => dispatch(asyncAddCategory(payload)),
        asyncUpdateCategory: payload => dispatch(asyncUpdateCategory(payload)),
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
