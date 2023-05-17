import React, { FC, ReactNode } from "react";
import { ContentBlock } from "./styled";
import './style.css';
interface Props {
    children: ReactNode | string
}

const Title: FC<Props> = ({ children }) => {
    return (
        <ContentBlock>{children}</ContentBlock>
    )
}

export default Title;