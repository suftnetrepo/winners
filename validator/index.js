import Validator from 'fastest-validator';

function loginValidator(data) {
    const validator = new Validator();
    const schema = {
        email: { type: 'email' },
    };
    return validator.validate(data, schema);
}

function signOnValidator(data) {
    const validator = new Validator();
    const schema = {
        email: { type: 'email' },
        password: { type: 'string', min: 6 },
    };
    return validator.validate(data, schema);
}

function passwordValidator(data) {
    const validator = new Validator();
    const schema = {
        password: { type: 'string', min: 6 },
    };
    return validator.validate(data, schema);
}

function userValidator(data) {
    const validator = new Validator();
    const schema = {
        email: { type: 'email', empty: false, max: 50 },
        first_name: { type: 'string', empty: false, max: 50 },
        last_name: { type: 'string', empty: false, max: 50 },
        mobile: { type: 'string', empty: false, max: 50 },
    };
    return validator.validate(data, schema);
}

function userEditValidator(data) {
    const validator = new Validator();
    const schema = {
        first_name: { type: 'string', empty: false, max: 50 },
        last_name: { type: 'string', empty: false, max: 50 },
        mobile: { type: 'string', empty: false, max: 50 },
    };
    return validator.validate(data, schema);
}

function documentValidator(data) {
    const validator = new Validator();
    const schema = {
        document_name: { type: 'string', empty: false, max: 50 },
        document_type: { type: 'string', empty: false, max: 50 }       
    };
    return validator.validate(data, schema);
}

function teamValidator(data) {
    const validator = new Validator();
    const schema = {
        name: { type: 'string', empty: false, max: 100 },    
    };
    return validator.validate(data, schema);
}

function projectValidator(data) {
    const validator = new Validator();
    const schema = {
        name: { type: 'string', empty: false, max: 250 },
        manager: { type: 'string', empty: false, max: 50 },
        stakeholder: { type: 'string', empty: false, max: 50 },
        status: { type: 'string', empty: false, max: 50 },
        priority: { type: 'string', empty: false, max: 50 },
        description: { type: 'string', empty: true, max: 5000 },
    }; 
    return validator.validate(data, schema);
}

function taskValidator(data) {
    const validator = new Validator();
    const schema = {
        name: { type: 'string', empty: false, max: 250 },
        status: { type: 'string', empty: false, max: 50 },
        priority: { type: 'string', empty: false, max: 50 },
        description: { type: 'string', empty: true, max: 5000 },
    };
    return validator.validate(data, schema);
}

function integratorValidator(data) {
    const validator = new Validator();
    const schema = {
        email: { type: 'email', empty: false, max: 50 },
        name: { type: 'string', empty: false, max: 50 },
        subscriptionId: { type: 'string', empty: false},
        priceId: { type: 'string', empty: false },
        stripeCustomerId: { type: 'string', empty: false },
        mobile: { type: 'string', empty: false, max: 50 },
    };
    return validator.validate(data, schema);
}

function integratorUpdateValidator(data) {
    const validator = new Validator();
    const schema = {
        email: { type: 'email', empty: false, max: 50 },
        name: { type: 'string', empty: false, max: 50 },        
        mobile: { type: 'string', empty: false, max: 50 },
    };
    return validator.validate(data, schema);
}

function codeValidator(data) {
    const validator = new Validator();
    const schema = {
        email: { type: 'email' },
        code: { type: 'string', min: 6, max: 6 },
    };
    return validator.validate(data, schema);
}

export { userEditValidator, integratorUpdateValidator,taskValidator, projectValidator, teamValidator, documentValidator, integratorValidator, passwordValidator, signOnValidator, loginValidator, userValidator, codeValidator };
