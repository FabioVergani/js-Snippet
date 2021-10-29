  const htmlTagRE = /<\s*[^>]*>[^<]+<\s*\/[^>]*\s*>/g;

  const htmlEntitiesMap1 = new Map([
    ['&','&amp;'],
    ['<','&lt;'],
    ['>','&gt;'],
    ['"','&quot;'],
    ["'",'&apos;']
  ]);

  const htmlEntitiesRE1 = /([&<>"'])/g;
  console.log(``.replaceAll(htmlEntitiesRE1, match => htmlEntitiesMap1.get(match)));

  const htmlEntitiesMap2 = new Map([
    ['&amp;','&'],
    ['&lt;','<'],
    ['&gt;','>'],
    ['&quot;','"'],
    ['&apos;',"'"]
  ]);

  const htmlEntitiesRE2 = /(&(?:a(?:mp|pos)|(?:l|g|quo)t);)/g;
  str.replace(htmlEntitiesRE2, match => htmlEntitiesMap2.get(match));
