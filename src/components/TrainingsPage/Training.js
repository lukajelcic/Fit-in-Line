import React, { Component } from 'react';

import '../TrainingTypes/TrainingType.css';
import TrainingHead from './TrainingHead';
import TrainingContent from './TrainingContent';
import Program from './Program'

class Training extends Component {

    render() {

        return (
            <main className="page-head" style={{ width: '100%', margin: '0', position: 'static' }}>
                <div className="background"></div>
                <TrainingHead />
                <Program />
                <hr style={{ width: '90%' }}></hr>
                <TrainingContent
                    h1="Treninzi za svakog"
                    h2="Mnoštvo različitih fitness treninga!"
                    text1="Redovna fizička aktivnost je neophodan preduslov ka fizički i psihički zdravom pojedincu. Prednosti koje nam bavljenje sportom donosi su mnogobrojne."
                    sub1="1) Vežbanje održava i unapređuje zdravlje"
                    sub2="2) Vežbanje usporava starenje"
                    sub3="3) Vežbanje kontroliše telesnu težinu"
                    sub4="4) Vežbanje poboljšava raspoloženje"
                    sub5="5) Vežbanje povećava energiju"
                    sub6="6) Vežbanje utiče na dobar san"
                    sub7="7) Vežbanje je zabavno"
                    c1="Redovno vežbanje povećava vaše fizičke sposobnosti, vašu vitalnost i imunitet. Pozitivno utiče na kapacitet kardio-vaskularnog sistema, kao i svih drugih sistema u organizmu. Pomaže u prevenciji mnogih zdravstvenih problema (kardio-vaskularne bolesti, dijabetes, moždani udar, artritis..)"
                    c2="Vežbanje povećava vašu vitalnost, fizičku snagu, elastičnost i pokretljivost vašeg tela. Samim tim usporava proces starenja i osigurava vam kvalitetan život u poznim godinama."
                    c3="Vežbanjem se troši određen broj kalorija, stvaraju se mišići i na taj način se utiče na smanjenje i održavanje telesne težine. Planiran i vođen trening je najbolji način da postignete što veću efikasnost, a da utrošite što manje vremena"
                    c4="Malo je situacija u toku dana koje mogu da dovedu do takvog zadovoljstva, sreće i samopouzdanja, kao kada završite kvalitetan i dobar trening. Uticaj treninga na raspoloženje je dugotrajno i zadovoljstvo ostaje u vama dugo posle završenog treninga. "
                    c5="Redovna fizička aktivnost poboljšava mišićnu snagu i povećava izdržljivost. Vežbanje poboljšava cirkulaciju kiseonika i hranljivih materija kroz organizam i pomaže vašem kardio-vaskularnom sistemu da radi efikasnije. Sve to dovodi do mnogo više energije za obavljanje svakodnevnih aktivnosti"
                    c6="Redovna fizička aktivnost može vam pomoći da lakše zaspite i da kvalitetnije spavate. Vreme treninga je potrebno prilagoditi svojim navikama i izbegavati trening blizu vremena za spavanje."
                    c7="Vežba i fizička aktivnost mogu biti prijatni. Tako i treba da birate aktivnosti kojima će te se baviti. Od tipa treninga, atmosfere, trenera… To vam daje priliku da se opustite, uživate, budete zadovoljni i srećni."
                />
            </main>
        )
    }
}

export default Training;
