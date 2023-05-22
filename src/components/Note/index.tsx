import React, { FC, ReactNode } from "react";
import { NoteBox } from "./styled";

interface Props {
    children: ReactNode | string
}

const Note: FC<Props> = ({ children }) => {
    return (
        <NoteBox>{children}</NoteBox>
    )
}

export default Note;