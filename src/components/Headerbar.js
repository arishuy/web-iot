import React from 'react';
import {
  UserOutlined,
  LoginOutlined,
  ExpandOutlined,
} from '@ant-design/icons';
import { Avatar ,Space, Button} from 'antd';
import { useAuth } from "../context/AuthContext";
const Headerbar = () => {
  const { signOut } = useAuth();
  const { currentUser } = useAuth();  
  const token = localStorage.getItem("token");
    const logout = () => {
        signOut();
        localStorage.removeItem("token");
        window.location.reload();
      }
  return (
    <div style={{ position: 'absolute', right: 0, marginRight: 20, }}>
            {token ?
          <><Space wrap size={16}>
                <Avatar src={currentUser.photoURL} />
              </Space>
              <span style={{marginLeft: '2px'}}>
              {currentUser.displayName}
                </span>
                <Button type="ghost" style={{ background: 'none' }}onClick={logout} >
              <LoginOutlined /> Đăng xuất
            </Button></>
                 :
          <Button type="primary" href="/login" >
              <LoginOutlined /> Đăng nhập
            </Button>
            }
          </div>
  )
}

export default Headerbar