import React, { Component } from 'react'
import './styles.css'
import { Grid, Image, Card } from 'semantic-ui-react'
import image1 from '../../../images/image1.jpg'
import image2 from '../../../images/image2.jpg'
import image3 from '../../../images/image3.jpg'
import image4 from '../../../images/image4.jpg'
import image5 from '../../../images/image5.jpg'
import image6 from '../../../images/image6.jpg'
import { navigate } from 'gatsby'

class PredictedTeam extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="wrapper">
        <div className="teamprediction">
          <div className="con">
            <div className="card">
              <img src={image1} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Evghenii Ghimazitdinov</b>
                </h4>
                <p>@evgimov</p>
              </div>
            </div>

            <div className="card">
              <img src={image2} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Miguel Ruiz</b>
                </h4>
                <p>@migzruiz</p>
              </div>
            </div>

            <div className="card">
              <img src={image3} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Scott Iwako</b>
                </h4>
                <p>@iwakoscott</p>
              </div>
            </div>
          </div>

          <div className="con">
            <div className="card">
              <img src={image4} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Lena Ryoo</b>
                </h4>
                <p>@lena</p>
              </div>
            </div>

            <div className="card">
              <img src={image5} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Sarmishta Burujupalli </b>
                </h4>
                <p>@Sarmishta</p>
              </div>
            </div>
            <div className="card">
              <img src={image6} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Gerardo Fernandez</b>
                </h4>
                <p>@gerardofer</p>
              </div>
            </div>
          </div>
          <div className="buttonss">
            <div>
              <input
                onClick={() => navigate('/app/group-form')}
                type="button"
                className="btn"
                defaultValue="FILL GROUP FORM"
              />
            </div>
            <div>
              <input
                type="button"
                className="btn"
                defaultValue="START GROUP CHAT"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PredictedTeam
