import { IBlogConfig } from '@/types';

const config: IBlogConfig = {
  host: '0.0.0.0',
  port: 9000,
  enableHTTPS: false,
  mongoUrl: `mongodb://${process.env.BUILD_ENV === 'docker' ? 'database' : 'localhost'}:27017/website`,
  jwtSecret: 'myblogjsonwebtokensecretkey'
};

export default config;
