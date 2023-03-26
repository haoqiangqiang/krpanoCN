import styled from 'styled-components'

export const FeatureContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const FeatureExampleTitle = styled.div`
        padding: 0 4px;
        color: ${(props: { type: string }) => props.type === 'label' ? '#000000' : 'rgba(0 ,0, 0, 0.4)'};
        text-decoration: underline !important;
        font-style: italic;
        cursor: pointer;
        font-weight: ${(props: { type: string }) => props.type === 'normal' ? '400' : 'unset'};
`
