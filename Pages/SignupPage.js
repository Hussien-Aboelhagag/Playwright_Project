export default class SignupPage {
    constructor(page) {
        this.page = page;
        this.UsernameField = page.locator('#sign-username');
        this.PasswordField = page.locator('#sign-password');
        this.SignupSubmitButton = page.getByRole('button', { name: 'Sign up' })
     }

     async signupSteps(username, password) {
        await this.UsernameField.fill(username);
        await this.PasswordField.fill(password);
        await this.SignupSubmitButton.click();
    }
    
}