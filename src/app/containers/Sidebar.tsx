import * as React from 'react'
import { connect } from 'react-redux'

import { createStyles, WithStyles, Theme, withStyles, WithTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

import { drawerWidth } from 'styles/constants'
import { AppState } from 'store/reducers'
import { isSidebarOpen } from 'store/selectors'
import { AppDispatch, closeSidebar } from 'store/actions'

const styles = ({ mixins }: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...mixins.toolbar,
      justifyContent: 'flex-end'
    }
  })

type HeaderProps = WithTheme &
  WithStyles<typeof styles> & {
    sidebarOpen: boolean
    closeSidebar: (event: React.SyntheticEvent) => void
  }

const Header: React.FC<HeaderProps> = ({ classes, theme, sidebarOpen, closeSidebar }) => (
  <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="left"
    open={sidebarOpen}
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={closeSidebar}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </div>
    <Divider />
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
)

const mapStateToProps = (state: AppState) => ({
  sidebarOpen: isSidebarOpen(state)
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  closeSidebar: () => dispatch(closeSidebar())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Header))
