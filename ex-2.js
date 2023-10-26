function countVowels(words) {
  // Start coding here
  let i = 0;
  let count = 0; 
  //let listFoundVowels = [];
  //const checkVowels = listFoundVowels.forEach(word => word.includes("a"));
  while(words[i]){
    if (words[i].includes("a") || words[i].includes("e") || words[i].includes("i") || words[i].includes("o")){
      count ++ ;
    }
    i++
  }
  return count
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2
