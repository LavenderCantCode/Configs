// Courtesy of rosettacode.org under the GNU Free Documentation License 1.2
// https://rosettacode.org/wiki/FizzBuzz#JavaScript
// https://www.gnu.org/licenses/old-licenses/fdl-1.2.html

for (let i = 1; i < 101; i += 1) {
  let output = '';
  if (!(i % 3)) output += 'Fizz';
  if (!(i % 5)) output += 'Buzz';
  console.log(output || i);
}
