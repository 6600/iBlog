import { IBlogConfig } from '@/types';

const config: IBlogConfig = {
  host: '0.0.0.0',
  port: 9000,
  enableHTTPS: false,
  mongoUrl: 'mongodb://154.8.196.163:27017/website',
  jwtSecret: 'myblogjsonwebtokensecretkey'
};

export default config;
