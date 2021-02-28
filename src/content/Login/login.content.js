import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import Button from '@material-ui/core/Button'

import loginSchema from 'utils/validators/loginSchema.validator'

import { fetchToken } from 'redux/actions/auth.action'

import FormWrapper from 'components/forms/formWrapper/formWrapper.component'
import TextField from 'components/inputs/textfields/textfield.component'

const styles = {
  maxWidth: '300px', p: 2
}

const LoginContent = props => {
  const dispatch = useDispatch()
  const router = useHistory()

  const loginBtnClicked = (data) => {
    dispatch(fetchToken({ data, to: '/', router }))
  }

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(loginSchema)
  })
  return (
    <FormWrapper onSubmit={handleSubmit(loginBtnClicked)} styles={styles}>
      <TextField
        type="text"
        error={!!errors?.username}
        name="userId"
        label="User"
        variant="outlined"
        ref={register}
        helperText={errors?.username?.message}
        fullWidth
      />
      <TextField
        type="password"
        error={!!errors?.password}
        name="password"
        label="Password"
        variant="outlined"
        ref={register}
        helperText={errors?.password?.message}
        fullWidth
      />

      <Button type="submit">Submit</Button>

    </FormWrapper>

  )
}

LoginContent.propTypes = {

}

export default LoginContent
