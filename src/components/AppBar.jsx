import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import UsersIcon from '@material-ui/icons/People';
import styled from 'styled-components';

import logo from 'assets/logo.png';
import {theme} from 'theme/theme.js';

const styles = makeStyles();

const StyledAppBar = styled(AppBar)`
  background-color: ${theme.colors.white};
`

const StyledAppBarLogo = styled.img`
  max-width: 130px;
  margin-left: 16px;
`

const StyledHomeIcon = styled(HomeIcon)`
  font-size: 48px;
  color: ${theme.colors.grayDark};
`

const StyledUsersIcon = styled(UsersIcon)`
  font-size: 48px;
  color: ${theme.colors.grayDark};
`

const StyledUsers = styled.div`
  position: absolute;
  right: 10px;
`

const ButtonAppBar = () => {
  styles();

  return (
    <>
      <StyledAppBar position="static" data-hook='app-bar'>
        <Toolbar>
          <IconButton
            edge="start"
            data-hook='home-button'
          >
				    <Link to={'/'}>
		          <StyledHomeIcon />
		        </Link>
          </IconButton>
          <StyledAppBarLogo src={logo} alt="logo" />
          <StyledUsers>
            <Link to={'/users'}>
              <IconButton
                data-hook='users-button'
              >
                <StyledUsersIcon />
              </IconButton>
            </Link>
          </StyledUsers>
        </Toolbar>
      </StyledAppBar>
    </>
  );
}

export default ButtonAppBar;
