import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Card, Divider, Layout, Menu, Switch, Table, theme } from 'antd';
import { columns, dataSource } from "./common/data";

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items2 = new Array(1).fill(null).map((_, index) => {
    return {
      key: `cbar${index + 1}`,
      label: `cbar`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });


  return (
    <Layout>
      {/*Sider menu start*/}
      <Sider trigger={null} collapsible collapsed={collapsed} theme={'light'}>
        <div className="demo-logo-vertical"/>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'Dashboard',
            },

          ]}
        />
        <Divider style={{ margin: 0 }}/>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
          }}
          items={items2}
        />
      </Sider>
      {/*Sider menu end*/}

      <Layout>
        {/*Header start*/}
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <b style={{ fontSize: '20px' }}>Dashboard</b>
        </Header>
        {/*Header end*/}

        {/*Status cards start*/}
        <div style={{ display: 'flex', marginTop: '20px', marginLeft: '16px' }}>
          <Card
            bordered={false}
            style={{
              width: 200,
            }}
          >
            <p>Online</p>
            <p>0 clusters</p>
          </Card>
          <Card
            bordered={false}
            style={{
              width: 200,
            }}
          >
            <p>Online</p>
            <p>0 clusters</p>
          </Card>
        </div>
        {/*Status cards end*/}

        {/*Table start*/}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', }}>
            <Switch defaultChecked onChange={() => {
            }} style={{ marginRight: '5px' }}/>
            <p>Only offline clusters</p>
          </div>

          <Table columns={columns} dataSource={dataSource} pagination={false}/>
        </Content>
        {/*Table end*/}
      </Layout>
    </Layout>
  );
};
export default App;