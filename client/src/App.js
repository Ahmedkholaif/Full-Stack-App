import React, { Component } from "react";
import { BrowserRouter, Link, NavLink, Route } from "react-router-dom";
import { Switch } from 'react-router';
import { Layout, Menu, } from 'antd';

import Home from './components/Home'
import NotFound from './components/NotFound';

import './App.css'
const { Header, Footer, Sider, Content } = Layout;
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Layout rtl={false} className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><NavLink to="/"> Home</NavLink></Menu.Item>
              </Menu>
            </Header>
            <Switch>

              <Route path="/" exact component={Home} />
              <Route exact path="*" component={NotFound} />
            </Switch>
            <Footer style={{ textAlign: 'center' }}> AAIB 2021</Footer>
          </Layout>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;