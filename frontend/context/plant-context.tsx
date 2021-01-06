import React from 'react';

export type Plant = {
    id: number;
    name: string;
    type: string;
    waterTime: string;
    repeat: string[];
    uid: string;
}

export type PlantContextType = {
    plant: Plant;
    setPlant: React.Dispatch<React.SetStateAction<Plant>>;
}

export const PlantContext = React.createContext<PlantContextType>({
    plant: {
        id: 0,
        name: '',
        type: '',
        waterTime: '',
        repeat: [],
        uid: ''
    },
    setPlant: () => { console.warn('no user provider') }
});