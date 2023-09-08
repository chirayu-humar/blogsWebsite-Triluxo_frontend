import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import React from 'react'
import './index.css'

class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    emailId: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({emailId: event.target.value})
  }

  onSubmitSuccess = data => {
    const {history} = this.props
    history.replace('/login')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password, name, emailId} = this.state
    const userDetails = {username, password, emailId, name}
    const url = 'https://chirayu-blog.onrender.com/user/register'
    console.log(userDetails)
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers:{
        'Content-Type': 'application/json',
      }
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderNameField = () => {
    const {name} = this.state

    return (
      <>
        <label className="input-label" htmlFor="text">
          Name
        </label>
        <input
          type="text"
          id="text"
          className="username-input-field"
          value={name}
          onChange={this.onChangeName}
          placeholder="Name"
        />
      </>
    )
  }

  renderEmailField = () => {
    const {emailId} = this.state

    return (
      <>
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="username-input-field"
          value={emailId}
          onChange={this.onChangeEmail}
          placeholder="email"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ecomercewebsite-1fe43.appspot.com/o/frontendImages%2Fnxt-trendz-logo-img.png?alt=media&token=caaf8516-314f-4adc-b1e5-6af108b7409e"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ecomercewebsite-1fe43.appspot.com/o/frontendImages%2Fnxt-trendz-login-img.png?alt=media&token=0e7a73eb-d371-4ddc-8995-90443266836a"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecomercewebsite-1fe43.appspot.com/o/frontendImages%2Fnxt-trendz-logo-img.png?alt=media&token=caaf8516-314f-4adc-b1e5-6af108b7409e"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderNameField()}</div>
          <div className="input-container">{this.renderEmailField()}</div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default SignUpForm