import { useState, useEffect } from 'react'
import { notification } from 'antd'
import axios from 'axios'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

const useForm = validate => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [shouldSubmit, setShouldSubmit] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Success',
      description: 'Your message has been sent!',
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setErrors(validate(values))
    setSubmitting(true)
    // Your url for API
    const url = 'https://formspree.io/f/meqpwbpr'
    if (Object.keys(values).length === 3) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setSubmitting(false)
          setShouldSubmit(true)
        })
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues(initialValues)
      openNotificationWithIcon('success')
    }
  }, [errors, shouldSubmit])

  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
    setErrors(errors => ({ ...errors, [event.target.name]: '' }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    submitting,
  }
}

export default useForm
