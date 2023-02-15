# Klara-blackjack

Satt opp med [Create React App](https://github.com/facebook/create-react-app).

## Tilgjengelige skript

### `npm start`

Kjører appen lokalt
Gå til [http://localhost:3000](http://localhost:3000) for å se den i nettleseren.

### `npm test`
Kjører testene i mappen test. Det er laget tester for funksjonene som ligger i mappa ranks.

## Modell
Det  er  forsøkt å bruke et MVC-mønster for React. Et presentasjonslag (mappa components), inneholder Controller og View.
Forretningslogikk er plassert i mappa utilities. Data er modellert i fil datatypes.ts.
React.createContext er brukt for å holde orden på state for komponentene.

## Regler 
To spillere, du og Magnus, skal spille mot hverandre!
Hver spiller tar to kort hver fra toppen av en tilfeldig stokket kortstokk.
Du tar de to første kortene, Magnus tar de to neste
Regn ut den samlede poengsummen til hver spiller
Nummererte kort har poeng som angitt på kortet
Knekt (J), Dronning (Q) og Konge (K) teller som 10 poeng
Ess (A) teller som 11 poeng
Regn ut om en av spillerene har 21 poeng - Blackjack - med deres initielle kort, og dermed vinner runden
Hvis ingen har 21 poeng, skal spillerne trekke kort fra toppen av kortstokken
Du skal stoppe å trekke kort når poengsummen blir 17 eller høyere
Du taper spillet hvis poengsummen er høyere enn 21
Når du har stoppet å trekke kort, begynner Magnus å trekke kort
Magnus slutter å trekke kort når poengsummen hans er høyere enn din poengsum
Magnus taper spillet dersom poengsummen er høyere enn 21
Skriv ut hvem som vinner spillet
Skriv ut poengsum og kortene til hver spiller ved spillets slutt.