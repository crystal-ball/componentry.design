import classes from './ContentSection.module.css'

export function ContentSection({ children }: { children: React.ReactNode }) {
  return <div className={classes.content}>{children}</div>
}
