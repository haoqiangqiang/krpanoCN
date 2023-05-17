export interface Menu {
    title: string,
    label: string,
    link?: string,
    child? : Menu[],
}