import React, { useEffect } from "react";
import { FeatureExample } from "./styled";
import { useDispatch, useSelector } from 'react-redux';
import { getFetureExamples } from "../../service/app/example";


export default () => {
    const dispatch = useDispatch()
    const state = useSelector<>(state => state);
    useEffect(() => {
        getFetureExamples(dispatch)
    }, [dispatch])
    console.log('state', state);
    return (
        <FeatureExample>
            <span>经典案例:</span>
            {
                (state as any).feature.map((feature: any) => (
                    <span>{feature.title}</span>
                ))
            }

        </FeatureExample>
    )
}