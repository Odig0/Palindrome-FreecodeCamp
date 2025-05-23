const input = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');

function cleanText(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/gi, '');
}

function isPalindrome(str) {
  const cleaned = cleanText(str);
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

btn.addEventListener('click', () => {
  const value = input.value.trim();
  if (value === '') {
    alert('Please input a value');
    return;
  }
  if (isPalindrome(value)) {
    result.textContent = `${value} is a palindrome.`;
  } else {
    result.textContent = `${value} is not a palindrome.`;
  }
});
