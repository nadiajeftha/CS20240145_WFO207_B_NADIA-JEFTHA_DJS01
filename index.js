/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initVelocity = 2777.78;// convert velocity to m/s to match acceleration unit (m/s)
const accelerationMeterPerS2 = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour) 
const distanceInKm = 0; // distance (km)
const initFuelRemaining = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

//changed placement so that function is defined before its called
const calcNewVel = (accelerationMeterPerS2, initVelocity, timeInSeconds) => { 
  return initVelocity + (accelerationMeterPerS2*timeInSeconds)
}

const newDistanceInMeter = (initVelocity*timeInSeconds)+(0.5*accelerationMeterPerS2*(timeInSeconds**2) )//calcultes new distance
const newDistanceInKm = newDistanceInMeter / 1000 // convert distance from m to km
const endRemainingFuel = initFuelRemaining - (fuelBurnRate*timeInSeconds) //calculates remaining fuel
const newVelocity = calcNewVel(accelerationMeterPerS2, initVelocity, timeInSeconds) //calculates new velocity based on acceleration



console.log(`Corrected New Velocity: ${newVelocity * 3.6} km/h`); //the *3.6 is to convert m/s back to km/h
console.log(`Corrected New Distance: ${newDistanceInKm} km`);
console.log(`Corrected Remaining Fuel: ${endRemainingFuel} kg`);






