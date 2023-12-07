const lastWeekAsteroidsAPI = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-11-29&end_date=2023-12-06&api_key=3IkKwK3hTGgVgcQPQSBpzfSGs7YtMbccE9TPUQkf';

const returnHazardousAsteroids = async (link) => {
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error('Network response was not ok:', response.status)
        }
        const data = await response.json();
        const hazardousAsteroids = [];
        Object.keys(data.near_earth_objects).forEach(key => {
            for (let asteroid of data.near_earth_objects[key]) {
                if (asteroid.is_potentially_hazardous_asteroid) {
                    hazardousAsteroids.push(asteroid.name);
                }
            }
        })
        return hazardousAsteroids;
    } catch (error) {
        console.error(error);
    }
}

const runFunction = async () => {
    try {
        const result = await returnHazardousAsteroids(lastWeekAsteroidsAPI);
        console.log('Asteroides potencialmente peligrosos para la tierra del 29/11/2023 al 06/12/2023:');
        console.log(result);
    } catch(error) {
        console.error(error);
    }
}

runFunction();