import React, { FC, ReactNode } from "react";
import { CodeBox, CodeContainer } from './styled';
interface Props {
    code?: boolean,
    children: ReactNode | string
}
const Code: FC<Props> = ({ code, children }) => {
    return (
        <>
            {code ? <CodeContainer>{children}</CodeContainer> : <CodeBox>{children}</CodeBox>}
        </>

    )
}

export default Code;