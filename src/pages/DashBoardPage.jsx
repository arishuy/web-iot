import React from 'react'
import Menu from '../components/Menu'
import Headerbar from '../components/Headerbar';
import { Layout} from 'antd';
import DataTable from '../components/DataTable';
import Home from '../components/Home';
const { Header, Content, Footer } = Layout;

const DashBoardPage = () => {
  const token = localStorage.getItem("token");
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Menu />
      <Layout className="site-layout" style={{maxHeight: '100vh'}}>
        <Header style={{ padding: 0, background: '#EFEFEF', height: '55px',display: 'flex', alignItems: 'center', position: 'relative'}}>
          <Headerbar />
        </Header>
        <Content style={{ background: '#E7E7E7' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
           {token? <DataTable /> : <Home />}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center',background: '#EFEFEF' }}>PBL5 IoT</Footer>
      </Layout>
    </Layout>
  )
}

export default DashBoardPage