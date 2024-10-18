/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initVelocity = 2777.78; // converted velocity from km/h to m/s (m/s)
const accelerationMetreS2 = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distanceInKm = 0; // distance (km)
const initFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const newDistance = initVelocity * timeInSeconds + 0.5 * accelerationMetreS2 * timeInSeconds //calcultes new distance
const remainingFuel = fuelBurnRate*timeInSeconds //calculates remaining fuel
const newVelocity = calcNewVel(initVelocity , accelerationMetreS2 , timeInSeconds) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (initVelocity, accelerationMetreS2, timeInSeconds) => { 
  return initVelocity + (accelerationMetreS2*timeInSeconds)
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






