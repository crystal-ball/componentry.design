export {}

declare module 'componentry/types/utils/utility-classes' {
  interface UtilityPropsOverrides {
    backgroundColor: 'primary-100' | 'primary-200'
    fontFamily: 'body' | 'monospace'
  }
}

declare module 'componentry/types/components/Text/Text' {
  interface TextPropsOverrides {
    variant:
      | 'title'
      | 'h1'
      | 'h2'
      | 'h3'
      | 'subtitle'
      | 'lead'
      | 'body'
      | 'detail'
      | 'overline'
  }
}

declare module 'componentry/types/components/Button/Button' {
  interface ButtonPropsOverrides {
    size: 'small' | 'large'
  }
}
