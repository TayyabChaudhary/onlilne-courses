import React, { Component } from 'react';
import '../../../All-Section-Scss/Section2_Scss/Section2.scss';
import FacebookLogin from 'react-facebook-login';
// import $ from 'jquery';
export default class Form extends Component {
  responseFacebook(response) {
    console.log(response);
  }
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      Emailerror: "",
      Passworderror: "",
      ReType: '',
      usernameerror: '',
      firstNameerror: "",
      lastnameerror: "",
    }
  }
  handleusernamechange = event => {
    this.setState({
      username: event.target.value
    })
  }
  emailchange = event => {
    this.setState({
      email: event.target.value
    });
  }
  firstNamechange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
  lastNamechange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
  passwordchange = event => {
    this.setState({
      password: event.target.password
    })
  }
  ReType = event => {
    this.setState({
      ReType: event.target.ReType
    })
  }
  valid() {
    if (!this.state.firstName.includes("name")) {
      this.setState({
        firstNameerror: "Your FirstName Is Error",
      })
    }
    if (!this.state.lastName.includes("name")) {
      this.setState({
        lastnameerror: "Your LastName Is Error",
      })
    }
    if (!this.state.username.includes("name")) {
      this.setState({
        usernameerror: "Your Username Is Error",
      })
    }
    if (!this.state.email.includes("@")) {
      this.setState({
        Emailerror: "Your Email Was Error",
      })
    }
    if (!this.state.email.includes("@") && this.state.Passworderror.length < 10) {
      this.setState({
        Passworderror: "Please Enter Your Password",
      })
    }
    if (!this.state.email.includes("@") && this.state.Passworderror.length < 10) {
      this.setState({
        ReType: "Please Enter Your ReType Password",
      })
    }
    else if (!this.state.email.includes("@")) {
      this.setState({
        Emailerror: "Enter You Email",
      })
    }
    else if (!this.state.Passworderror.length < 10) {
      this.setState({
        Passworderror: "Password Must Be At least 10 Digits",
      })
    }

    else {
      return false;
    }

  }
  submit() {
    this.setState({
      password: ""
    })
    if (this.valid()) {
      alert("Your Form Has Submitted")
    }
  }
  // End Form Fanctionality///
  render() {
    return (
      <div>
        <div className="background-image">
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h1 className="is-size-1 has-text-white has-text-weight-bold" style={{ paddingTop: "1.5em" }}>
                    Your relationship with middle leaders is crucia
                     </h1>
                  <p className="is-size-5">
                    If they get the right balance of support and challenge from you, this will act as a model for what you need them to do with the individual members of their team. Too much support, and people don’t always achieve all they can
                     </p>
                  <button className="button has-background-black-bis has-text-white is-medium" style={{ marginTop: "30px", border: "none" }}>
                    Get Started Your Learning
                     </button>
                </div>
                <div className="column">
                  <div>
                    <div className="section">
                      <div className="container border-darken">
                        <div className="title is-size-2">Sign Up</div>
                        <div className="subtitle">With Your Email</div>
                        <form id="register-form">
                          <div className="field">
                            <label className="label" For="username">Username</label>
                            <div className="control has-icons-left">
                              <input className="input" type="text" placeholder=" Enter Your Name" name="username" value={this.state.username} onChange={this.handleusernamechange} /> <span class="icon is-left"><i class="fa fa-user"></i></span>
                              <p style={{ color: "red" }}>{this.state.usernameerror}</p>
                            </div>
                            <label className="label" For="email">Email</label>
                            <div className="control has-icons-left">
                              <input className="input" type="email" placeholder=" Enter Your Email" name="email" value={this.state.email} onChange={this.emailchange} /><span class="icon is-left"><i class="fa fa-envelope"></i></span>
                              <p style={{ color: "red" }}>{this.state.Emailerror}</p>
                            </div>
                            <div className="columns row-one">
                              <div className="column">
                                <label className="label" For="firstName" >First Name</label>
                                <div className="control">
                                  <input className="input" type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.firstNamechange} />
                                  <p style={{ color: "red" }}>{this.state.firstNameerror}</p>
                                </div>
                              </div>
                              <div className="column">
                                <label className="label" For="lastName">Last Name</label>
                                <div className="control">
                                  <input className="input" type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.lastNamechange} />
                                  <p style={{ color: "red" }}>{this.state.lastnameerror}</p>
                                </div>
                              </div>
                            </div>
                            <div className="columns">
                              <div className="column">
                                <label className="label" For="password">Password</label>
                                <div className="control has-icons-left">
                                  <input className="input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordchange} />
                                  <p style={{ color: "red" }}>{this.state.Passworderror}</p>
                                  <span id="message"></span>
                                  <span class="icon is-left"><i class="fa fa-lock is-size-5"></i></span>
                                </div>
                              </div>
                              <div className="column">
                                <label className="label" For="retypePassword">Re-Type Password</label>
                                <div className="control has-icons-left">
                                  <input className="input" type="password" placeholder="Confirm Password" name="retypePassword" value={this.state.ReType} onChange={this.ReType} />
                                  <p style={{ color: "red" }}>{this.state.ReType}</p>
                                  <span id="message"></span>
                                  <span class="icon is-left"><i class="fa fa-key is-size-5"></i></span>
                                </div>
                              </div>
                            </div>
                            <div className="field is-grouped">
                              <div className="control">
                             <button className="button is-medium has-background-grey-darker has-text-white" title="If You Register Account Then Your Account Is Safe" onClick={() => this.submit()}>Register Account</button>
                              
                              </div>
                              <FacebookLogin
        appId="146120746806154        "
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends,user_actions.books"
        callback={this.responseFacebook}
      />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
