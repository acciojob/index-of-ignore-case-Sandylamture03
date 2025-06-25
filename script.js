function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (s1 === "") return 0; // Empty substring is always found at index 0
  if (s2 === "") return -1;   // Empty string can't contain non-empty substring
  
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = s1.toLowerCase();
  const lowerSubStr = s2.toLowerCase();
  
  // Use the built-in indexOf method on the lowercase versions
  return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
