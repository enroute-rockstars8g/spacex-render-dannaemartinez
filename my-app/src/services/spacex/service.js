export const getDragons = async () => {
  try {
    const response = await fetch(`https://api.spacex.land/rest/dragons`);

    if (response.status !== 200) return;
    const dragons = await response.json();
    return dragons;
  } catch (e) {
    console.error(e);
  }
};


export const getRockets = async () => {
  try {
    const response = await fetch(`https://api.spacex.land/rest/rockets`);

    if (response.status !== 200) return;

    const rockets = await response.json();

    return rockets;
  } catch (e) {
    console.error(e);
  }
};

export const getShips = async () => {
  try {
    const response = await fetch(`https://api.spacex.land/rest/ships`);

    if (response.status !== 200) return;
    const ships = await response.json();
    return ships;
  } catch (e) {
    console.error(e);
  }
};