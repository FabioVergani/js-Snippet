async function fetchURLs() {
    try {
      // Promise.all() lets us coalesce multiple promises into a single super-promise
      var data = await Promise.all([
        /* Alternatively store each in an array */
        // var [x, y, z] = await Promise.all([
        // parse results as json; fetch data response has several reader methods available:
        //.arrayBuffer()
        //.blob()
        //.formData()
        //.json()
        //.text()
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()),// parse each response as json
        fetch('https://jsonplaceholder.typicode.com/albums').then((response) => response.json()),
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
      ]);

      for (var i of data) {
        console.log(`RESPONSE ITEM \n`);
        for (var obj of i) {
          console.log(obj);
          //logger utility method, logs output to screen
          console.log(obj);
        }
      }

    } catch (error) {
      console.log(error);
    }
  }
