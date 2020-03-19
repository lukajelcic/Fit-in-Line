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
                            title="Marko"
                            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                    </div>

                    <div className="imagecon">
                        <SliderBox
                            title="Una"
                            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                    </div>

                    <div className="imagecon">
                        <SliderBox
                            title="Luka"
                            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                    </div>
                    <div className="imagecon">
                        <SliderBox
                            title="Janko"
                            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                    </div>
                    <div className="imagecon">
                        <SliderBox
                            title="Fit"
                            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default QuickLinks