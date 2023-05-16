import React, { FC, ReactNode } from "react";
import { TitleBlock } from "./styled";
interface Props {
    level: number,
    children: ReactNode | string
}

const Title: FC<Props> = ({ level, children }) => {
    return (
        <TitleBlock level={level}>{children}</TitleBlock>
    )
}

export default Title;