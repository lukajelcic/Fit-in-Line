import React, { Component } from 'react';
import NutritionHead from './NutritionHead';
import './nutrition.css';
import NutritionContent from './NutritionContent';
// import MainContent from '../MainContent/MainContent'

class NutritionPage extends Component {
    render() {
        return (
            <main className="page-head" style={{ width: '100%', margin: '0', position: 'static' }}>
                <div className="background"></div>
                <NutritionHead />
                <NutritionContent />
            </main>
        )
    }
}

export default NutritionPage;