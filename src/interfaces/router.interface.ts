export declare namespace CustomRouter {
    interface Route {
        key: string,
        path: string,
        params?: string,
        exact?: boolean,
        element?: any,
        children?: Route[],
    }
}