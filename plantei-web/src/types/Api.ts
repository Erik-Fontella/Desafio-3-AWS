// api.ts
const ipApi: string = `3.145.28.17`;
const portApi: string = `3333`;

export const API_URLS = {
    getPlants: `http://${ipApi}:${portApi}/plants`,
    getPlant: `http://${ipApi}:${portApi}/plants/`,
    setPlant: `http://${ipApi}:${portApi}/plants`, 
};
