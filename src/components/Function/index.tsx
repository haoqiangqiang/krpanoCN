import React, { FC, ReactNode } from "react";
import { FunctionBox, FunctionContent, FunctionHeader } from "./styled";

interface Props {
    id: string,
    header: ReactNode | string,
    children: ReactNode | string,
}

const Function: FC<Props> = ({id, header, children}) =>  {
    return (
        <FunctionBox id={id}>
            <FunctionHeader>{header}</FunctionHeader>
            <FunctionContent>{children}</FunctionContent>
        </FunctionBox>
    )
}

export default Function;