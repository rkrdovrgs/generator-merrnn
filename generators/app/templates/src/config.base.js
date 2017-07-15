import { default as dom } from './config.dom';
import { default as native } from './config.native';

const config =
    (process.env.TARGET_PLATFORM === 'dom' ? dom : native)[process.env.NODE_ENV || 'development'];

export default config;