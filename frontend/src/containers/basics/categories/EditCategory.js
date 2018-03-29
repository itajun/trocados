import React from 'react';
import Button from 'material-ui/Button';
import { TextField } from 'material-ui';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import { selectText } from '../../../lib/utils'
import { validate, required } from '../../../lib/validators';

class EditCategory extends React.Component {
    constructor(props) {
        super(props);

        this.onCancel = props.onCancel;
        this.onConfirm = props.onConfirm;

        this.state = {
            category: props.category,
            validationContext: {
                fields: {
                    name: {
                        message: "Name is mandatory",
                        rules: [
                            required
                        ]
                    }
                },
                errors: {}
            }
        };
    }

    handleFormChange = (event) => {
        let newCategory = Object.assign({}, this.state.category);
        newCategory[event.target.name] = event.target.value;
        this.setState({ category: newCategory })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate(this.state.validationContext, this.state.category);
        if (Object.keys(errors).length > 0) {
            this.setState({
                validationContext: {
                    ...this.state.validationContext,
                    errors: errors
                }
            })
        } else {
            this.onConfirm(this.state.category);
        }
    }

    render() {
        const errors = this.state.validationContext.errors;

        return (
            <Dialog
                open={true}
                onClose={this.onCancel}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">New Category</DialogTitle>
                <DialogContent>
                    <DialogContentText>Insert the new category name</DialogContentText>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            name="name"
                            required
                            error={errors.name != null}
                            helperText={errors.name}
                            defaultValue={this.state.category.name}
                            onChange={this.handleFormChange}
                            onFocus={selectText}
                            fullWidth
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleSubmit} color="primary">
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
