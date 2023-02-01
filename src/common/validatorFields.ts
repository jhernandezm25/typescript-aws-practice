class ValidatorFields {
    async validateEmail(email:string) {
        const regex : RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }
}

const validatorFields = new ValidatorFields;
export default validatorFields;