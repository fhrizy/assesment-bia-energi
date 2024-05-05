<img width="1439" alt="Screen Shot 2024-05-05 at 10 39 50 PM" src="https://github.com/fhrizy/assesment-bia-energi/assets/93750565/f9795aed-801d-4671-bb7a-7a8cdd135777"># TEST ASSESSMENT FRONT END

### Features

#### Character counting

Terdapat code untuk menghitung character yang diinputkan oleh user sebagai berikut:

```bash
let text =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

console.log(text.length)
```
#### Sequense

Terdapat code untuk menampilkan deret angka tertentu yang dapat di tentukan jumlah deretnya oleh user sebagai berikut:

##### Deret angka yang dikalikan dengan angka itu sendiri
```bash
  var sequence = []
	for (var i = 0; i < n; i++) {
		sequence.push(i * i)
	}
	return sequence.join(', ')
```

##### Deret angka yang dikalikan dengan dirinya sendiri ditambah 1
```bash
  var sequence = []
	for (var i = 0; i < n; i++) {
		sequence.push(i * i + 1)
	}
	return sequence.join(', ')
```

##### Deret angka fibonacci
```bash
  var sequence = [0, 1]
	for (var i = 2; i < n; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2])
	}
	return sequence.join(', ')
```

##### Deret angka fibonacci ditambah 1
```bash
  var sequence = [0, 0]
	for (let i = 2; i < n; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2] + 1)
	}
	return sequence.join(', ')
```

#### Character counting

Terdapat CRUD user yang dapat digunakan untuk transaction new user, update dan delete user.

<img width="1439" alt="Screen Shot 2024-05-05 at 10 39 50 PM" src="https://github.com/fhrizy/assesment-bia-energi/assets/93750565/885dd73a-00dc-47a6-8dfd-d83da355f054">

### How to use

#### Install it and run:

```bash
npm install
npm run dev/npm start
# or
yarn
yarn dev

#### Run this if your projcet ready:

npm build
# or
yarn build
```


