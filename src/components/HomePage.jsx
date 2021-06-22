import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '@material-ui/core/CircularProgress';

import { fetchVehicles } from 'api/baseApi.js';
import InsertVehicle from './InsertVehicle';
import VehicleTile from './VehicleTile';
import {theme} from 'theme/theme.js';

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

const StyledLoaderContainer = styled.div`
  max-width: 60px;
  width: 100%;
  margin: 100px auto;
`

const StyledLoader = styled(Loader)`
  color: ${theme.colors.grayLight.main};
`

const VehiclesList = (props) => {
  useEffect(() => {
    props.fetchVehicles();
  }, []); // eslint-disable-line

  const { vehicles, isLoading, vehiclesHaveError } = props;
  const vehiclesTemplate = Object.keys(vehicles).map((key, index) => {
    return <VehicleTile
      key={key}
      model={vehicles[key].model}
      licensePlate={vehicles[key].licensePlate}
      vin={vehicles[key].vin}
      color={vehicles[key].color}
      active={vehicles[key].active}
      validTill={vehicles[key].validTill}
		/>
  });

  return (
    <StyledApp>
      <InsertVehicle />
      {isLoading && !vehiclesHaveError &&
        <StyledLoaderContainer><StyledLoader /></StyledLoaderContainer>}
      <StyledContainer data-hook='vehicles-container'>
        {!isLoading && vehiclesTemplate}
      </StyledContainer>
    </StyledApp>
  );
}

function mapStateToProps({ vehicles, isLoading, vehiclesHaveError }) {
  return { vehicles, isLoading, vehiclesHaveError }
}

VehiclesList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  vehiclesHaveError: PropTypes.bool.isRequired,
  vehicles: PropTypes.object.isRequired,
  fetchVehicles: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchVehicles })(VehiclesList);
