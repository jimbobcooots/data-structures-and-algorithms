'use strict';

// input: string
// output: string
const verse = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

function removePunc(str) {
  return str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g, '');
}

console.log(removePunc(verse));


function firstWord(string) {
  const hashmap = {};
  // filter out the commas
  const words = removePunc(string).split(' ');

  // iterate through array and plug into hashmap

  for (let i = 0; i < words.length; i++) {
    const current = words[i];
  
    (!hashmap[current] ? hashmap[current] = 1 : hashmap[current] += 1);
  }

  for (let key in hashmap) {
    if (hashmap[key] > 1) {
      return key;
    }
  }
}

firstWord(verse);

