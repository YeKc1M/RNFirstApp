/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import App from './App';
import HelloWorldApp from './HelloWorld'
import InputApp from './InputApp'
import NetApp from './NetApp'
import ViewPage from './ViewPage'
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => HelloWorldApp);
//AppRegistry.registerComponent(appName, () => InputApp);
//AppRegistry.registerComponent(appName, () => NetApp);
AppRegistry.registerComponent(appName, () => ViewPage);
