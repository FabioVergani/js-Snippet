  const htmlEntitiesMap = new Map([
    ['&','&amp;'],
    ['<','&lt;'],
    ['>','&gt;'],
    ['"','&quot;'],
    ["'",'&apos;']
  ]);

  const htmlEntitiesRE = /([&<>"'])/g;
  console.log(``.replaceAll(htmlEntitiesRE, match => htmlEntitiesMap.get(match)));
