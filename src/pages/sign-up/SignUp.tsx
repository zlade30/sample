import { ReactComponent as Logo } from '@assets/logo.svg';
import { ReactComponent as TopShape } from '@assets/icons/top-shape.svg';
import { ReactComponent as BottomShape } from '@assets/icons/bottom-shape.svg';
import { ReactComponent as Facebook } from '@assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '@assets/icons/twitter.svg';
import { ReactComponent as Github } from '@assets/icons/github.svg';
import { ReactComponent as Google } from '@assets/icons/google.svg';
import { CheckboxField, PasswordField, TextField } from '@components/inputs';
import { Button, TextButton } from '@components/buttons';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

export const SignUp = () => {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        email: yup.string().email().required('* this is a required field'),
        password1: yup.string().required('* this is a required field'),
        password2: yup.string().required('* this is a required field'),
    });

    const handleSubmit = (data: RegisterFormProps) => {
        console.log(data);
        navigate('/sign-in');
    };

    const formik: any = useFormik({
        initialValues: { email: '', password1: '', password2: '' },
        validationSchema: schema,
        onSubmit: handleSubmit,
    });

    return (
        <div className="w-full h-screen bg-body-bg-light flex items-center justify-center">
            <div className="w-full sm:w-max relative">
                <TopShape className="absolute left-[-60px] top-[-60px] z-[0] hidden sm:block" />
                <BottomShape className="absolute right-[-60px] bottom-[-60px] z-[0] hidden sm:block" />
                <div className="w-full sm:w-[450px] h-screen sm:h-max bg-paper-bg-light p-[48px] flex flex-col items-center rounded-[6px] sm:drop-shadow-gray-light-large z-[1]">
                    <Logo className="size-[100px]" />
                    <div className="w-full flex flex-col gap-2">
                        <h4 className="text-gray-light-text-primary">
                            Adventure starts here 🚀
                        </h4>
                        <p className="body-1 text-gray-light-text-secondary">
                            Make your app management easy and fun!
                        </p>
                    </div>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="space-y-6 w-full mt-6"
                    >
                        <TextField
                            label="Email"
                            name="email"
                            formik={formik}
                            placeholder="Enter your email"
                        />
                        <PasswordField
                            label="Password"
                            name="password1"
                            formik={formik}
                            placeholder="Enter your password"
                        />
                        <PasswordField
                            label="Re-enter Password"
                            name="password2"
                            formik={formik}
                            placeholder="Re-enter your password"
                        />
                        <div className="w-full flex items-center justify-between">
                            <CheckboxField
                                text="I agree to privacy policy & terms"
                                name="remember"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            isActive
                            text="Sign Up"
                            size="small"
                        />
                    </form>
                    <span className="flex items-center gap-2 py-6">
                        <p className="body-1">Already have an account?</p>
                        <TextButton
                            onClick={() => navigate('/sign-in')}
                            text="Sign in instead"
                        />
                    </span>
                    <div className="w-full flex items-center">
                        <div className="flex-grow border-t border-gray-light-extra-divider"></div>
                        <div className="body-1 mx-4">or</div>
                        <div className="flex-grow border-t border-gray-light-extra-divider"></div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-8 py-6">
                        <Facebook className="cursor-pointer" />
                        <Twitter className="cursor-pointer" />
                        <Github className="cursor-pointer" />
                        <Google className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};
