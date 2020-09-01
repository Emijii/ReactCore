﻿import React, { Component } from 'react';
//import 'aframe';

export class ARHelloWorld extends Component {
    render() {
        return (
            <a-scene physics>
                <a-box position="-1 4 -3" rotation="0 45 0" color="#CEA8FF" dynamic-body></a-box>
                <a-box position="-1 0.5 -3" rotation="0 45 0" color="#FFA8AB"></a-box>
                <a-sphere position="0 1.25 -5" radius="1.25" color="#FEB5FF"></a-sphere>
                <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFF4CF"></a-cylinder>
                <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7CCCBF"></a-plane>
                <a-sky color="#27DDF3"></a-sky>
            </a-scene>
        );
    }
}