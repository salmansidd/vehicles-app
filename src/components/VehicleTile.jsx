import React from 'react';
import styled from 'styled-components';
import moment from 'moment'

import vehicleImage from 'assets/vehicle-default.jpg';
import {theme} from 'theme/theme.js';

const StyledVehicleWrapper = styled.div`
  background: ${theme.colors.grayDark};
  border-radius: 5px;
  box-shadow: 4px 4px 4px -4px ${theme.colors.gray};
`

const StyledVehicleHeader = styled.div`
	background: ${theme.colors.grayDarker};
  text-align: center;
  color: ${theme.colors.white};
  padding: 10px;
`

const StyledVehicleBody = styled.div`
  display: flex;
  flex-wrap: row;
  padding: 10px 15px;
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  padding-bottom: 20px;
`

const VehicleTile = ({ model, licensePlate, vin, color, active, validTill }) => {
  return (
    <StyledVehicleWrapper>
      <StyledVehicleHeader>
          <h5>AUDI {model}</h5>
      </StyledVehicleHeader>
      <StyledVehicleBody>
        <div>
          <StyledImage src={vehicleImage} alt="vehicle" />
          <h6>License Plate: <span>{licensePlate}</span></h6>
          <h6>VIN: <span>{vin}</span></h6>
          <h6>Color: <span>{color && color.charAt(0).toUpperCase() + color.slice(1)}</span></h6>
          <h6>Booking Status: <span>{active ? 'Active' : 'Inactive'}</span></h6>
          <h6>Validity: <span>{moment(validTill).format('MMMM Do YYYY, HH:mm')}</span></h6>
        </div>
      </StyledVehicleBody>
    </StyledVehicleWrapper>
  );
}

export default VehicleTile;
