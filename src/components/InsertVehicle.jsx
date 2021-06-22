import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from 'styled-components'

import InsertVehicleForm from './InsertVehicleForm';
import {theme} from 'theme/theme.js';

const StyledButton = styled(Button)`
  display: block;
  text-align: center;
  background: ${theme.colors.grayDarker};
  max-width: 80vw;
  width: 100%;
  margin: 20px auto;
  height: 50px;
  font-size: 24px;
  border: none;
  &:hover,
  &:focus {
		background: ${theme.colors.black};
	}
`

const StyledCard = styled(Card)`
  width: 81%;
  margin: 0px auto;
`

const StyledCardBody = styled(CardBody)`
  background: ${theme.colors.grayLight};
`

const InsertVehicle = () => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  }

  return (
    <>
      <StyledButton color="primary" onClick={toggle} data-hook='insert-vehicle'>Insert New Vehicle</StyledButton>
      <Collapse isOpen={collapse}>
        <StyledCard>
          <StyledCardBody>
            <InsertVehicleForm />
          </StyledCardBody>
        </StyledCard>
      </Collapse>
    </>
  );
}

export default InsertVehicle;