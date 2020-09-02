import frontpage from './frontpage'
import login from './login'
import signUp from './signUp'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const MainNavigator = createStackNavigator({
        frontpage: {screen: frontpage},
        login: {screen: login},
        signUp: {screen: signUp},
        
        
});
const App = createAppContainer(MainNavigator);
export default App;

