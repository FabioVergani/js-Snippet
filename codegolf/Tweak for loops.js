p;
while (q) {
  ...
  r;
}            // before
for(p;q;r)   // after

  
// Compressed iterative loop
i=10;while(i--);  // before
for(i=10;i--;);   // after.

//Variable init inside loop
for(j=0;p=1,j<n;j++) // before
for(j=0;p=j<n;j++)   // after
