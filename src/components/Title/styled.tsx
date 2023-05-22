import styled from 'styled-components';

export const TitleBlock = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
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