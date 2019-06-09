/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/screens/Home';
import Homeswitch from './src/screens/Homeswitch';
import Signin from './src/screens/Signin';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Homeswitch);
