
<script>
 
 // JavaScript Program to sort 2D matrix row-wise
  
     function sortRowWise(m)
     {
         // loop for rows of matrix
         for (let i = 0; i < m.length; i++) {
   
             // loop for column of matrix
             for (let j = 0; j < m[i].length; j++) {
   
                 // loop for comparison and swapping
                 for (let k = 0; k < m[i].length - j - 1; k++) {
                     if (m[i][k] > m[i][k + 1]) {
   
                         // swapping of elements
                         let t = m[i][k];
                         m[i][k] = m[i][k + 1];
                         m[i][k + 1] = t;
                     }
                 }
             }
         }
   
         // printing the sorted matrix
         for (let i = 0; i < m.length; i++) {
             for (let j = 0; j < m[i].length; j++)
                 document.write(m[i][j] + " ");
             document.write("<br/>");
         }
   
         return 0;
     }
  
 // Driver code
  
         let m = [[ 9, 8, 7, 1 ],
                       [ 7, 3, 0, 2 ],
                       [ 9, 5, 3, 2 ],
                       [ 6, 3, 1, 2 ]];
         sortRowWise(m);
  
         let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
        
 </script>