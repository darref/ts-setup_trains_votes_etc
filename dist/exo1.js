"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo4 = exports.exo3 = exports.exo2 = exports.exo1 = void 0;
const exo1 = () => {
    let a = 5;
    let b = 1;
    console.log("a est il supérieur a pi?" + (a > 3.14 ? "oui" : "non"));
    console.log("b est il supérieur a pi?" + (b > 3.14 ? "oui" : "non"));
    console.log("qui est el plus grand entre a et b?" + (a > b ? "a" : "b"));
};
exports.exo1 = exo1;
const exo2 = () => {
    let nombres = [];
    for (let index = 0; index < 10; index++) {
        nombres[index] = index + 1;
    }
    console.log("longueur du tableau: " + nombres.length);
    console.log("premier element: " + nombres[0]);
    console.log("dernier element: " + nombres[nombres.length - 1]);
    console.log("4eme element: " + nombres[3]);
    let tableauBis = [];
    for (let index = 0; index < nombres.length; index++) {
        tableauBis[index] = nombres[index] * 2;
        console.log(tableauBis[index]);
    }
};
exports.exo2 = exo2;
function sheepsLives(stock, nbMoutons) {
    let nbDaysPassedOK = 0;
    while (stock > 0) {
        stock = stock - 0.25 * nbMoutons;
        if (nbDaysPassedOK === 999)
            nbMoutons--;
        nbDaysPassedOK++;
    }
    return nbDaysPassedOK;
}
const exo3 = () => {
    console.log("nombre de jours passés correctement " + sheepsLives(800, 5));
};
exports.exo3 = exo3;
function displayVotesByCandidats(candidats, votes) {
    candidats.forEach((e, i) => {
        console.log("le candidat", e, " à ", votes[i], " votes.");
    });
}
const exo4 = () => {
    let candidats = ["varousselle", "melangeons", "macreau", "lepeigne", "paicvaissrelle", "poutoutout", "hidalgogo"];
    let tourNumber = 1;
    const ARGENT_PAICVESRELLE = 1000;
    const PRIX_PAR_VOIE = 10;
    let rachatsPossibes = ARGENT_PAICVESRELLE / PRIX_PAR_VOIE;
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let votes = tour(candidats);
    console.log("tour numéro: ", tourNumber);
    displayVotesByCandidats(candidats, votes);
    let maxVotes = indiceMax(votes);
    console.log("le candidat QUI a le plus de votes est: " + candidats[maxVotes.indiceMaxVote] + " avec " + maxVotes.maxVotes + " votes.");
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let indexLepeigne = candidats.findIndex((nom) => { return nom === "lepeigne"; });
    let indexPaicvesrelle = candidats.findIndex((nom) => { return nom === "paicvaisrelle"; });
    for (let i = 0; i < ARGENT_PAICVESRELLE / PRIX_PAR_VOIE; i++) {
        if (votes[indexLepeigne] > 0) {
            if (rachatsPossibes > 0) {
                votes[indexPaicvesrelle]++;
                votes[indexLepeigne]--;
                rachatsPossibes--;
            }
        }
    }
    console.log("paicvesrelle a racheté: ", ((ARGENT_PAICVESRELLE / PRIX_PAR_VOIE) - rachatsPossibes), " voies à lepeigne");
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    candidats = filterCandidatesForNextTour(votes, candidats);
    console.log("les candidats qui passent au tour  numero ", 2, " sont: ", candidats);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    votes = tour(candidats);
    console.log("tour numéro: ", 2);
    displayVotesByCandidats(candidats, votes);
    maxVotes = indiceMax(votes);
    console.log("le candidat QUI a le plus de votes est: " + candidats[maxVotes.indiceMaxVote] + " avec " + maxVotes.maxVotes + " votes.");
};
exports.exo4 = exo4;
function getRandomInt(nbCases) {
    return Math.floor(Math.random() * nbCases);
}
function tour(candidats) {
    let newVotes = candidats.map((val, i) => 0);
    for (let i = 0; i < 1000; i++) {
        let randomIndex = getRandomInt(candidats.length);
        newVotes[randomIndex]++;
    }
    return newVotes;
}
function indiceMax(votes) {
    let maxVotes = 0;
    let indiceMaxVote = 0;
    votes.forEach((vote, index) => {
        if (vote > maxVotes) {
            maxVotes = vote;
            indiceMaxVote = index;
        }
    });
    return {
        indiceMaxVote,
        maxVotes
    };
}
function filterCandidatesForNextTour(votes, cand) {
    let monMax = Math.max(...votes);
    let tmpQualifiesIndexes = [];
    votes.forEach((val, i) => {
        if (val === monMax) {
            tmpQualifiesIndexes.push(i);
        }
    });
    if (tmpQualifiesIndexes.length > 1) {
        return tmpQualifiesIndexes.map(indexCandidat => cand[indexCandidat]);
    }
    else {
        let tabFiltreDuMax = votes.filter((val, i) => val != monMax);
        let monMax2 = Math.max(...tabFiltreDuMax);
        votes.forEach((val, i) => {
            if (val === monMax2) {
                tmpQualifiesIndexes.push(i);
            }
        });
        return tmpQualifiesIndexes.map(indexCandidat => cand[indexCandidat]);
    }
}
