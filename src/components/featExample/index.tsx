import React, { useEffect } from "react";
import { getFetureExamples } from "../../service/app/example";
import { FeatureExample } from "./styled";
import { useAppState, useDispatch } from '../../contexts/providers'


export default () => {
    const dispatch = useDispatch()
    const { featureExampleState } = useAppState()
    useEffect(() => {
        getFetureExamples(dispatch)
    }, [dispatch])
    console.log('featureExampleState', featureExampleState);
    return (
        <FeatureExample>
            <span>经典案例:</span>
            
        </FeatureExample>
    )
}