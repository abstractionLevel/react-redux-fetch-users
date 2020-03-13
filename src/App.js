import React, { Component } from 'react';
import VisibleListUser from './containers/VisibleListUser'
/*App component starts here */
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {

    render() {
        return (
            <div className="container">
            <Provider store={store}>
                <VisibleListUser/>
            </Provider>
            </div>
        );
    }
}

export default App;
