import { useState } from 'react';
import './App.css';
import Formularz from './Formularz';
import ListaWymowek from './ListaWymowek';

type Wymowka = {
    imie: string;
    powod: string;
    wiarygodnosc: number;
    data: string;
    kreatywnosc: string;
    szczegoly: string;
    pilna: boolean;
};

function App() {
    const [wymowki, setWymowki] = useState<Wymowka[]>([]);

    const dodajWymowke = (nowa: Wymowka) => {
        setWymowki(prev => [...prev, nowa]);
    };

    return (
        <div className="app">
            <h1>Generator Wymówek</h1>
            <Formularz dodaj={dodajWymowke} />
            <ListaWymowek wymowki={wymowki} />
        </div>
    );
}

export default App;
