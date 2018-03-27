import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from 'material-ui/Grid';

class CategoriesList extends React.Component {
    render() {
        return (
            <Grid container>
                <Grid item>A</Grid>
                <Grid item>B</Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // return { name: state.name };
    return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // submitForm: payload => dispatch(actionCreatorPostName(payload)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesList)
