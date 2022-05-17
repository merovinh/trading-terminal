import * as yup from "yup";

let schema = yup.object().shape({
  needPassword: yup.boolean(),
  exchange: yup.string().required("Please select exchange!"),
  name: yup.string().required("Field Name can not be empty!"),
  apiKey: yup.string().required("Field API Key can not be empty!"),
  apiSecret: yup.string().required("Field API Secret can not be empty!"),
  password: yup.string().when("needPassword", {
    is: true,
    then: yup.string().required("This Exchange require password!"),
  }),
});

export default schema;
