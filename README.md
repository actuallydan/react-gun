# React Gun

Simple Higher-Order Component for [GunDB](https://github.com/amark/gun) in React

### Installation

Install with `yarn` or `npm`

```
yarn add react-gun
```

Initialize GunProvider to make your Gun() object available to any component...

#### App.js

```javascript
import React, { Component } from "react";
import Gun from "gun";
import { GunProvider } from "react-gun";

const App = props => {
    // Initialize all your app stuff
    let gun = Gun();
    return (
        <GunProvider gun={gun}>
            <ComponentThatUsesGun />
        </GunProvider>
    );
};
export default App;
```

Then call your gun instance by wrapping your component with `{withGun}`like so

#### Component.js

```javascript
import React, { Component } from "react";
import { withGun } from "react-gun";

class ComponentThatUsesGun extends Component {
    state = {
        foo: null
    };
    componentDidMount() {
        // Get objects from Gun() instance and use it to update state or do whatever else you'd like with it
        this.props.gun.get("foo").on(bar => {
            this.setState({
                foo: bar
            });
        });
    }
    render() {
        if (!this.state.foo) {
            return <div>Loading...</div>;
        }
        return <div>{this.state.foo}</div>;
    }
}

export default withGun(ComponentThatUsesGun);
```
