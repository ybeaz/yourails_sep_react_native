import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CarouselQuestions } from './CarouselQuestions'
import { handleEvents } from '../Hooks/handleEvents'
import { getCurrentCourseModule } from '../../Shared/getCurrentCourseModule'
import { RootStore } from '../../@types/RootStore'
import { CheckRadioGroup } from './CheckRadioGroup'
import { Button } from './Button'
import { getPrintScreenAsPdf } from '../../Shared/getPrintScreenAsPdf'

interface IQuestionColumn {
  contentID: string
}

export const QuestionColumn: Function = (): JSX.Element => {
  const store = useSelector((store: RootStore) => store)
  const { courses } = store
  const currentCourseModule = getCurrentCourseModule(courses)

  const {
    capture,
    courseID,
    moduleID,
    questions,
    captureCourse,
    descriptionCourse,
    meta,
  } = currentCourseModule

  // console.info('QuestionColumn [26]', { currentCourseModule })

  const buttonContinueProps = {
    icon: 'MdForward',
    icon2: 'HiOutlineAcademicCap',
    classAdded: 'Button_MdForward',
    handleEvents,
    action: {
      typeEvent: 'OPEN_MODAL_GET_SCORES',
      data: {},
    },
  }

  return (
    <div className='QuestionColumn'>
      <CarouselQuestions />
      {questions.length ? (
        <div className='QuestionColumn__ok'>
          <Button {...buttonContinueProps} />
        </div>
      ) : null}
    </div>
  )
}
