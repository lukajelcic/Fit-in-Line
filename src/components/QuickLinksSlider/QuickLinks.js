import React from 'react';

import './quickLinks.css'
import SliderBox from './SliderBox';

class QuickLinks extends React.Component {
    render() {
        return (
            <div className="linksSlider">

                <div className="sliderChild">
                    <div className="imagecon">
                        <SliderBox
                            title="Fit Plate"
                            content="Dinamičan tip treninga za samo 30 minuta! Kombinacija vežbi, istezanja i masaže uz vibraciju. Više informacija click na link"
                        />
                    </div>

                    <div className="imagecon">
                        <SliderBox
                            title="Fit fast"
                            content=" Dovedite svoje telo u vrhunsku formu za tri meseca uz redovnu fizičku aktivnost i izbalansiranu ishranu. Tromesečni paket treninga i plana ishrane koji će vam pomoći da ostvarite željeni cilj . Više informacija možete dobiti pozivom na broj  br.telefona"
                        />
                    </div>

                    <div className="imagecon">
                        <SliderBox
                            title="Fit eat"
                            content="Individualni plan ishrane na osnovu merenja i vaših ciljeva! Više informacija  click na link"
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default QuickLinks