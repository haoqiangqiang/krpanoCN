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
import Example from '../../common/example_block';
import { actionCreators } from './store';

function Examples(props) {
    const data = useSelector(state => {
        console.log('state is', state.example.data);
        return state.example.data;
    });

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('app dispatch');
    //     dispatch(actionCreators.fetchExampleData());
    // })

    // const getData = () => {
    //     console.log(data);
    //     dispatch({
    //         type: actionCreators.fetchExampleData(),
    //     })
    // }

    // const [type, setType] = useState('normal');
    // let data;
    
    // useEffect(() => {
    //     console.log('use', data);
    //     // getData();
    // })
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

// const mapState = (state) => ({
//     data: state.example.get('data'),
// })
// const mapDispatch = (dispatch) => ({
//     getExampleData() {
//         dispatch(actionCreators.fetchExampleData());
//     }
// })

// export default connect(mapState, mapDispatch)(Examples);
export default Examples;