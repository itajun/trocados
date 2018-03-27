import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import { TextField } from 'material-ui';

function actionCreatorPostName(name) {
    return dispatch => {
        dispatch({type: "POST_NAME"});
        setTimeout(() => {
            dispatch(actionCreatorPostSuccess("Hi " + name));
          }, 1000);
    }
}

function actionCreatorPostSuccess(newName) {
    return {
        type: "POST_NAME_SUCCESS",
        payload: newName
    }
}

class NewCategory extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    handleFormChange = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitForm(this.state.name);
    }

    render() {
        

        return (
            <form onSubmit={this.handleSubmit}>
                <p>{ this.props.name == null ? "unknown" : "[" + this.props.name + "]" }</p>
                <TextField hintText="Hint Text" name="name" onChange={this.handleFormChange} /><br />
                <Button variant="raised" type="submit" color="primary">Send</Button>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
        return {name: state.name};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitForm : payload => dispatch(actionCreatorPostName(payload)),
    }
};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewCategory)
  