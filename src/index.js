import { useLayoutEffect, useCallback } from 'react'

export default function useScrollToError(formEl) {
  if (!formEl) {
    throw new Error(`
  You need to pass a parent ref to the useScrollToError hook like:
      import React, { useRef } from 'react
      import useScrollToError from 'react-scroll-to-error'

      const formEl = useRef(null)
      useScrollToError(formEl)
      …
      <form ref={formEl} …
  `)
  }

  const handleSubmit = useCallback(() => {
    if (!formEl.current.checkValidity()) {
      const invalidEl = formEl.current.querySelector(':invalid')
      if (!invalidEl) {
        throw new Error(
          'You need to pass a ref that is PARENT of failing fields'
        )
      }
      invalidEl.scrollIntoView()
    }
  }, [formEl])

  useLayoutEffect(() => {
    formEl.current.addEventListener('submit', handleSubmit, false)
    return () => {
      formEl.removeEventListener('submit', handleSubmit, false)
    }
  }, [formEl, handleSubmit])
}
