import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances(){
    return(
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="Income" value="1245" color='green' />
              </Grid.Column>
            <Grid.Column>
  
            <DisplayBalance title="Expenses" value="1383.3"  color="red"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances