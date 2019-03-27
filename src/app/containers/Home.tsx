import * as React from 'react'
import LaunchableList from './LaunchableList'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <div>
    <h1>Welcome Home</h1>
    <LaunchableList />
  </div>
)

export default Home
