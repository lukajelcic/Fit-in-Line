import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';



const styles = {

}

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            menu: false
        }
    }

    toggleSidebar = () => {
        this.setState({ menu: !this.state.menu })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default withStyles(styles)(Sidebar);