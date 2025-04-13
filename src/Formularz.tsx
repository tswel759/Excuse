import { useState } from 'react';

type Props = {
    dodaj: (wymowka: {
        imie: string;
        powod: string;
        wiarygodnosc: number;
        data: string;
        kreatywnosc: string;
        szczegoly: string;
        pilna: boolean;
    }) => void;
};

function Formularz({ dodaj }: Props) {
    const [imie, setImie] = useState('');
    const [powod, setPowod] = useState('spóźnienie');
    const [wiarygodnosc, setWiarygodnosc] = useState(5);
    const [data, setData] = useState('');
    const [kreatywnosc, setKreatywnosc] = useState('średnia');
    const [szczegoly, setSzczegoly] = useState('');
    const [pilna, setPilna] = useState(false);

    const wyslij = (e: React.FormEvent) => {
        e.preventDefault();
        dodaj({ imie, powod, wiarygodnosc, data, kreatywnosc, szczegoly, pilna });
        setImie('');
        setPowod('spóźnienie');
        setWiarygodnosc(5);
        setData('');
        setKreatywnosc('średnia');
        setSzczegoly('');
        setPilna(false);
    };

    return (
        <form onSubmit={wyslij}>
            <input
                type="text"
                placeholder="Imię"
                value={imie}
                onChange={(e) => setImie(e.target.value)}
                required
            />

            <select value={powod} onChange={(e) => setPowod(e.target.value)}>
                <option value="spóźnienie">Spóźnienie</option>
                <option value="brak pracy">Brak pracy domowej</option>
                <option value="brak odpowiedzi">Brak odpowiedzi na wiadomość</option>
            </select>

            <input
                type="range"
                min="1"
                max="10"
                value={wiarygodnosc}
                onChange={(e) => setWiarygodnosc(Number(e.target.value))}
            />
            <span>Wiarygodność: {wiarygodnosc}</span>

            <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />

            <select value={kreatywnosc} onChange={(e) => setKreatywnosc(e.target.value)}>
                <option value="niska">Niska</option>
                <option value="średnia">Średnia</option>
                <option value="duża">Duża</option>
                <option value="kosmiczna">Kosmiczna</option>
            </select>

            <textarea
                placeholder="Dodatkowe szczegóły"
                value={szczegoly}
                onChange={(e) => setSzczegoly(e.target.value)}
            />

            <label>
                <input
                    type="checkbox"
                    checked={pilna}
                    onChange={(e) => setPilna(e.target.checked)}
                />
                Pilna wymówka
            </label>

            <button type="submit">Wygeneruj wymówkę</button>
        </form>
    );
}

export default Formularz;
