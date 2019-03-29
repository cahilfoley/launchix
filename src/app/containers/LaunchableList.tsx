import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppState } from 'store/reducers'
import { getLaunchables } from 'store/selectors'
import { runLaunchable, AppActionTypes } from 'store/actions'

import { List, ListItem, ListItemText } from '@material-ui/core'

interface LaunchableListProps {
  launchables: StoreLaunchable[]
  runLaunchable: (id: number) => void
}

const LaunchableList: React.FC<LaunchableListProps> = ({
  launchables,
  runLaunchable
}) => (
  <div>
    <List>
      {launchables.length
        ? launchables.map(launchable => (
            <ListItem
              button
              key={launchable.id}
              onClick={e => {
                e.preventDefault()
                runLaunchable(launchable.id)
              }}
            >
              <ListItemText primary={launchable.label} />
            </ListItem>
          ))
        : 'No launchables yet'}
    </List>
  </div>
)

const mapStateToProps = (state: AppState) => ({
  launchables: getLaunchables(state)
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, AppActionTypes>
) => ({
  runLaunchable: (id: number) => dispatch(runLaunchable(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchableList)
