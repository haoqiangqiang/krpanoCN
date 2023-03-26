import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Example from '../../components/Example';
import Layout from '../../components/Layout';
import Main from '../../components/Main';
import { ExampleClassify } from '../../interfaces/example.interface';
import { State } from '../../interfaces/state.interface';
import { getAllExample, getNormalExampleClassify, switchExampleClass, setExampleClassify } from '../../service/app/example';
import { MenuItem, MenuTitle, ExampleTitle } from './style';

export default () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const location = useLocation()

    const { normalClassify } = useSelector<State.AppState, State.ExampleState>(state => state.example);

    const { classifyExamples } = useSelector<State.AppState, State.ExampleState>(state => state.example);

    useEffect(() => {
        getNormalExampleClassify(dispatch)
    }, [dispatch])

    useEffect(() => {
        getAllExample(dispatch)
    }, [dispatch])

    useEffect(() => {
        setTimeout(() => {
            const classify = location.search.slice(1) as ExampleClassify;
            switchExampleClass(classify, dispatch)
        }, 500)
    }, [location])

    const Menu = () => {

        const onExampleClassifyClick = (classify: ExampleClassify) => {
            classify ? navigate(`/examples?${classify}`) : navigate(`/examples`)
        }

        return (
            <>
                <MenuTitle><Link to='/examples'>案例</Link></MenuTitle>
                {
                    normalClassify.map(classify => (
                        <MenuItem onClick={() => onExampleClassifyClick(classify.classify)} key={classify.name}>{classify.title}</MenuItem>
                    ))
                }
            </>
        )
    }

    const Content = () => {
        return (
            <>
                <ExampleTitle>{setExampleClassify(location.search)}</ExampleTitle>
                {classifyExamples.map(example => (
                    <Example key={example.id} example={example} />
                ))}
            </>
        )
    }

    return (
        <Layout>
            <Main leftMenu={Menu()} content={Content()} />
        </Layout>
    )
}