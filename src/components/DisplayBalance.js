import React from 'react'
import { Button, Form, Statistic, size } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function DisplayBalance({title, value, color, size="tiny"}) {
    return (
        <Statistic size={size} color={color}>
        <Statistic.Label style={{textAlign :'left'}} >
          {title}
        </Statistic.Label>
        <Statistic.Value>
          {value}
          </Statistic.Value>
      </Statistic>
    )
}

export default DisplayBalance