import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fetchUsers } from 'api/baseApi.js';
import {theme} from 'theme/theme.js';
import UserInfo from './UserInfo';

const StyledApp = styled.div`
  min-height: 0;
  display: inline-block;
  position: relative;
  margin: 50px 0;
  color: ${theme.colors.white};
  width: 100%;
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  width: 81%;
  margin: 1rem auto;
	@media (max-width: 870px) {
	  grid-template-columns: 1fr;
	}
	@media (max-width: 480px) {
	  grid-template-columns: 1fr;
	}
`

const StyledSearch = styled.div`
  float: right;
  padding: 10px;
`

const UsersList = (props) => {

  useEffect(() => {
    props.fetchUsers();
  }, []); // eslint-disable-line

  const { users } = props;
  const userTemplate = Object.keys(users).map((key, index) => {
    return <UserInfo
      key={key}
      firstName={users[key].firstName}
      lastName={users[key].lastName}
      birthday={users[key].birthday}
      email={users[key].email}
      id={users[key].id}
		/>
  });

  return (
    <>
      <StyledSearch>
        <label>Search User by Last Name:</label>
        <input type="search" />
        <button>Search</button>
      </StyledSearch>
      <StyledApp>
        <StyledContainer data-hook='vehicles-container'>
          {userTemplate}
        </StyledContainer>
      </StyledApp>
    </>
  );
}

function mapStateToProps({ users }) {
  return { users }
}

UsersList.propTypes = {
  users: PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);
