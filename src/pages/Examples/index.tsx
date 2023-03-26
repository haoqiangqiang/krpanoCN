import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import Main from '../../components/Main';
import { State } from '../../interfaces/state.interface';
import { getNormalExampleClassify, switchExampleClass } from '../../service/app/example';
import { MenuItem, MenuTitle } from './style';

export default () => {

    const dispatch = useDispatch();

    const { normalClassify } = useSelector<State.AppState, State.ExampleState>(state => state.example);

    useEffect(() => {
        getNormalExampleClassify(dispatch)
    }, [dispatch])

    const Menu = () => {

        const onExampleClassifyClick = (classify: string) => {
            switchExampleClass(classify, dispatch);
        }
        return (
            <>
                <MenuTitle>案例</MenuTitle>
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
            <></>
        )
    }

    return (
        <Layout>
            <Main leftMenu={Menu()} content={Content()} />
        </Layout>
    )
}