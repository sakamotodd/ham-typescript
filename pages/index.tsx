import Practice from '../components/practice'
import Counter from '../components/Counter'
import React from 'react'

interface Props {
  name: string
}
const Home: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <Practice name={name} />
      <br/>
      <br/>
      <Counter/>
    </div>
  )
}

Home.defaultProps = {
  name: 'Hello would',
}

export default Home
