import React from 'react'
import { Button, Form} from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm () {
    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width={12} label="Description" placeholder="New Shinny"></Form.Input>
          <Form.Input icon='dollar' iconPosition='left' width={4} label="Value" placeholder="$200"></Form.Input>
        </Form.Group>
       <ButtonSaveOrCancel />
      </Form>

    )
}

export default NewEntryForm