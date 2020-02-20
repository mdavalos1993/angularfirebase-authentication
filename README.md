Fork author note:
  - the **main** reason for this fork is to add the **phone auth method with the mandatory reCaptcha verifier** to the example.
  - added the ability to read custom claims (see role in the dashboard). also see the admin script to add the custom role.
  - re-organize the sign in screen.
  - fix the sign-up -> confirm email -> sign-in flow.
  - other fixes.
If you end up using the new stuff I've added in this fork don't forget to leave me a ⭐. Thanks!

![Updated Sign In with Phone Auth](https://github.com/danmincu/angularfirebase-authentication/blob/master/UpdatedSignIn..PNG?raw=true)

![Updated Dash with custom claims](https://github.com/danmincu/angularfirebase-authentication/blob/master/UpdatedDashboard.PNG?raw=true)


## Original article

[Full Angular 7 Firebase Authentication System](https://www.positronx.io/full-angular-7-firebase-authentication-system)

- Sign in with Google
- Sign in with Facebook
- Sign in with username/password
- Sign up with username/password
- Recover forget password
- Send verification mail to a newly created user
- Prevent user to access app dashboard unless email is verified
- Prevent user to access inner pages unless user is not logged In
- Prevent user to access sign in and sign up components when a user is already logged in
- Save user data to localstorage when user is logged in

**If you love this project then show your love by simply sharing this repo with others and don't forget to put a GitHub star ⭐ ! Thanks** :pray:



## Installation Process
Run `npm install` to install all the required dependencies
Add yout Firebase account on your `environment.ts`
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
