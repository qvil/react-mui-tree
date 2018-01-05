// React
import React, { Component } from 'react';
// Material-UI
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List from 'material-ui/List';
// Custom
import NestedList from './NestedList';
import data from './data.json';
// Others
// import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    overflow: 'auto',
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
let i = 1;

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Group Concept UI",
      data: this._createData(data),
    };
  }


  _createData = data => {
    let newData = [];

    for (let group in data) {
      console.log(data[group])
      if (data[group].parentid === "0") {
        newData.push(data[group]);
      }

      newData.map(value => {
        console.log(value.groupid)
      })
      // data[group]
      // if (data[group].parentid === "0") {
      //   newData
      // }

    }

    console.log(newData);
    // return newData;
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ overflow: 'auto' }}>
        <List className={classes.root} subheader={
          <ListSubheader onClick={() => this.setState({ text: `${this.state.text}1` })}>{this.state.text}</ListSubheader>
        }>
          {
          }
          <NestedList text={this.state.text}
            child={
              <NestedList text={this.state.text} child={
                <NestedList special text={this.state.text} child={
                  <NestedList text={this.state.text} child={
                    <NestedList text={this.state.text} child={
                      <NestedList text={this.state.text} />
                    } />
                  } />
                } />
              } />
            } />
        </List>
      </div>
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