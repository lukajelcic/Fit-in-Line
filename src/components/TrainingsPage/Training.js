import React, { Component } from 'react';

import TrainingType from '../TrainingTypes/TrainingType';
import types from '../TrainingTypes/types';

import '../TrainingTypes/TrainingType.css';
import TrainingHead from './TrainingHead';
import TrainingContent from './TrainingContent';

class Training extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainingTypes: types
        }
    }
    render() {
        const typeItems = this.state.trainingTypes.map(item => <TrainingType key={item.id} item={item} />)
        return (
            <main className="page-head" style={{ width: '100%', margin: '0', position: 'static' }}>
                <div className="background"></div>
                <TrainingHead />
                <TrainingContent
                    h1="Treninzi za svakog"
                    h2="Mnoštvo različitih fitness treninga!"
                    text1="Ethnogym je fitnes centar koji vas uvodi u jedan novi način treniranja. Odlična atmosfera na grupnim treninzima i u teretani je ono što čini Ethnogym prepoznatljivim!
                        Danas je Ethnogym tim sastavljen od najboljih specijalista za fitnes u svakom segmentu grupnih treninga, a na raspolaganju vam stoje i sertifikovani personalni treneri za individualni rad ili rad u manjim grupama (Funkcionalni trening)."
                    text2="Zato, ne oklevajte i slobodno nam se pridružite, rešenje za Vas je ETHNOGYM, odličan način da provedete svoje vreme i ujedno održite ili popravite svoje zdravlje!"
                />
                <hr style={{ width: '90%' }}></hr>

                <h3 className="types-title">Sve vrste <span>treninga</span></h3>
                <div className="training-wrapper">
                    <div className="main-training">
                        {typeItems}
                    </div>
                </div>
            </main>
        )
    }
}

export default Training;
