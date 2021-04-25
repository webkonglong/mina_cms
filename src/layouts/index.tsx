import { useState, useEffect, useReducer } from 'react';
import { Layout } from 'antd';
import { history } from 'umi';
import menu from './menu';
import Icon from '@/component/icon';
import { reducer, initialState, StoreContext } from '@/context/languageContext';

export default (props: { children: React.FC; location: any }): JSX.Element => {
  const [router, setRouter] = useState<string>('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isshow, toggle] = useState<boolean>(false);

  useEffect(() => {
    let pathname = props.location.pathname;
    if (props.location.pathname === '/play') {
      pathname = '/video';
    }
    if (props.location.pathname === '/case-details') {
      pathname = '/case';
    }
    if (props.location.pathname === '/news-details') {
      pathname = '/news';
    }
    setRouter(pathname);
  }, [props.location.pathname]);

  const backToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <Layout>
      <StoreContext.Provider value={{ state, dispatch }}>
        <Layout.Header>
          <Icon
            type="iconmina-logo"
            className="logo"
            onClick={() => {
              history.push('/');
            }}
          />
          <span className="app-menu">
            {menu.map((item) => (
              <span
                key={item.url}
                className={
                  router === item.url
                    ? 'app-menu-span  active-menu'
                    : 'app-menu-span '
                }
                onClick={() => {
                  setRouter(item.url);
                  history.push(item.url);
                }}
              >
                {state.language === 'en' ? item.en_titke : item.zh_title}
              </span>
            ))}
            {/* <Select
              placeholder="选择语言"
              style={{ width: 148 }}
              bordered={false}
              value={state.language}
              onChange={(language) => {
                dispatch({
                  type: 'CHANGE_LANGUAGE',
                  payload: { language },
                });
              }}
            >
              <Select.Option value="zh">简体中文</Select.Option>
              <Select.Option value="en">English</Select.Option>
            </Select> */}
            <div className="c-select">
              <div
                className="c-select-value"
                onClick={() => {
                  toggle(!isshow);
                }}
              >
                <Icon className="c-select-icon" type="iconChangeRegion_b" />
                <span className="c-select-value-text">
                  {state.language === 'zh' ? '简体中文' : 'English'}
                </span>
                <Icon
                  className="c-select-icon-toggle"
                  type={isshow ? 'iconbottom' : 'iconiconup'}
                />
              </div>
              {isshow && (
                <div className="c-select-option">
                  <div
                    onClick={() => {
                      dispatch({
                        type: 'CHANGE_LANGUAGE',
                        payload: { language: 'zh' },
                      });
                      toggle(false);
                    }}
                    className="c-select-option-item"
                  >
                    简体中文
                  </div>
                  <div
                    onClick={() => {
                      dispatch({
                        type: 'CHANGE_LANGUAGE',
                        payload: { language: 'en' },
                      });
                      toggle(false);
                    }}
                    className="c-select-option-item"
                  >
                    English
                  </div>
                </div>
              )}
            </div>
          </span>
        </Layout.Header>
        {props.children}
        <Layout.Footer>
          <p>©2021 Mina. Started by O(1) Labs.</p>
          <span
            onClick={() => {
              window.open('https://minaprotocol.com/');
            }}
          >
            {state.language === 'en' ? 'Website' : '官网'}
          </span>
          <span
            onClick={() => {
              window.open('https://twitter.com/minaprotocol');
            }}
          >
            {state.language === 'en' ? 'Twitter' : '推特'}
          </span>
          <span
            onClick={() => {
              window.open('https://t.me/minaprotocol');
            }}
          >
            {state.language === 'en' ? 'Telegran' : '电报'}
          </span>
          <span
            onClick={() => {
              window.open('https://forums.minaprotocol.com/');
            }}
          >
            {state.language === 'en' ? 'Forums' : '社区'}
          </span>

          <Icon
            onClick={() => {
              backToTop();
            }}
            type={state.language === 'en' ? 'icontop1' : 'iconhuidaodingbu2'}
            className="back-to-top"
          />
        </Layout.Footer>
      </StoreContext.Provider>
    </Layout>
  );
};
