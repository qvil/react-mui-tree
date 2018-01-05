// React
import React, { Component } from 'react';
// Material-UI
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import FolderIcon from 'material-ui-icons/Folder';
import FolderSpecialIcon from 'material-ui-icons/FolderSpecial';
import CreateNewFolderIcon from 'material-ui-icons/CreateNewFolder';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
// Custom
// Others

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, parent, child, text, special } = this.props;

    return (
      <List className={classes.nested} disablePadding>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon color={special ? "accent" : "primary"} >
            {special ? <FolderSpecialIcon /> : <FolderIcon />}
          </ListItemIcon>
          <ListItemText inset primary={text} />
          {this.state.open ? 
            child ? <ExpandLess /> : null :
            child ? <ExpandMore />: null}
        </ListItem>
        <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
          {child}
        </Collapse>
      </List>
    );
  }
}

export default withStyles(styles)(NestedList);