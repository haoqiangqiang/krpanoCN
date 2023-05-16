import styled from 'styled-components';

export const TitleBlock = styled.div`
    display: inline-block;
    font-weight: bolder;
    font-size: ${(props: { level: number }) => {
        switch (props.level) {
            case 1:
                return '16px';
            case 2:
                return '14px';
            default:
                return '12px'
        }
    }};
`