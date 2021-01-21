/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  min-height: 100%; 
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;


const Login:React.FC = () => {
    return (
      <Container>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label">Remember me</label>
            </div>
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
          <p className="forgot-password text-right"> 
            Forgot 
            <button type='button'> password? </button>
          </p>
        </form>
      </Container>
    );
};

export default Login;