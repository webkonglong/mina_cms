import { useState } from 'react';
import { Layout, Select } from 'antd';
import { history } from 'umi';
import menu from './menu';
import logo from './img/logo.svg';
import Icon from '@/component/icon';

export default (props: { children: React.FC; location: any }): JSX.Element => {
  const [router, setRouter] = useState<string>(props.location.pathname);
  return (
    <Layout>
      <Layout.Header>
        <Icon type="iconmina-logo" className="logo" />
        <span className="app-menu">
          {menu.map((item) => (
            <span
              key={item.url}
              className={router === item.url ? 'active-menu' : ''}
              onClick={() => {
                setRouter(item.url);
                history.push(item.url);
              }}
            >
              {item.title}
            </span>
          ))}
          <Select
            placeholder="选择语言"
            style={{ width: 120 }}
            bordered={false}
          >
            <Select.Option value="zh">中文</Select.Option>
            <Select.Option value="en">English</Select.Option>
          </Select>
        </span>
      </Layout.Header>
      <div className="body">{props.children}</div>
      <Layout.Footer>
        <p>©2021 Mina. Started by O(1) Labs.</p>
        <span>官网</span>
        <span>推特</span>
        <span>电报</span>
        <span>社区</span>
      </Layout.Footer>
    </Layout>
  );
};
