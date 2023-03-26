import React, { useEffect } from "react";
import { FeatureContainer, FeatureExampleTitle } from "./styled";
import { useDispatch, useSelector } from 'react-redux';
import { getFeatureExampleClassify, switchExampleClass } from "../../service/app/example";
import { State } from "../../interfaces/state.interface";


const Feature = () => {

    const dispatch = useDispatch()

    const { features } = useSelector<State.AppState, State.ExampleState>(state => state.example);

    useEffect(() => {
        getFeatureExampleClassify(dispatch);
    }, [dispatch])

    const onExampleClassifyClick = (classify: string) => {
        switchExampleClass(classify, dispatch)
    }

    return (
        <FeatureContainer>
            <FeatureExampleTitle type='label'>经典案例:</FeatureExampleTitle>
            {
                features.map(feature => (
                    <FeatureExampleTitle type='normal' onClick={() => onExampleClassifyClick(feature.classify)} key={feature.name}>{feature.title}</FeatureExampleTitle>
                ))
            }

        </FeatureContainer>
    )
}

export default Feature