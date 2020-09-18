import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import logoDark from '../../Image/logo-dark.png';
import facebookIcon from '../../Image/Icon/fb.png';
import googleIcon from '../../Image/Icon/google.png';
import './Login.css';
import { useForm } from 'react-hook-form';
import {
  initializeLogginApp,
  handleGoogleSingIn,
  createUserWithEmailAndPassword,
  signInWithEmailPassword,
  handleFAcebooksignIn,
} from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  initializeLogginApp();
  const [logedInUser, setLogedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    photo: '',
    email: '',
  });

  const googleSingIn = () => {
    handleGoogleSingIn().then((response) => {
      handleResponse(response, true);
    });
  };
  const facebookSingIn = () => {
    handleFAcebooksignIn().then((response) => {
      handleResponse(response, true);
    });
  };

  const onSubmit = (data) => {
    const { LastName, firstName, password, rePassword, email } = data;
    let name = `${firstName}  ${LastName}`;
    setUser({
      isSignedIn: true,
      name: `${name}`,
      photo: '',
      email: `${email}`,
    });

    if (newUser && LastName && rePassword) {
      createUserWithEmailAndPassword(email, password, name).then((response) => {
        handleResponse(response, true);
      });
    }
    if (!newUser && email && password) {
      signInWithEmailPassword(email, password).then((response) => {
        handleSignInResponse(response, true);
      });
    }
  };

  const handleResponse = (response, redirect) => {
    setUser(response);
    setLogedInUser(response);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleSignInResponse = (response, redirect) => {
    setUser(response);
    setLogedInUser(response);
    if (redirect) {
      history.replace(from);
    }
  };

  console.log(logedInUser.displayName);

  return (
    <>
      <Container>
        <Row>
          <Header src={logoDark} className='menu black' />
        </Row>
        <Row className='justify-content-center'>
          <Col md={6}>
            <div className='login-form'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3>{newUser ? 'Create an account' : 'Login'}</h3>
                <Row>
                  {newUser && (
                    <Col sm={12}>
                      <input
                        className={errors.firstName && 'alert-border'}
                        type='name'
                        name='firstName'
                        placeholder='First Name'
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.firstName && (
                        <span className='error-feed'>Enter First Name</span>
                      )}
                    </Col>
                  )}
                  {newUser && (
                    <Col sm={12}>
                      <input
                        className={errors.LastName && 'alert-border'}
                        type='name'
                        name='LastName'
                        placeholder='Last Name'
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.LastName && (
                        <span className='error-feed'>Enter Last Name</span>
                      )}
                    </Col>
                  )}
                  <Col sm={12}>
                    <input
                      className={errors.email && 'alert-border'}
                      type='name'
                      name='email'
                      placeholder='Username or Email'
                      ref={register({
                        required: true,
                        pattern: /\S+@\S+\.\S+/,
                      })}
                    />
                    {errors.email && (
                      <span className='error-feed'>
                        Please provide a valid email address
                      </span>
                    )}
                  </Col>
                  <Col sm={12}>
                    <input
                      className={errors.password && 'alert-border'}
                      type='password'
                      name='password'
                      placeholder='Password'
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.password && (
                      <span className='error-feed'>Password is required</span>
                    )}
                  </Col>

                  {newUser && (
                    <Col sm={12}>
                      <input
                        className={errors.rePassword && 'alert-border'}
                        type='password'
                        name='rePassword'
                        placeholder='Confrim Passowrd'
                        ref={register({
                          required: true,
                          validate: (value) => {
                            return value === watch('password');
                          },
                        })}
                      />
                      {errors.rePassword && (
                        <span className='error-feed'>Password Not Matched</span>
                      )}
                    </Col>
                  )}
                  {user.error && <p className='errorlogin'>{user.error}</p>}
                  {!newUser && (
                    <Col sm={6}>
                      <p>
                        <input type='checkbox' name='remember' />
                        Remember Me
                      </p>
                    </Col>
                  )}

                  {!newUser && (
                    <Col sm={6}>
                      <p className='text-right'>
                        <span>Forgot Password</span>
                      </p>
                    </Col>
                  )}

                  {/* Submit Button */}
                  <Col sm={12}>
                    <input
                      type='submit'
                      value={newUser ? `Create an account` : `Login`}
                    />
                  </Col>
                  <p className='text-center w-100'>
                    {newUser
                      ? `Already have an account?  `
                      : `Don't have an Account?    `}
                    <span onClick={() => setNewUser(!newUser)}>
                      {newUser ? 'Login' : `Create an account`}
                    </span>
                  </p>
                </Row>
              </form>

              <div className='provider-login'>
                <p className='horizontal-row'>
                  <span>or</span>
                </p>
                <button onClick={facebookSingIn} className='api-login'>
                  <img src={facebookIcon} alt='' /> Continue with Facebook
                </button>
                <button onClick={googleSingIn} className='api-login'>
                  <img src={googleIcon} alt='' />
                  Continue with Google
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
