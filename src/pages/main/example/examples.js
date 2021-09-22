import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Main,
    LeftMenu,
    LeftMenuTitle,
    Content,
    LeftMenuItem,
} from '../style';
import Example from '../../../components/example_block/index';
import { actionCreators } from './store';

function Examples(props) {
    const data = useSelector(state => {
        return state.example.data;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionCreators.fetchExampleData());
    }, []);

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
                {
                    data.map((data) => <Example key={data.id} data={data}></Example>)
                }
            </Content>
        </Main>
    );
}

export default Examples;