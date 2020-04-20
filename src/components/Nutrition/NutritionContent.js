import React, { Component } from 'react';
import BmrCalc from './BmrCalc';

class NutritionContent extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="ntr-text">
                    <h1 className="ntr-title">Fit eat (ishrana)</h1>
                    <h2>sve sto trebate znati . . . </h2>
                    <p>Pravilna ishrana je preduslov dobrog zdravlja. A da bi naša ishrana bila takva,
                    ona mora da bude isplanirana za svakog pojedinca,
                    da odgovara individualnim potrebama i da omogući dovoljno energije i hranljivih materija.
                    Takva ishrana će uticati na jačanje vašeg imunog sistema, zašitiće vaš organizam od bolesti,
                    uticaće na povećanje mišićne mase, a smanjenje procenta masti u organizmu, bolji san,
                    psihičku stabilnost i niz drugih pogodnosti.
                    Zdrava, pravilna ishrana podrazumeva unos izbalansirane,
                    umerene I raznovrsne hrane. Uz poštovanje određenih principa I pridržavanje osnovnih pravila, vrlo je jednostavno hraniti se zdravo.<br /><br />
                    Pravilna ishrana je osnovni faktor optimalnog rasta i razvoja. Takođe, direktno utiče na radnu sposobnost, kao i na kvalitet i dužinu životnog veka.
                    Suština je u konzumiranju hrane visokih nutritivnih vrednosti, koja se uzima u određeno vreme I u određenom odnosu I količini.</p>
                    <hr />
                    <h4>U praksi bi to izgledalo ovako: </h4>
                    <ul>
                        <li>dnevno uzimati 4-5 obroka, u približno isto vreme</li>
                        <li>pridržavati se odnosa hranljivih materija</li>
                        <li>pridržavati se pravilnog načina pripreme namirnica</li>
                        <li>izbegavati industrijski prerađenu hranu</li>
                        <li>piti odgovarajuću količinu vode..</li>
                    </ul>

                    <p>Da bi ishrana bila pravilna ona mora da ispoštuje potrebe svakog pojedinca.
                        Za početak je potrebno da znate svoje dnevne potrebe u kalorijama, vrednost svog bazalnog metabolizma.
                        To je energija koja vam je potrebna za obavljanje osnovnih životnih funkcija.
                        Jedna od formula za izračunavanje bazalnog metabolizma (BMR) je Haris-Benediktova formula:</p>

                        <BmrCalc />

                    <p>Na ovaj broj kalorija potrebno je dodati I određen broj kalorija koje se potroše za obavljanje raznih aktivnosti u toku dana. I, naravno, ukoliko se bavite nekom fizičkom aktivnošću, potrebno je dodatno povećati svoj dnevni unos.
                    Zdrava ishrana je ništa drugo do disciplina u početku, a onda se kasnije pretvara u naviku. I to dobru naviku. Svi znamo koliko promene mogu biti teške, zato smo mi tu za vas, da vas usmerimo i pomogemo da disciplinujete sebe i svoj organizam.
                    Plan ishrane se definiše na određeni period, uglavnom od nedelju dana. Nakon toga slede merenja i korigovanje plana u zavisnosti od rezultata i napretka.</p>
                    <p>Za dodatne informacije i zakazivanje početnog razgovora i testiranja, možete pozvati na broj telefona -> br.telefona.</p>

                </div>
            </div>
        )
    }
}

export default NutritionContent;