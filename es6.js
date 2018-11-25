// Uncluttered and edit friendly es6 version before getting compiled to play nice with npm
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

// Shamelessly stolen HOC template appropriated for gun
export class GunProvider extends Component {
    static propTypes = {
        gun: PropTypes.object.isRequired,
        GUN: PropTypes.func,
        SEA: PropTypes.object
    };
    // you must specify what you’re adding to the context
    static childContextTypes = {
        gun: PropTypes.object.isRequired,
        GUN: PropTypes.func,
        SEA: PropTypes.object
    };
    getChildContext() {
        const { gun, GUN, SEA } = this.props;
        return { gun, GUN, SEA };
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
            gun: PropTypes.object.isRequired,
            GUN: PropTypes.func,
            SEA: PropTypes.object
        };
        render() {
            const { gun, GUN, SEA } = this.context;
            // what we do is basically rendering `ComponentToWrap`
            // with an added `theme` prop, like a hook
            return (
                <ComponentToWrap
                    {...this.props}
                    gun={gun}
                    GUN={GUN}
                    SEA={SEA}
                />
            );
        }
    };
};
