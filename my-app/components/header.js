import LINK from 'next/link'

// material-ui
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  icon: {
    maxWidth: 30,
    margin: theme.spacing(1)
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  headerText: {
    marginLeft: theme.spacing(2),
    fontWeight: 600,
    fontSize: 18
  }
}))

export default function Header () {
  const classes = useStyles()
  return (
    <header>
      <AppBar position='static' color='transparent'>
        <div className={classes.flex}>
          <LINK href='/'>
            <a><img className={classes.icon} src="/logo.svg" alt="Logo" /></a>
          </LINK>
          <p className={classes.headerText}>GGXrd rev2 Frame tables</p>
        </div>
      </AppBar>
    </header>
  )
}