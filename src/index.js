import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';



class App extends Component {
    render() {
        const { text, onChangeText, onButtonClick } = this.props;
        return (
            <div>
                <h1 onClick={onChangeText}> {text} </h1>
                <button onClick={onButtonClick}>click me</button>
            </div>
        );
    }
}



const changeTextAction = {
    type: 'CHANGE_TEXT'
}
const buttonClickAction = {
    type: 'BUTTON_CLICK'
}



const initialState = {
    text: 'Hello'
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text == 'Hello' ? 'world' : 'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'Hello world'
            }
        default:
            return initialState;
    }
}


let store = createStore(reducer);


function mapStateToProps(state) {
    return { text: state.text }
}


function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => dispatch(buttonClickAction),
        onChangeText: () => dispatch(changeTextAction)
    }
}


App = connect(mapStateToProps, mapDispatchToProps)(App)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)