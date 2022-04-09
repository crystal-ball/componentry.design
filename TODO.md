# DOCUMENT

1. TS Overrides
2. Tailwind safelist
3. Colors, Spacing, Typography
4. Dynamic utility styles
5. color constraints
6. ComponentryProvider
7. useTheme()

## Theme setup workflow

It's preferrable to create an entire theme -- expose the `createTheme` fn for
this.

1. Define your custom theme
2. Pass it to `createTheme` if you want to use Componentry defaults
3. Use it for componentry.config and tailwind.config
4. Pass it to ThemeProvider
