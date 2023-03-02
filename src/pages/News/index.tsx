import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useParams, } from 'react-router-dom';

export default () => {
    const state = useSelector(state => state);
    const params = useParams();
    console.log('params', params, state);
    return (
        <div>新闻{JSON.stringify(state)}</div>
    )
}