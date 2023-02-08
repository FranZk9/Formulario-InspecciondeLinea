import { useState } from 'react';
import { Etiquetas } from './Etiquetas.js';
import { Llenado } from './Llenado';
import { Personal } from './Personal';

export function TabsEtiquetas() {

    const [components, setComponents] = useState(["Sample Component"]);

    return (
        <div>
            {components.map((item, i) => (<Etiquetas />))}
        </div>
    )
}

export function TabsLlenado() {
    const [components, setComponents] = useState(["Sample Component"]);

    return (
        <div>
            {components.map((item, i) => (<Llenado />))}
        </div>
    )
}

export function TabsPersonal() {
    const [components, setComponents] = useState(["Sample Component"]);

    return (
        <div>
            {components.map((item, i) => (<Personal />))}
        </div>
    )
}
