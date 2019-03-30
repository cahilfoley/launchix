import * as React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { createStyles, WithStyles, Theme, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'

import { drawerWidth } from 'styles/constants'
import { AppState } from 'store/reducers'
import { isSidebarOpen } from 'store/selectors'
import { AppDispatch, openSidebar } from 'store/actions'

const styles = ({ transitions }: Theme) =>
  createStyles({
    appBar: {
      transition: transitions.create(['margin', 'width'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: transitions.create(['margin', 'width'], {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    hide: {
      display: 'none'
    }
  })

type HeaderProps = WithStyles<typeof styles> & {
  title: string
  sidebarOpen: boolean
  openSidebar: (event: React.SyntheticEvent) => void
}

const Header: React.FC<HeaderProps> = ({ classes, title, sidebarOpen, openSidebar }) => (
  <AppBar
    position="fixed"
    className={classNames(classes.appBar, {
      [classes.appBarShift]: sidebarOpen
    })}
  >
    <Toolbar disableGutters={!sidebarOpen}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={openSidebar}
        className={classNames(classes.menuButton, sidebarOpen && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" noWrap>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
)

const mapStateToProps = (state: AppState) => ({
  sidebarOpen: isSidebarOpen(state)
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  openSidebar: () => dispatch(openSidebar())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header))
