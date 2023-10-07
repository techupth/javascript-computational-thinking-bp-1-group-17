function getLetterFrequency(words) {
  // Start coding here
  let lists = {};
  let i = 0 ;
  while (words[i]) {
    const letter = words[i].toLowerCase();

    if (!(letter in lists)) {
      lists[letter] = 1;
    } else {
      lists[letter]++;
    }

    i++;
  }

  return lists;
}
const str = "Techupth";



console.log(getLetterFrequency("Techupth"));

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/
