import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  amount: Yup.string().required().label('Voucher amount'),
  description: Yup.string().label('Description'),
})

export default {
  validationSchema,
}
