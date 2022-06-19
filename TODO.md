# DOCUMENT

1. TS Overrides
2. Tailwind safelist
3. Colors, Spacing, Typography
4. Dynamic utility styles
5. color constraints
6. ComponentryProvider
7. useTheme()
8. note about TW and width/height
9. Guide for focused and disabled states
10. Guide for ActionRoot setup
11. Button page
12. IconButton page
13. Add `truncate` to Text
14. Add `wrapWhenDisabled` to Link
15. Add a11y notes to Icon

## Theme setup workflow

It's preferrable to create an entire theme -- expose the `createTheme` fn for
this.

1. Define your custom theme
2. Pass it to `createTheme` if you want to use Componentry defaults
3. Use it for componentry.config and tailwind.config
4. Pass it to ThemeProvider

How do I add to the theme?

---

Updating TS for your custom theme
