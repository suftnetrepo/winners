const userValidator = {
  rules: {
    first_name: [
      {
        pattern: /^.+$/,
        message: 'first name is required'
      },
      {
        pattern: /^.{0,50}$/,
        message: 'first name must not be more than 50 characters'
      }
    ],
    last_name: [
      { pattern: /^.+$/, message: 'last name is required' },
      {
        pattern: /^.{0,50}$/,
        message: 'last name must not be more than 50 characters'
      }
    ],
    email: [
      { pattern: /.+/, message: 'email address is required' },
      {
        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Please enter a valid email address'
      },
      {
        pattern: /^.{0,50}$/,
        message: 'email address must not be more than 50 characters'
      }
    ],
    mobile: [
      { pattern: /^.+$/, message: 'mobile is required' },
      {
        pattern: /^.{0,20}$/,
        message: 'Please enter a valid mobile number'
      },
      {
        pattern: /^.{0,50}$/,
        message: 'mobile number must not be more than 20 characters'
      }
    ],
    role: [{ pattern: /^.+$/, message: 'role is required' }]
  },
  reset:()=> {
    return {
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      user_status: false,
      role: '',
      visible: ''
    }
    
  },
  fields: {
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    user_status: false,
    role: '',
    visible: ''
  }
};

export { userValidator };
