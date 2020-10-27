import React from 'react';
import { Link } from 'react-router-dom';
import {
    Main,
    LeftMenu,
    LeftMenuTitle,
    Content,
    LeftMenuItem,
} from './style'

function Examples() {
    return (
        <Main>
            <LeftMenu>
                <Link to='/examples/'>
                <LeftMenuTitle>案例</LeftMenuTitle>
                </Link>
                <Link to='/examples/'>
                <LeftMenuItem>全部</LeftMenuItem>
                </Link>
                <Link to='/examples/?depthmap'>
                <LeftMenuItem>景深图案例</LeftMenuItem>
                </Link>
                <Link to='/examples/?js'>
                <LeftMenuItem>JS 案例</LeftMenuItem>
                </Link>
                <Link to='/examples/?multires'>
                <LeftMenuItem>高分辨路案例</LeftMenuItem>
                </Link>
                <Link to='/examples/?panovideo'>
                <LeftMenuItem>全景视频案例</LeftMenuItem>
                </Link>
                <Link to='/examples/?vtour'>
                <LeftMenuItem>虚拟游览案例</LeftMenuItem>
                </Link>
                <Link to='/examples/?webvr'>
                <LeftMenuItem>VR 案例</LeftMenuItem>
                </Link>
            </LeftMenu>
            <Content>

            </Content>
        </Main>
    );
}

export default Examples;