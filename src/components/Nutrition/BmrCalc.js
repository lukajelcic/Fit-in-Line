import React, { Component } from 'react';

class BmrCalc extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            weight: '',
            height: '',
            age: '',
            gender: '',
            activity: '',
            bmr: '',
            calories: Number.to,
            message: '',
            isSubmited: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    calculateBMR = () => {
        if (this.state.gender == "muski") {
            this.setState({ bmr: 87.4 + (13.4 * this.state.weight) + (4.8 * this.state.height) - (5.6 * this.state.age) })
        } else if (this.state.gender == "zenski") {
            this.setState({ bmr: 447.6 + (9.2 * this.state.weight) + (3.1 * this.state.height) - (4.3 * this.state.age) })
        }

        if (this.state.activity == "no-activity") {
            this.setState(prevState => ({
                calories: prevState.bmr * (1.20)
            }))
        } else if (this.state.activity == "small-activity") {
            this.setState(prevState => ({
                calories: prevState.bmr * (1.40)
            }))
        }
        else if (this.state.activity == "good-activity") {
            this.setState(prevState => ({
                calories: prevState.bmr * (1.50)
            }))
        }
        else if (this.state.activity == "intense-activity") {
            this.setState(prevState => ({
                calories: prevState.bmr * (1.70)
            }))
        }
        else if (this.state.activity == "very-intense-activity") {
            this.setState(prevState => ({
                calories: prevState.bmr * (1.90)
            }))
        }

    }

    clearFields = () => {
        this.setState({
            name: '',
            weight: '',
            height: '',
            age: '',
            gender: '',
            activity: '',
            bmr: '',
            calories: '',
            message: ''
        })
        this.closeResult();
    }

    openResult = () => this.setState({ isSubmited: true })
    closeResult = () => this.setState({ isSubmited: false })

    handleSubmit = (e) => {
        this.calculateBMR();
        this.openResult();
        e.preventDefault();
    }

    render() {
        const { isSubmited } = this.state
        return (
            <div className="bmr_wrap row">
                <div className="bmr_form">
                    <form onSubmit={this.handleSubmit}>
                        <h3>BMR Kalkulator</h3>
                        <div className="form-row">
                            <div className="col-sm-12">
                                <label>Ime:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder="Ime i prezime"
                                    required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-sm-6">
                                <label>Tezina:</label>
                                <input
                                    type="text"
                                    name="weight"
                                    className="form-control"
                                    value={this.state.weight}
                                    onChange={this.handleChange}
                                    placeholder="Tezina u kg"
                                    required />
                            </div>
                            <div className="col-sm-6">
                                <label>Visina:</label>
                                <input
                                    type="text"
                                    name="height"
                                    className="form-control"
                                    value={this.state.height}
                                    onChange={this.handleChange}
                                    placeholder="Visina u cm"
                                    required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-sm-12">
                                <label>Godine:</label>
                                <input
                                    type="text"
                                    name="age"
                                    className="form-control"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    placeholder="Broj godina"
                                    required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-sm-6">
                                <label>Pol:</label>
                                <select
                                    className="custom-select"
                                    value={this.state.gender}
                                    className="form-control"
                                    name="gender"
                                    onChange={this.handleChange}
                                    required>
                                    <option value="">-Izaberite pol-</option>
                                    <option value="muski">Muski</option>
                                    <option value="zenski">Zenski</option>
                                </select>
                            </div>

                            <div className="col-sm-6">
                                <label>Nivo aktivnosti:</label>
                                <select
                                    className="custom-select"
                                    className="form-control"
                                    value={this.state.activity}
                                    name="activity"
                                    onChange={this.handleChange}
                                    required>
                                    <option value="">-Izaberite vas nivo aktivnosti-</option>
                                    <option value="no-activity">Bez vezbanja</option>
                                    <option value="small-activity">Vezbanje 1-3 puta nedeljno</option>
                                    <option value="good-activity">Vezbanje 4-5 puta nedeljno</option>
                                    <option value="intense-activity">Intenzivno vežbanje 6-7 puta nedeljno</option>
                                    <option value="very-intense-activity">Veoma intenzivno vežbanje svaki dan</option>
                                </select>
                            </div>

                            <div className="form_btns">
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={this.clearFields}>
                                            Reset
                                            </button>
                                    </div>
                                    <div className="col-sm-6">
                                        <button
                                            type="submit"
                                            className="btn btn-info">
                                            Submit
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="bmr_res">
                    <h3>BMR Rezultat</h3>
                    <small>ovde ce vam se prikazati vas BMR rezultat</small>
                    {isSubmited ?
                        <div className="result">
                            <span>{this.state.bmr}</span>
                            <br />
                        Vas BMR
                        <hr />
                            <span>{this.state.calories}</span>
                            <br />
                        Unositi kalorija po danu
                    </div> : null}
                </div>
            </div>
        )
    }
}

export default BmrCalc;