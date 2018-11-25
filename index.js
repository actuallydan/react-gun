'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.withGun = exports.GunProvider = undefined;

var _extends =
    Object.assign ||
    function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };

var _createClass = (function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    }
    return call && (typeof call === 'object' || typeof call === 'function')
        ? call
        : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError(
            'Super expression must either be null or a function, not ' +
                typeof superClass
        );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
} // Uncluttered and edit friendly es6 version before getting compiled to play nice with npm

// Shamelessly stolen HOC template appropriated for gun
var GunProvider = (exports.GunProvider = (function(_Component) {
    _inherits(GunProvider, _Component);

    function GunProvider() {
        _classCallCheck(this, GunProvider);

        return _possibleConstructorReturn(
            this,
            (GunProvider.__proto__ || Object.getPrototypeOf(GunProvider)).apply(
                this,
                arguments
            )
        );
    }

    _createClass(GunProvider, [
        {
            key: 'getChildContext',
            value: function getChildContext() {
                var _props = this.props,
                    gun = _props.gun,
                    GUN = _props.GUN,
                    SEA = _props.SEA;

                return { gun: gun, GUN: GUN, SEA: SEA };
            }
            // you must specify what you’re adding to the context
        },
        {
            key: 'render',
            value: function render() {
                // `Children.only` enables us not to add a <div /> for nothing
                return _react.Children.only(this.props.children);
            }
        }
    ]);

    return GunProvider;
})(_react.Component));

GunProvider.propTypes = {
    gun: _propTypes2.default.object.isRequired,
    GUN: _propTypes2.default.func,
    SEA: _propTypes2.default.object
};
GunProvider.childContextTypes = {
    gun: _propTypes2.default.object.isRequired,
    GUN: _propTypes2.default.func,
    SEA: _propTypes2.default.object
};
var withGun = (exports.withGun = function withGun(ComponentToWrap) {
    var _class, _temp;

    return (
        (_temp = _class = (function(_Component2) {
            _inherits(GunComponent, _Component2);

            function GunComponent() {
                _classCallCheck(this, GunComponent);

                return _possibleConstructorReturn(
                    this,
                    (
                        GunComponent.__proto__ ||
                        Object.getPrototypeOf(GunComponent)
                    ).apply(this, arguments)
                );
            }

            _createClass(GunComponent, [
                {
                    key: 'render',
                    value: function render() {
                        var _context = this.context,
                            gun = _context.gun,
                            GUN = _context.GUN,
                            SEA = _context.SEA;
                        // what we do is basically rendering `ComponentToWrap`
                        // with an added `theme` prop, like a hook

                        return _react2.default.createElement(
                            ComponentToWrap,
                            _extends({}, this.props, {
                                gun: gun,
                                GUN: GUN,
                                SEA: SEA
                            })
                        );
                    }
                    // let’s define what’s needed from the `context`
                }
            ]);

            return GunComponent;
        })(_react.Component)),
        (_class.contextTypes = {
            gun: _propTypes2.default.object.isRequired,
            GUN: _propTypes2.default.func,
            SEA: _propTypes2.default.object
        }),
        _temp
    );
});
