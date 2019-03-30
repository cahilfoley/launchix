import * as React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { createStyles, WithStyles, Theme, withStyles } from '@material-ui/core/styles'

import { drawerWidth } from 'styles/constants'
import { AppState } from 'store/reducers'
import { isSidebarOpen } from 'store/ui/selectors'
import Header from './Header'
import Sidebar from './Sidebar'

const styles = ({ spacing, transitions }: Theme) =>
  createStyles({
    root: { display: 'flex' },
    content: {
      flexGrow: 1,
      padding: spacing.unit * 3,
      transition: transitions.create('margin', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen
      }),
      marginTop: 64,
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: transitions.create('margin', {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })

type ContentProps = WithStyles<typeof styles> & { sidebarOpen: boolean }

const Content: React.FC<ContentProps> = ({ classes, children, sidebarOpen }) => (
  <div className={classes.root}>
    <Header title="Launchix" />
    <Sidebar />
    <main
      className={classNames(classes.content, {
        [classes.contentShift]: sidebarOpen
      })}
    >
      {children}
    </main>
  </div>
)

const mapStateToProps = (state: AppState) => ({
  sidebarOpen: isSidebarOpen(state)
})

export default connect(mapStateToProps)(withStyles(styles)(Content))
