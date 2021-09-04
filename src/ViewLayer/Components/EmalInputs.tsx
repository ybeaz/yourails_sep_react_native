import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { Input } from '../Components/Input'
import { Button } from '../Components/Button'

interface EmalInputsArgs {
  documentID: string
}

export const EmalInputs: React.FunctionComponent<EmalInputsArgs> = props => {
  const { documentID } = props

  const store = useSelector((store2: IRootStore) => store2)

  const {
    documents,
    forms: { sendTo, sendCc },
  } = store

  const documentsLen = documents.length
  let documentDefault = {
    meta: {
      email: '',
      isSendingBcc: false,
    },
  }
  const {
    meta: { email: emailBcc = '', isSendingBcc = false },
  } = (documentsLen && documents[documentsLen - 1]) || documentDefault

  const inputEmailToProps = {
    classAdded: 'Input_email',
    type: 'text',
    placeholder: 'email...',
    typeEvent: 'ONCHANGE_EMAIL_TO',
    storeFormProp: 'sendTo',
  }

  const inputEmailCcProps = {
    classAdded: 'Input_email',
    type: 'text',
    placeholder: 'email cc...',
    typeEvent: 'ONCHANGE_EMAIL_CC',
    storeFormProp: 'sendCc',
  }

  const buttonForwardProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdForward',
    action: {
      typeEvent: 'SEND_EMAIL_DOCUMENT',
      data: { documentID, sendTo, sendCc, emailBcc, isSendingBcc },
    },
  }

  return (
    <div className='EmalInputs'>
      <form className='_form'>
        <div className='_group'>
          <label className='_label'>Email to send document*</label>
          <Input {...inputEmailToProps} />
        </div>
        <div className='_group'>
          <label className='_label'>Email CC</label>
          <Input {...inputEmailCcProps} />
        </div>
        <div className='_buttons'>
          {/* <Button {...buttonCancelProps} /> */}
          <Button {...buttonForwardProps} />
        </div>
      </form>
    </div>
  )
}
