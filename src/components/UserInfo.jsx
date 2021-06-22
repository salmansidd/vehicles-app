import React from 'react';
import styled from 'styled-components';
import moment from 'moment'

import user from 'assets/user.png';
import {theme} from 'theme/theme.js';

const StyledVehicleWrapper = styled.div`
  background: ${theme.colors.grayDark};
  border-radius: 5px;
  box-shadow: 4px 4px 4px -4px ${theme.colors.gray};
`

const StyledVehicleBody = styled.div`
  display: flex;
  flex-wrap: row;
  padding: 20px 15px;
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  padding: 10px 70px;
`
StyledImage.displayName = 'StyledImage'

const UserInfo = ({ firstName, lastName, birthday, email, id }) => {
  return (
    <StyledVehicleWrapper>
      <StyledVehicleBody>
        <div>
          <StyledImage src={user} alt="user" />
          <h6>Name: <span>{firstName} {lastName}</span></h6>
          <h6>Email: <span>{email}</span></h6>
          <h6>Birthday: <span>{moment(birthday).format('MMMM Do YYYY')}</span></h6>
          <h6>User ID: <span>{id}</span></h6>
        </div>
      </StyledVehicleBody>
    </StyledVehicleWrapper>
  );
}

export default UserInfo;
