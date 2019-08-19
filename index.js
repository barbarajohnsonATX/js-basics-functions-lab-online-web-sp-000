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
  let distanceInFeet = Math.abs(distanceFromHqInFeet(end) - distanceFromHqInFeet(start));
  return distanceInFeet;
}

function calculatesFarePrice(start, destination)
{
  let cost;
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  switch (true) 
  {
    case (distanceInFeet > 2500):
      cost = "cannot travel that far";
      break;
    case (distanceInFeet > 2000):
      cost = 25;
      break;
    case (distanceInFeet > 400):
      cost = 0.02 * (distanceInFeet - 400);
      break;
    case (distanceInFeet <= 264):
      return 0;
      break;
  }
  
  return cost;
   
   
}
