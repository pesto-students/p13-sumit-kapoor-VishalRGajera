function drawTriangle(triangleSize) {

    // Your solution goes here
    for (let i = 1; i <= triangleSize; i++) {
        let asterisks = '';
    
        for (let j = 1; j <= i; j++) {
          asterisks += '*';
        }
    
        console.log(asterisks);
      }
    
 }
 drawTriangle(4);