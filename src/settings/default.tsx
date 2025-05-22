// Default types to import in each tsx page

// =========== COMMON PROPS ===========
// Allows for additional types to be passed through <{}> using <P extends object = {}> = P & ....

type CommonProps<P extends object = {}> = P & React.PropsWithChildren<{}>

type CommonPropsWithStyle<P extends object = {}> = P & CommonProps<{
    style?: React.CSSProperties
}>

// ============ SPECIFIC PROPS ===========
// You can enter additional types in <{}> based on your components needs

export type PaddingProps = CommonPropsWithStyle<{}>

export type ContentProps = CommonPropsWithStyle<{}>

export type ULProps = CommonPropsWithStyle<{}>

export type BodyPaddingProps = CommonPropsWithStyle<{}>

export type ListProps = CommonPropsWithStyle<{
    text?: string
    href?: string
}>
