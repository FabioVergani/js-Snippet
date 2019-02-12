p;
while (q) {
  ...
  r;
}            // before
for(p;q;r)   // after

  
// Compressed iterative loop
i=10;while(i--);  // before
for(i=10;i--;);   // after
