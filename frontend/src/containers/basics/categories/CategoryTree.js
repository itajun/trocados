import React from 'react';
import List, {
    ListSubheader, ListItem,
    ListItemSecondaryAction,
    ListItemText
} from 'material-ui/List';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';

const CategoryTree = (props) => {
    const { classes, categories, title, onRemoveClick, onAddClick, onEditClick } = props;

    return (
        <List
            disablePadding
            className={classes.outer}
            subheader={<ListSubheader component="div">
                {title}
                <ListItemSecondaryAction>
                    <Button color="primary" aria-label="New category" className={classes.topButton} size="small"  onClick={() => onAddClick()} >
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
                        onClick={() => onEditClick(categories[firstLevelKey])}
                        button
                        dense
                    >
                        <ListItemText primary={categories[firstLevelKey].name} />
                        <ListItemSecondaryAction>
                            <IconButton color="primary" aria-label="Add" className={classes.itemButton} onClick={() => onAddClick(firstLevelKey)} >
                                <AddIcon className={classes.itemButtonIcon} />
                            </IconButton>
                            <IconButton color="secondary" aria-label="Remove" className={classes.itemButton} onClick={() => onRemoveClick(firstLevelKey)}>
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
                                onClick={() => onEditClick(child)}
                                button
                                dense
                            >
                                <ListItemText primary={child.name} />
                                <ListItemSecondaryAction >
                                    <IconButton color="secondary" className={classes.itemButton} aria-label="Remove" onClick={() => onRemoveClick(child.id)}>
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
    topButtonIcon: {
        marginLeft: theme.spacing.unit
    },
    parentItem: {
        paddingTop: theme.spacing.unit,
    },
    subItemContainer: {
        paddingLeft: theme.spacing.unit * 2,
    },
    subItem: {
        paddingTop: 0,
    },
    outer: {
        paddingBottom:  theme.spacing.unit * 2,
    }
});

export default withStyles(styles)(CategoryTree);