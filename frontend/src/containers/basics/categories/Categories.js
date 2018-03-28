import React from 'react';
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import { lazyFetchCategories } from '../../../store/basics/actions';
import { CircularProgress } from 'material-ui';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';

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
        if (typeof (this.props.categories) === "undefined") {
            return <CircularProgress style={{ marginLeft: "50%", marginTop: "20%" }} />
        }

        // const incomeRows = this.props.categories
        //     .map(item => <p key={item.id}>{item.name}</p>);

        return (
            <Grid container>
                <Grid item sm={6}>
                    <List>
                        {[0, 1, 2, 3].map(value => (
                            <div>
                                <ListItem
                                    dense
                                    key={value}
                                    role={undefined}
                                >
                                    <ListItemText primary={`Line item ${value + 1}`} />
                                </ListItem>
                                <List component="div" style={{paddingLeft: 20}}>
                                    {[0, 1, 2, 3].map(value => (
                                        <ListItem
                                            key={value}
                                            role={undefined}
                                            dense
                                            button
                                        >
                                            <ListItemText primary={`Line itemads ${value + 1}`} />
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        ))}
                    </List>
                </Grid>
                <Grid item sm={6}>B</Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories.all
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        lazyFetchCategories: payload => dispatch(lazyFetchCategories()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories)
