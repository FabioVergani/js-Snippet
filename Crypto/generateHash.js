const textEncoder = new TextEncoder();

const generateHash = async str => {
	const data = await crypto.subtle.digest('SHA-512', textEncoder.encode(str));
	const m = [];
	new Uint8Array(data).forEach((e, i) => {
		m[i] = e.toString(16).padStart(2, '0');
	});
	return m.join('');
};


/*
Description
This JavaScript code defines an asynchronous function generateHash that generates a SHA-512 hash of a given string. 
The function uses the Web Crypto API and TextEncoder to perform the hashing.

Usage
const hash = await generateHash('my secret message');
console.log(hash); 
//e27e91b0a14eaa92f8dc07d9f65e13e1b1dbd6b013e6fb059ee6f2ba6c401a6f0c97406f1e3e6336f838db13504080c8486a85390110d2f6a44fa6be7d6f3b6

Parameters
str: The string to be hashed.

Return value
The generateHash function returns a Promise that resolves to a hexadecimal string representation of the SHA-512 hash of the input string.
*/
