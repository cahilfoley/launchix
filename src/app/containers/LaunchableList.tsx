import * as React from 'react'
import { connect } from 'react-redux'
import { StoreLaunchable } from '../store/launcher/types'
import { AppState } from '../store/reducers'
import { getLaunchables } from '../store/selectors'
import { runLaunchable, AppActionTypes } from '../store/actions'
import { ThunkDispatch } from 'redux-thunk'

interface LaunchableListProps {
  launchables: StoreLaunchable[]
  runLaunchable: (id: number) => void
}

const LaunchableList: React.FC<LaunchableListProps> = ({
  launchables,
  runLaunchable
}) => (
  <div>
    <ul>
      {launchables.length
        ? launchables.map(launchable => (
            <li key={launchable.id}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                  runLaunchable(launchable.id)
                }}
              >
                {launchable.label}
              </a>
            </li>
          ))
        : 'No launchables yet'}
    </ul>
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
