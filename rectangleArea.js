function RectangleArea(strArr) { 
  let height = 0, width = 0;
  let xAxis = strArr.map(function(x){return parseInt(x.match(/-?[0-9]/))});
  let yAxis = strArr.map(function(y, index, arr){return parseInt(y.substring(3).match(/-?[0-9]/))});

  for (let i = 1; i < strArr.length; i++){
      if (xAxis[i] == xAxis[0])
          height = Math.abs(yAxis[i] - yAxis[0]);
      else if (yAxis[i] == yAxis[0])
          width = Math.abs(xAxis[i] - xAxis[0]);
  }
  
  return height * width;
}

console.log(RectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"]));