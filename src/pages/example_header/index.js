import React from 'react';
import { 
    ExampleWrapper,
    ExampleTitle,
    ExampleLink,
 } from './style';

function ExampleHeader() {
    return (
        <ExampleWrapper>
            <ExampleTitle>特色案例:</ExampleTitle>
            <ExampleLink href="https://krpano.com/examples/?vtour">虚拟旅行</ExampleLink>
            <ExampleLink href="https://krpano.com/examples/?multires">高清 / 多尺度</ExampleLink>
            <ExampleLink href="https://krpano.com/examples/?panovideo">全景视频</ExampleLink>
            <ExampleLink href="https://krpano.com/examples/?webvr">VR</ExampleLink>
            <ExampleLink href="https://krpano.com/examples/?depthmap">3D-景深</ExampleLink>
            <ExampleLink href="https://krpano.com/examples/">自由定制</ExampleLink>
        </ExampleWrapper>
    );
}

export default ExampleHeader;