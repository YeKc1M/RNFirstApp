/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorldApp from './HelloWorld'
import InputApp from './InputApp'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloWorldApp);
//AppRegistry.registerComponent(appName, () => InputApp);
