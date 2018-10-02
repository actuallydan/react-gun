import React, { Component, Children } from "react";
import PropTypes from "prop-types";

// Shamelessly stolen HOC template appropriated for gun
export class GunProvider extends Component {
    static propTypes = {
        gun: PropTypes.object.isRequired
    };
    // you must specify what you’re adding to the context
    static childContextTypes = {
        gun: PropTypes.object.isRequired
    };
    getChildContext() {
        const { gun } = this.props;
        return { gun };
    }
    render() {
        // `Children.only` enables us not to add a <div /> for nothing
        return Children.only(this.props.children);
    }
}

export const withGun = ComponentToWrap => {
    return class GunComponent extends Component {
        // let’s define what’s needed from the `context`
        static contextTypes = {
            gun: PropTypes.object.isRequired
        };
        render() {
            const { gun } = this.context;
            // what we do is basically rendering `ComponentToWrap`
            // with an added `theme` prop, like a hook
            return <ComponentToWrap {...this.props} gun={gun} />;
        }
    };
};
