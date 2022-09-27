export interface Config {
    BASENAME?: string;

    SUCCESS_CODE: number;
  
    API_URL: string;
  
    TOKEN_KEY: string;
  
  
    theme: 'dark' | 'light';
  
  
    title: string;

}




const AdminConfig: Config = {
    // react-router basename
    BASENAME: '/semi-vite',
  
    // 请求成功状态码
    SUCCESS_CODE: 0,

  
    // 统一请求地址
    API_URL: '/',
  
    // 本地存储token 的key
    TOKEN_KEY: 'token',
  
    // 默认主题颜色
    theme: 'dark',
  
    // 项目名称
    title: 'semi vite',
  
  };
  
  export default AdminConfig;