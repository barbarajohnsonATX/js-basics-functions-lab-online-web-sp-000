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
