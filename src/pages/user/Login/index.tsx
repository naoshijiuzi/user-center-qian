import Footer from '@/components/Footer';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import {Alert, Divider, message, Tabs} from 'antd';
import React, { useState} from 'react';
import {history, Link, useModel} from 'umi';
import styles from './index.less';
import {getCurrentUser, userLogin} from "@/services/nsjz-bi/userController";
import {flushSync} from "react-dom";

/*const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);*/
const Login: React.FC = () => {
 // const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  //const { status, type: loginType } = userLoginState;
  const fetchUserInfo = async () => {
    const res = await getCurrentUser();
    if(res.code===0){
      flushSync(()=>{
        setInitialState((s)=>({
          ...s,
          currentUser:res.data,
        }))
      })
    }
  };
  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // 登录
      console.log("登录参数，",values)
      const res = await userLogin(values);
      if (res.code===0) {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        //登录成功后 获取当前登录用户的信息
        await fetchUserInfo();
        //跳转回登录前的页面
        const urlParams = new URL(window.location.href).searchParams;

        history.push(urlParams.get('redirect') || '/');
        return;
      }else{
        message.error(res.message);
      }
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
   /* try {
      // 登录
      const user = await login( {
        ...values,
        type,
      });
      if (user) {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /!** 此方法会跳转到 redirect 参数所在的位置 *!/
        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as {
          redirect: string;
        };
        history.push(redirect || '/');
        return;
      }

      // 如果失败去设置用户错误信息
      setUserLoginState(user);
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }*/
  };


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="/logo.svg" />}
          title="NSJZ BI"
          //subTitle={'Ant Design 是西湖区最具影响力的 Web 设计规范'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            //await handleSubmit(values as API.LoginParams);
            await handleSubmit(values as API.UserLoginRequest);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'账户密码登录'} />
          </Tabs>

         {/* {status === 'error' && loginType === 'account' && (
            <LoginMessage content={'错误的账户和密码(admin/ant.design)'} />
          )}*/}
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入账户'}
                rules={[
                  {
                    required: true,
                    message: '账户是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min:8,
                    message:'长度不能小于8位！'
                  }
                ]}
              />
            </>
          )}


          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <Divider type="vertical"/>
            <Link to="/user/register">
              新用户注册
            </Link>
            <Divider type="vertical"/>

            <a
              style={{
                float: 'right',
              }}
              target="_blank"
              rel="noreferrer"
            >
              忘记密码
            </a>

          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
