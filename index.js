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
  
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  switch (distanceInFeet) 
  {
    case (> 2500):
      return "cannot travel that far";
      
  }
  
  /*
  if (distanceInFeet > 2500)
  {
    return "cannot travel that far";
  }
  
  else if (distanceInFeet > 2000)
  {
    return 25;
  }
  
  else if (distanceInFeet > 400)
  {
    return 0.02 * (distanceInFeet - 400);
  }
  
  else if (distanceInFeet <= 264)
  {
    return 0;
  }
   
}
