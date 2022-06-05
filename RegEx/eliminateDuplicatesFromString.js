const eliminateDuplicatesFromString = str => str.replace(/(\b\S.+\b)(?=.*\1)/g, "").trim();
