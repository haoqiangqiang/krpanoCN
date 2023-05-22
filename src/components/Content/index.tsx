import React, { FC, ReactNode } from "react";
import { ContentBlock } from "./styled";
interface Props {
    id?: string;
    children: ReactNode | string;
}

const Content: FC<Props> = ({ id, children }) => {
    return (
        <ContentBlock id={id}>{children}</ContentBlock>
    )
}

export default Content;