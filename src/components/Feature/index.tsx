import React, { useEffect } from "react";
import { FeatureContainer } from "./styled";
import { useDispatch, useSelector } from 'react-redux';
import { getFetureTitle } from "../../service/app/example";
import { State } from "../../interfaces/state.interface";


const Feature = () => {

    const dispatch = useDispatch()

    const { features } = useSelector<State.AppState, State.ExampleState>(state => state.example);

    useEffect(() => {
        getFetureTitle(dispatch)
    }, [dispatch])

    return (
        <FeatureContainer>
            <span>经典案例:</span>
            {
                features.map(feature => (
                    <span key={feature.name}>{feature.title}</span>
                ))
            }

        </FeatureContainer>
    )
}

export default Feature