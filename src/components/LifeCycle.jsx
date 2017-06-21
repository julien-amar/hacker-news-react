import React, { Component } from 'react';

export default class extends Component {
    constructor(props, context) {
        super(props, context);
    }

    ////////////////////
    // Initialization //
    ////////////////////

    // Analogously getDefaultProps can be used to define any default props which can be accessed via this.props.
    getDefaultProps() {
        return { };
    }

    // The getInitialState method enables to set the initial state value, that is accessible inside the component via this.state.
    getInitialState() {
        return { };
    }

    // componentWillMount is called before the render method is executed.
    // It is important to note that setting the state in this phase will not trigger a re-rendering.
    componentWillMount() {
    }

    // The render method returns the needed component markup, which can be a single child component or null or false (in case you don't want any rendering).
    render() {
        return (
            <div></div>
        );
    }

    // As soon as the render method has been executed the componentDidMount function is called.
    // The DOM can be accessed in this method, enabling to define DOM manipulations or data fetching operations.
    // Any DOM interactions should always happen in this phase not inside the render method.
    componentWillUnmount() {
    }

    ///////////////////
    // State Changes //
    ///////////////////

    // shouldComponentUpdate is always called before the render method and enables to define if a re-rendering is needed or can be skipped.
    // Obviously this method is never called on initial rendering.
    // A boolean value must be returned.
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    // componentWillUpdate gets called as soon as the the shouldComponentUpdate returned true.
    // Any state changes via this.setState are not allowed as this method should be strictly used to prepare for an upcoming update not trigger an update itself.
    componentWillUpdate(nextProps, nextState){
    }

    // Finally componentDidUpdate is called after the render method.
    // Similar to the componentDidMount, this method can be used to perform DOM operations after the data has been updated.
    componentDidUpdate(prevProps, prevState){
    }
 
    ///////////////////
    // Props Changes //
    ///////////////////

    // componentWillReceiveProps is only called when the props have changed and when this is not an initial rendering. componentWillReceiveProps enables to update the state depending on the existing and upcoming props, without triggering another rendering.
    // One interesting thing to remember here is that there is no equivalent method for the state as state changes should never trigger any props changes.
    componentWillReceiveProps(nextProps) {
    this.setState({
        // set something 
    });
    }
// TRIGGER A State Changes
}
