import React from 'react';

function TrainingHeader() {
    return (
        <article style={{ display: 'flex',alignItems:'center' }}>
            <div className="header">
                <h1>Treninzi za svakog</h1>
                <h2>Mnoštvo različitih fitness treninga!</h2>

                <div className="paragraph">
                    <p>Fit in Line je fitnes centar koji vas uvodi u jedan novi način treniranja.<strong>Odlična atmosfera na grupnim treninzima</strong> i u teretani je ono što čini Fit in Line prepoznatljivim</p>
                    <p>Danas je Fit in Line tim sastavljen od <strong>najboljih specijalista za fitnes</strong> u svakom segmentu grupnih treninga, a na raspolaganju vam stoje i sertifikovani personalni treneri za individualni rad ili rad u manjim grupama (Funkcionalni trening).</p>
                    <p>Zato, ne oklevajte i slobodno nam se pridružite, rešenje za Vas je Fit in Line,<strong>odličan način da provedete svoje vreme i ujedno održite ili popravite svoje zdravlje!</strong></p>
                </div>
            </div>

            <div className="header-image">
                <img src="https://images.unsplash.com/photo-1519859660545-3dea8ddf683c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="/"></img>
            </div>
        </article>
    )
}

export default TrainingHeader;