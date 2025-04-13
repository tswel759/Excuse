type Wymowka = {
    imie: string;
    powod: string;
    wiarygodnosc: number;
    data: string;
    kreatywnosc: string;
    szczegoly: string;
    pilna: boolean;
};

type Props = {
    wymowki: Wymowka[];
};

function ListaWymowek({ wymowki }: Props) {
    return (
        <div>
            <h2>Wymówki:</h2>
            <ul>
                {wymowki.map((w, index) => (
                    <li key={index}>
                        {w.imie} ma wymówkę: "{w.powod}" z powodu: {w.szczegoly || 'brak szczegółów'}.
                        Poziom wiarygodności: {w.wiarygodnosc}, data: {w.data},
                        kreatywność: {w.kreatywnosc}, {w.pilna ? 'PILNE' : 'niepilne'}.

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaWymowek;
