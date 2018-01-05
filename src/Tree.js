// React
import React, { Component } from 'react';
// Material-UI
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder'
// Custom
// Others
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  nested2: {
    paddingLeft: theme.spacing.unit * 8,
  },
  // root: {
  //   display: 'flex',
  //   flex: 1,
  //   flexDirection: 'row',
  //   width: 100,
  // },
  // icon: {
  //   flex: 1,
  //   backgroundColor: 'yellow',
  // },
  // text: {
  //   flex: 1,
  //   backgroundColor: 'blue',
  // },
});

class Tree extends Component {
  state = {
    open: true,
    open2: true,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClick2 = () => {
    this.setState({ open2: !this.state.open2 });
  };

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.root} subheader={<ListSubheader>Nested List Items</ListSubheader>}>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Inbox" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItem button className={classes.nested} onClick={this.handleClick2}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset primary="Inbox" />
              {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse component="li" in={this.state.open2} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem button className={classes.nested2}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Starred" />
                </ListItem>

              </List>
            </Collapse>

          </List>
        </Collapse>
      </List>
    );
  }
  // render() {
  //     const { classes, parent, data } = this.props;  
  //     console.log(data)

  //     return null;
  //     // return data.map((value, index) => {
  //     //     console.log(Array.isArray(value))
  //     //     return (
  //     //         <div className={classes.root}>
  //     //             <div className={classes.icon}>{value.icon}</div>
  //     //             <div className={classes.text}>{value.text}</div>
  //     //         </div>
  //     //     );
  //     // });
  // }
}

export default withStyles(styles)(Tree);