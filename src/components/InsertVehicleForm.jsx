import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from "axios/index";
import PropTypes from 'prop-types';

import { fetchVehicles } from 'api/baseApi.js';
import { BASE_URL } from 'constants.js';
import { theme } from 'theme/theme.js';

const StyledButton = styled.input`
  background: ${theme.colors.grayDarker};
  color: ${theme.colors.white};
  font-weight: bold;
  float: right;
	&:hover {
		background: ${theme.colors.black};
	}
`

const StyledInput = styled.input`
  margin: 10px;
`

/**
 * Initiliaze state values
 */
const defaultValues = {
  id: '',
  licensePlate: '',
  vin: '',
  model: '',
  color: '',
  active: false,
};

const InsertVehicleForm = (props) => {
  /**
   * Manage react states
   */
  const [values, setValues] = useState(defaultValues);

  /**
   * Set values from the user input
   * @param event The event listener
   */
  const onChange = event => {
    const { name, value } = event.target;
    setValues({
        ...values,
        [name]: value,
    });
  };

  /**
   * Submit data via. the POST request
   * @param event The event listener
   */
  const submit = event => {
    event.preventDefault();
    const url = `${BASE_URL}/api/v1/vehicles`;
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Access-Control-Allow-Credentials': true
    };
    axios.post(url, values, headers)
  };

  return (
    <form onSubmit={submit}>
      <StyledInput name='licensePlate' type='text' placeholder='License Plate' value={values.licensePlate} onChange={onChange} />
      <StyledInput name='vin' type='text' placeholder='Vin' value={values.vin} onChange={onChange} />
      <StyledInput name='model' type='text' placeholder='Model' value={values.model} onChange={onChange} />
      <StyledInput name='color' type='text' placeholder='Color' value={values.color} onChange={onChange} /><br />
      <StyledButton type='submit' aria-label='button' value='Send'/>
    </form>
  );
};

InsertVehicleForm.propTypes = {
  fetchVehicles: PropTypes.func.isRequired,
};

export default connect(null, { fetchVehicles })(InsertVehicleForm);