import * as React from 'react'
import { History } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import CssBaseline from '@material-ui/core/CssBaseline'
import routes from 'routes'
import Content from 'containers/Content'

type AppProps = { history: History }

const App: React.FC<AppProps> = ({ history }) => (
  <div style={{ display: 'flex' }}>
    <CssBaseline />
    <Content>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </Content>
  </div>
)

export default App
