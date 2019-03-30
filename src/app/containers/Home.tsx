import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import LaunchableList from './LaunchableList'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <div>
    <Typography variant="h2" style={{ padding: 16 }}>
      Launchables
    </Typography>
    <LaunchableList />
  </div>
)

export default Home
