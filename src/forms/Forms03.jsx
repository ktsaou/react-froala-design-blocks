import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Forms03 extends Component {
  render() {
    return <section className="fdb-block">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10 col-xl-8 text-center">
        <div className="row">
          <div className="col">
            <h1>Register</h1>
            <p className="h3">When she reached the first hills, she had a last view back on the skyline of her hometown.</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-5 mt-4">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="col-12 col-md-5 mt-4">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="col-12 col-md-2 mt-4">
            <button className="btn btn-primary" type="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Forms03
