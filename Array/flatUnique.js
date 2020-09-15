const flatUnique = array => array.flat().filter((value, index, source) => index === source.indexOf(value));
