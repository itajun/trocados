import React from 'react';
import Button from 'material-ui/Button';
import { TextField } from 'material-ui';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import {selectText} from '../../../lib/utils'

class EditCategory extends React.Component {
    constructor(props) {
        super(props);
        this.onCancel = props.onCancel;
        this.onConfirm = props.onConfirm;
        this.state = { category: props.category };
    }

    handleFormChange = (event) => {
        let newCategory = Object.assign({}, this.state.category);
        newCategory[event.target.name] = event.target.value;
        this.setState({ category: newCategory })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitForm(this.state.name);
    }

    render() {
        return (
            <Dialog
                open={true}
                onClose={this.onCancel}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">New Category</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Insert the new category name
              </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        name="name"
                        defaultValue={this.state.category.name}
                        onChange={this.handleFormChange}
                        onFocus={selectText}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.onConfirm(this.state.category)} color="primary">
                        Confirm
                    </Button>
                    <Button onClick={this.onCancel} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default EditCategory
