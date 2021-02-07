import { Icon } from 'componentry'

export default function FourOhFourScreen() {
  return (
    <div className='flex-grow-1'>
      <h3>
        <Icon id='warning' className='text-warning' /> The page you are looking for
        can&apos;t be found.
      </h3>
    </div>
  )
}
