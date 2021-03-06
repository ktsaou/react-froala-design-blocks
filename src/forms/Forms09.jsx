import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Forms09 extends Component {
  render() {
    return <section className="fdb-block bg-gray">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12  col-md-10 col-lg-8 col-xl-6 text-center">
        <img alt="image" height="40" src="./imgs/img_round.svg" />
        <h1>Never miss an update</h1>
        <p className="h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
        <div className="input-group mt-4 mb-4">
          <input type="text" className="form-control" placeholder="Enter your email address" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">Submit</button>
          </div>
        </div>
        <p className="h5"><em>*Your email address is safe with us. We never share your email address.</em></p>
      </div>
    </div>
  </div>
</section>

  }
}

export default Forms09
