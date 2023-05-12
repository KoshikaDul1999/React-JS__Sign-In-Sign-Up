import React from "react";
import * as Components from './Components';

function App(){
  const [signIn, toggle] = React.useState(true);
  return(
    <Components.Container>

      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type='text' placeholder='Name' />
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign In</Components.Title>
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signIn={signIn}>
        <Components.LeftOverLayPanel signinIn={signIn}>
          <Components.Title>Welcome Back!</Components.Title>
          <Components.Paragraph>
            To keep connected with us please login with your personal info
          </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
        </Components.LeftOverLayPanel>

        <Components.RighttOverLayPane signinIn={signIn}>
          <Components.Title>Hello, Admin!</Components.Title>
          <Components.Paragraph>
            Enter Your personal details and start journey with us
          </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
        </Components.RighttOverLayPane>

        </Components.Overlay>
      </Components.OverlayContainer>

    </Components.Container>
  )
}

export default App;
