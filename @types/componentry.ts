export {}

declare module 'componentry/types/components/Text/Text' {
  interface TextPropsOverrides {
    variant: 'title' | 'h1' | 'h2' | 'h3' | 'lead' | 'body' | 'detail' | 'overline'
  }
}

declare module 'componentry/types/components/Button/Button' {
  interface ButtonPropsOverrides {
    size: 'small' | 'large'
  }
}
