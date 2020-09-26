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
                <LeftMenuTitle>Examples</LeftMenuTitle>
                </Link>
                <Link to='/examples/'>
                <LeftMenuItem>Show All</LeftMenuItem>
                </Link>
                <Link to='/examples/?depthmap'>
                <LeftMenuItem>Depthmap</LeftMenuItem>
                </Link>
                <Link to='/examples/?js'>
                <LeftMenuItem>Javascript</LeftMenuItem>
                </Link>
                <Link to='/examples/?multires'>
                <LeftMenuItem>Multiresolution</LeftMenuItem>
                </Link>
                <Link to='/examples/?panovideo'>
                <LeftMenuItem>Panoramic Video</LeftMenuItem>
                </Link>
                <Link to='/examples/?vtour'>
                <LeftMenuItem>Virtual Tours</LeftMenuItem>
                </Link>
                <Link to='/examples/?webvr'>
                <LeftMenuItem>WebVR</LeftMenuItem>
                </Link>
            </LeftMenu>
            <Content>

            </Content>
        </Main>
    );
}

export default Examples;