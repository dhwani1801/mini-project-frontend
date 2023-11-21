import { RegistrationLayout } from "../../layouts";
import { RegisterLayoutBody } from '../../components/register'
const Register = () => {
    return (
        <RegistrationLayout>
            <RegisterLayoutBody
                title="Register"
                description="<p>
							Welcome to <strong> MINI PROJECT! </strong>Please Enter your
							Details.
						</p>">
            </RegisterLayoutBody>
        </RegistrationLayout>
    )

}

export default Register;