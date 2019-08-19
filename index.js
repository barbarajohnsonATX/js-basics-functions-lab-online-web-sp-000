// Code your solution in this file!
function distanceFromHqInBlocks(location)
{
  let distanceInBlocks = Math.abs(location - 42);
  return distanceInBlocks;
}

function distanceFromHqInFeet(location)
{
  let distanceInFeet = distanceFromHqInBlocks(location) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(start, end)
{
  let distanceInFeet = distanceFromHqInFeet(end) - distanceFromHqInFeet(start);
  return distanceInFeet;
}

function calculatesFarePrice(start, destination)
{
  let fare;
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet > 2500)
  {
    return "cannot travel that far";
  }
  
  else if (distanceInFeet > 2000)
  {
    return fare = 25;
  }
  
  else if (distanceInFeet >= 400 && distanceInFeet < 2000)
  {
    return fare = 0.02 * distanceInFeet;
  }
}
