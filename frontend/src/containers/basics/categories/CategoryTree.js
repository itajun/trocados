import React from 'react';
import List, {
    ListSubheader, ListItem, ListItemIcon,
    ListItemSecondaryAction,
    ListItemText
} from 'material-ui/List';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import green from 'material-ui/colors/green';

const CategoryTree = (props) => {
    const { classes, categories, title } = props;

    return (
        <List
            subheader={<ListSubheader component="div">
                {title}
                <ListItemSecondaryAction>
                    <Button variant="fab" color="primary" aria-label="add" mini>
                        <AddIcon />
                    </Button>
                </ListItemSecondaryAction>
            </ListSubheader>}
        >
            {Object.keys(categories).map(firstLevelKey => (
                <div key={firstLevelKey}>
                    <ListItem
                        role={undefined}
                        button
                        dense
                    >
                        <ListItemText primary={categories[firstLevelKey].name} />
                        <ListItemSecondaryAction>
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <List component="div" style={{ paddingLeft: 8 }}>
                        {categories[firstLevelKey].children.map(child => (
                            <ListItem
                                key={child.id}
                                role={undefined}
                                button
                                dense
                            >
                                <ListItemText primary={child.name} />
                                <ListItemSecondaryAction >
                                    <IconButton>
                                        <DeleteIcon color={green} />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            ))}
        </List>
    );
}

const styles = theme => ({

});

export default withStyles(styles)(CategoryTree);