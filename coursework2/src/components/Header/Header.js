import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom'
import LanguageButton from './Parts/LanguageButton';
import translate from '../../localizations/translate'
import ThemeSwitcher from './Parts/ThemeSwitcher'
import ProfileButton from './Parts/ProfileButton'
import Link from '@material-ui/core/Link'


const useStyles = makeStyles((theme) => ({
  link: {
    flexGrow: 1,
    marginTop: 1,
    display: 'block',
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
        display: 'none',
    },
},
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
 
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link
            component={RouterLink}
            to='/'
            color='inherit'
            variant='h6'
            underline='none'
            className={classes.link}
        >
          {translate('header.logo')}
          </Link>
          <LanguageButton/>
          <ThemeSwitcher/>
          <ProfileButton />
          <Button color="inherit" size="large"  component={RouterLink} to="/login" >{translate('sign.logo')}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}