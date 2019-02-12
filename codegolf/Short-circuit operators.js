if (p) p=q;  // before
p=p&&q;      // after

if (!p) p=q; // before
p=p||q;      // after
