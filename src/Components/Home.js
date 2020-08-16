import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Weather from "../assests/weather.png";

import Card from "./Common/Card";
import csc from "country-state-city";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import RectangleCard from "./Common/RectangleCard";

const API_KEY = "9a4882ca3e24e11503016cf96e62d615";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      state: [],
      userInputCountry: "",
      userInputState: "",
      error: false,
      visible: false,
      home_temperature:"",
      temperature: "",
      city: "",
      home_location:"",
      country: "",
      error: "",
      home_max_temp:"",
      max: "",
      home_min_temp:"",
      min: "",

    };
    this.onCountryChange = this.onCountryChange.bind(this);
    // this.callAPIforUserQuery = this.callAPIforUserQuery.bind(this);
  }

  onCountryChange(e, value) {
    if (value) {
      this.setState({
        userInputCountry: value.sortname,
      });
    }
  }

  // **************************User entered location function**********************************************
  getWeather = async (e) => {
    const api_url = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.userInputState},${this.state.userInputCountry}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    if (this.state.userInputState && this.state.userInputCountry) {
      console.log(data);
      console.log(this.state.userInputCountry);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        max: data.main.temp_max,
        min: data.main.temp_min,
        error: " ",
        visible:true
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        max: undefined,
        min: undefined,
        error:
          "Please enter a suitable value/give country full name as iso.org",
      });
    }
  };

  // *************************function to fetch current location details ***************************************
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const location_url = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`
        );
        const data = await location_url.json();

        console.log(data.main.temp);
        if (data) {
          this.setState({
            home_temperature: data.main.temp,
            home_location: data.name,
            home_max_temp: data.main.temp_max,
            home_min_temp: data.main.temp_min,
            countries: csc.getAllCountries(),
          });
        }
      });
    } else {
      alert("Sorry, you browser doesn't support this feature.");
    }
    // this.setState({ visible: true });
    console.log(this.state.home_temperature);
  }

  render() {
    return (
      <div class="jumbotron bg-level1">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img className="WeatherGirl" src={Weather} responsive />
          </div>
          <div className="col-lg-6 ">
            <div class="row ">
              <div class="col-lg-4 d-flex justify-content-center">
                {" "}
{/******************************* UserInput Textform (Country) ************************************************/}
                <Autocomplete
                  id="standard-basic"
                  options={this.state.countries}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 200, textAlign: "center" }}
                  defaultValue={this.state.userInputCountry}
                  onChange={this.onCountryChange}
                  renderInput={(params) => (
                    <TextField
                    
                      {...params}
                      id="standard-basic"
                      label="Country"
                      // error={this.state.error}
                      // helperText={this.state.errorMessage}
                    />
                  )}
                />
              </div>

{/******************************* UserInput Textform (City) ************************************************/}

              <div class="col-lg-4 d-flex justify-content-center">
                {" "}
                <TextField
                  style={{ width: 200, textAlign: "center" }}
                  id="standard-basic"
                  label="City"
                  value={this.state.userInputState}
                  onChange={(e, value) => {
                    console.log(e.target.value);
                    this.setState({ userInputState: e.target.value });
                  }}
                />
              </div>
              <div class="col-lg-4 p-4 d-flex justify-content-center">
                {" "}
                <Button onClick={() => this.getWeather()} variant="contained">
                  Submit
                </Button>
              </div>
            </div>
            <div class="row mt-1 ">
              <div
                class={
                  !this.state.visible
                    ? "col-lg-12 d-flex justify-content-center text-center "
                    : "col-lg-6 d-flex justify-content-center text-center "
                }
              >
{/************ Current location weather **********************************************************************/}
                <Card
                  style={!this.state.visible}
                  Header={"Weather in your current Location"}
                  temperature={this.state.home_temperature}
                  location={this.state.home_location}
                  Mintemp={this.state.home_max_temp}
                  Maxtemp={this.state.home_min_temp}
                />
              </div>

{/**************** User input location ************************************************************/}
              {this.state.visible ? (
                <div class="col-lg-6 d-flex justify-content-center  text-center">
                  <Card
                    Header={this.state.userInputCountry}
                    temperature={this.state.temperature}
                    location={this.state.userInputState}
                    Mintemp={this.state.min}
                    Maxtemp={this.state.max}
                  />
                </div>
              ) : (
                <div></div>
              )}
              {this.state.visible ? (
                <RectangleCard
                  temp = {this.state.home_temperature - this.state.temperature}
                  maxTemp={this.state.home_max_temp - this.state.max}
                  minTemp={this.state.home_min_temp - this.state.min}
              
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
