import React, { useContext } from 'react';
import { Layout, Menu, } from 'antd';
import PropTypes from 'prop-types'; import { Pagination } from 'antd';
import { GlobalContext } from '../context/GlobalContext';
import Skeleton from 'antd/lib/skeleton/index';
import Card from './Card'
import './style.css'
const { Header, Footer, Sider, Content } = Layout;
const Home = () => {

  const context = useContext(GlobalContext);
  const { data, setState, updateData, count, currPage, pageSize, loading } = context;
  const onChange = (currPage, pageSize) => {
    setState({
      currPage, pageSize
    });
    console.log({ currPage, pageSize })
  }

  return (
    <>

      <Content style={{ padding: '0 50px' }}>
        {loading ? <Skeleton /> : <div className="site-layout-content">
          {
            data.length > 0 ? data.map(d =>
              <Card data={d} onClick={updateData} />
            ) : <h3> No Data Found </h3>
          }
        </div>}
        <Pagination onChange={onChange} current={currPage} defaultCurrent={currPage} total={count} pageSize={pageSize} />
      </Content>


    </>
  );
}

Home.propTypes = {};

export default Home;
