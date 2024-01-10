import {  useHistory } from 'react-router-dom';
import { Layout, Menu, Button, message } from 'antd';
const { Header } = Layout;
const HeaderPresenter = (props) => {
  const key = 'updatable';
  let history = useHistory();
  const logout = () => {
    message.loading({ content: 'Loading...', key });
    props.props.states.webSocket.close();
    setTimeout(() => {
      message.success({
        content: '로그아웃 완료',
        key,
        duration: 3,
      });
      history.push('/');
    }, 400);
  };
  return (
    <>
      {props.props.states.store ? (
        <Header>
          <p
            style={{
              color: '#FFFFFF',
            }}
          >
            매장입니다
            <Button onClick={logout} style={{ marginLeft: '80%' }}>
              로그아웃
            </Button>
          </p>
          <Menu
            style={{ marginLeft: '90px', width: ' 20px' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          ></Menu>
        </Header>
      ) : (
        <Header>
          <div
            style={{ color: '#FFFFFF' }}
          >
            관리자입니다
            <Button onClick={logout} style={{ marginLeft: '80%' }}>
              로그아웃
            </Button>
          </div>
          <Menu
            style={{ marginLeft: '90%', width: ' 20px' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          ></Menu>
        </Header>
      )}
    </>
  );
};
export default HeaderPresenter;
