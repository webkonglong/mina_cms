import { useState, useEffect } from 'react';
import { Layout, Select } from 'antd';
import { history } from 'umi';
import menu from './menu';
import Icon from '@/component/icon';

export default (props: { children: React.FC; location: any }): JSX.Element => {
  const [router, setRouter] = useState<string>(props.location.pathname);

  useEffect(() => {
    setRouter(props.location.pathname);
  }, [props.location.pathname]);

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
            style={{ width: 148 }}
            bordered={false}
            value="zh"
          >
            <Select.Option value="zh">简体中文</Select.Option>
            <Select.Option value="en">English</Select.Option>
          </Select>
        </span>
      </Layout.Header>
      {props.children}
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
