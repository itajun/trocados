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

const CategoryTree = (props) => {
    const { classes, categories, title } = props;

    return (
        <List
            disablePadding
            className={classes.outer}
            subheader={<ListSubheader component="div">
                {title}
                <ListItemSecondaryAction>
                    <Button color="primary" aria-label="Add category" className={classes.topButton}>
                        New category
                        <AddIcon className={classes.topButtonIcon} />
                    </Button>
                </ListItemSecondaryAction>
            </ListSubheader>}
        >
            {Object.keys(categories).map(firstLevelKey => (
                <div key={firstLevelKey}>
                    <ListItem
                        role={undefined}
                        className={classes.parentItem}
                        button
                        dense
                    >
                        <ListItemText primary={categories[firstLevelKey].name} />
                        <ListItemSecondaryAction>
                            <IconButton color="primary" aria-label="Add" className={classes.itemButton} >
                                <AddIcon className={classes.itemButtonIcon} />
                            </IconButton>
                            <IconButton color="secondary" aria-label="Remove" className={classes.itemButton}>
                                <DeleteIcon className={classes.itemButtonIcon} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <List component="div" disablePadding className={classes.subItemContainer}>
                        {categories[firstLevelKey].children.map(child => (
                            <ListItem
                                key={child.id}
                                role={undefined}
                                className={classes.subItem}
                                button
                                dense
                            >
                                <ListItemText primary={child.name} />
                                <ListItemSecondaryAction >
                                    <IconButton color="secondary" className={classes.itemButton} aria-label="Remove">
                                        <DeleteIcon className={classes.itemButtonIcon} />
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
    itemButtonIcon: {
        fontSize: "medium",
    },
    itemButton: {
        width: 20,
        marginLeft: 4
    },
    topButton: {
        paddingRight: 0
    },
    topButtonIcon: {
        marginLeft: theme.spacing.unit
    },
    parentItem: {
        paddingTop: 4,
        paddingBottom: 2
    },
    subItemContainer: {
        paddingLeft: 4,
    },
    subItem: {
        paddingTop: 0,
        paddingBottom: 0,
    }
});

export default withStyles(styles)(CategoryTree);