import * as yup from 'yup'

const LoginSchema = yup.object().shape({
  userId: yup.string().trim().max(50, 'too long').required('Required'),
  password: yup.string().trim().min(3, 'too short').max(20, 'too long').required('required')
})

export default LoginSchema
