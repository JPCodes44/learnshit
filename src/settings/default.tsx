// Default types to import in each tsx page

export type PaddingProps = {
    children?: React.ReactNode
}

export type ContentProps = {
    style?: React.CSSProperties;
    children?: React.ReactNode
}

export type ListProps = {
    text?: string
    href?: string
    style?: React.CSSProperties;
    children?: React.ReactNode

}