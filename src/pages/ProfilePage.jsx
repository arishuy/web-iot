import React from 'react'
import Menu from '../components/Menu'
import Headerbar from '../components/Headerbar';
import Profile from '../components/Profile';
import { Layout} from 'antd';
import Home from '../components/Home';
const { Header, Content, Footer } = Layout;

const DashBoardPage = () => {
  const token = localStorage.getItem("token");
  return (
    // <div id="dash" style={ {display: 'flex'}}>
    //   <Menu />
    //   <DashBoard />
    // </div>
    <Layout style={{ minHeight: '100vh' }}>
      <Menu />
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: '#EFEFEF', height: '55px',display: 'flex', alignItems: 'center', position: 'relative'}}>
          <Headerbar />
        </Header>
        <Content style={{ background: '#E7E7E7' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
           {token ?  <Profile /> : <Home />}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center',background: '#EFEFEF' }}>PBL5 IoT</Footer>
      </Layout>
    </Layout>
  )
}

export default DashBoardPage