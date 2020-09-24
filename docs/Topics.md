# Documentation topics

1. USE NUMBER FOR PALETTE COLORS!!!
1. Design systems and componenty libraries.
1. SASS maps for completely customizeable styles.
1. Active components and Action/Content subcomponents.

## Library strategy

- Componentry follows the pattern set by Tailwind: reset all elements to a blank
  slate and then provide opt-in styling (provides better control for visual
  appearance)
- Componentry prefers creating upfront breakpoint prefixed classes to reduce the
  need for dynamic classname assigning. Eg, being able to pass
  `className="sm:p-3 lg:p-5"` instead of `className={cx({p: sm ? 3 : 5 })}`.
  They're roughly the same length, but the second one requires importing cx and
  is less readable.
