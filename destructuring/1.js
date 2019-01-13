const o = {
  chico: 1, 
  harpo: 2, 
  groucho: 3,
  othermarx : {
    zeppo: 4,
    isthatamarxbrother: {
      gummo: 5,
      polly: 6
    }
  }
};

const { gummo, polly } = o.othermarx.isthatamarxbrother;

console.log(gummo, polly);
