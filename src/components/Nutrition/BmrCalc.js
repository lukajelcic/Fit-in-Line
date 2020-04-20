import React, { Component } from 'react';

class BmrCalc extends Component {
    constructor() {
        super();
        this.state = {
            age: '',
            weight: '',
            height: '',
            gender: '',
            bmr: 0,
            activity:'',
            message: ''
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
        let maleNum = 87.4;
        let femaleNum = 447.6;
        let maleBmr = maleNum + (13.4 * this.state.weight) + (4.8 * this.state.height) - (5.6 * this.state.age);
        let femaleBmr = femaleNum + (9.2 * this.state.weight) + (3.1 * this.state.height) - (4.3 * this.state.age);

        if(this.state.gender == 'male' && this.state.activity == 'no-activity'){
            this.setState({bmr:maleBmr + 250})
        }else if(this.state.gender == 'male' && this.state.activity == 'small-activity'){
            this.setState({bmr:maleBmr + 500})
        }else if(this.state.gender == 'male' && this.state.activity == 'good-activity'){
            this.setState({bmr:maleBmr + 600})
        }else if(this.state.gender == 'male' && this.state.activity == 'intense-activity'){
            this.setState({bmr:maleBmr + 700})
        }

        if(this.state.gender == 'female' && this.state.activity == 'no-activity'){
            this.setState({bmr:femaleBmr + 250})
        }else if(this.state.gender == 'female' && this.state.activity == 'small-activity'){
            this.setState({bmr:femaleBmr + 500})
        }else if(this.state.gender == 'female' && this.state.activity == 'good-activity'){
            this.setState({bmr:femaleBmr + 600})
        }else if(this.state.gender == 'female' && this.state.activity == 'intense-activity'){
            this.setState({bmr:femaleBmr + 700})
        }
        this.setState({message:'kalorija vam je potrebno po danu!'})
    }

    // checkActivity = () =>{
    //     if(this.state.activity == 'no-activity') {
    //         this.setState({bmr:this.state.bmr + 250})
    //     }else if(this.state.activity == 'small-activity' ){
    //         this.setState({bmr:this.state.bmr + 500})
    //     }else if(this.state.activity == 'good-activity'){
    //         this.setState({bmr:this.state.bmr+600})
    //     }else if(this.state.activity == 'intense-activity'){
    //         this.setState({bmr:this.state.bmr + 700})
    //     }
    // }

    clearFields =()=>{
        this.setState({
            age: '',
            weight: '',
            height: '',
            gender: '',
            bmr: '',
            message: '',
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        this.calculateBMR();
    }

    render() {
        return (
            <div className="container-fluid">

                <form onSubmit={this.handleSubmit}>
                    <legend>BMR Kalkulator</legend>
                    <div className="form-group">
                        <label>Tezina:</label>
                        <input type="text"
                            name="weight"
                            className="form-control"
                            value={this.state.weight}
                            size="20"
                            placeholder="Uneti tezinu u kg"
                            onChange={this.handleChange}
                            required />
                    </div>

                    <div className="form-group">
                        <label>Visina:</label>
                        <input type="text"
                            name="height"
                            className="form-control"
                            value={this.state.height}
                            size="20"
                            placeholder="Uneti visinu u cm"
                            onChange={this.handleChange}
                            required />
                    </div>

                    <div className="form-group">
                        <label>Godine:</label>
                        <input type="text"
                            name="age"
                            className="form-control"
                            value={this.state.age}
                            size="20"
                            placeholder="Uneti broj godina"
                            onChange={this.handleChange}
                            required />
                    </div>

                    <select className="custom-select"
                    value={this.state.gender}
                    name="gender"
                    onChange={this.handleChange}
                    >
                        <option value="">-Izaberite pol-</option>
                        <option value="male">Muski</option>
                        <option value="female">Zenski</option>
                        
                    </select>

                    <select className="custom-select"
                    value={this.state.activity}
                    name="activity"
                    onChange={this.handleChange}
                    >
                        <option value="">-Izaberite vas nivo aktivnosti-</option>
                        <option value="no-activity">Bez vezbanja</option>
                        <option value="small-activity">Vezbanje 1-3 puta nedeljno</option>
                        <option value="good-activity">Vezbanje 4-5 puta nedeljno</option>
                        <option value="intense-activity">Intenzivno vežbanje 6-7 puta nedeljno</option>
                    </select>

                    <div className="form-group">
                        <label>BMR:</label>
                        <input type="text"
                            name="bmr"
                            className="form-control"
                            value={this.state.bmr} 
                            placeholder="Rezultat-BMR"
                            readOnly />
                            <strong>{this.state.message}</strong>
                    </div>

                    <button type="button" className="btn btn-danger" onClick={this.clearFields}>Reset</button>
                    <button type="submit" className="btn btn-primary">Izracunaj BMR</button>
                    <br />
                </form>
            </div>
        )
    }
}

export default BmrCalc;