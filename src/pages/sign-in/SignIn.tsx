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

export const SignIn = () => {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        email: yup.string().email().required('Email is required'),
        password: yup.string().required('Password is required'),
    });

    const handleSubmit = (data: LoginFormProps) => {
        console.log(data);
        navigate('/');
    };

    const formik: any = useFormik({
        initialValues: { email: '', password: '' },
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
                            Welcome to Tenant Express 👋🏻
                        </h4>
                        <p className="body-1 text-gray-light-text-secondary">
                            Please sign-in to your account and start the
                            adventure
                        </p>
                    </div>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="space-y-6 w-full mt-6"
                    >
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            formik={formik}
                            placeholder="Enter your email"
                        />
                        <PasswordField
                            label="Password"
                            placeholder="Enter your password"
                            name="password"
                            formik={formik}
                        />
                        <div className="w-full flex items-center justify-between">
                            <CheckboxField name="remember" text="Remember Me" />
                            <TextButton text="Forgot Password?" />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            isActive
                            text="Sign In"
                            size="small"
                        />
                    </form>
                    <span className="flex items-center gap-2 py-6">
                        <p className="body-1">New on our platform?</p>
                        <TextButton
                            onClick={() => navigate('/sign-up')}
                            text="Create an account"
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
