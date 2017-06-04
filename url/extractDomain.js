function extractDomain(x){return x.split('/')[x.includes('://')?2:0].split(':')[0]};
