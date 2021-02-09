/* eslint-disable no-restricted-syntax */
const SCRIPTS = require('./scripts').array;

function characterScript(code) {
  for (const script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  const counts = [];
  for (const item of items) {
    const name = groupName(item);
    const known = counts.findIndex((c) => c.name === name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

module.exports = { characterScript, countBy };
