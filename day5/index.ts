import { readFileSync } from "fs";

function part1(rules: string[], updates: number[][]): number {
	const order = createOrder(rules);

	return updates
		.filter((line) => isOrdered(line, order)) // filter out the ordered updates
		.reduce((acc, line) => acc + line[Math.floor(line.length / 2)], 0); // sum the middle elements
}

function part2(rules: string[], updates: number[][]): number {
	const order = createOrder(rules);

	return updates
		.filter((update) => !isOrdered(update, order)) // filter out the ordered updates
		.map((update) => sortUpdate(update, order)) // sort the updates
		.reduce((acc, line) => acc + line[Math.floor(line.length / 2)], 0); // sum the middle elements
}

// Checks if the update is ordered
// An update is ordered if for every element in the update, the elements that come before it are not in the rest of the update
function isOrdered(update: number[], map: Map<number, number[]>): boolean {
	const set = new Set(update);

	for (let i = 0; i < update.length; i++) {
		const num = update[i];
		set.delete(num);

		if (!map.has(num)) {
			continue;
		}

		const arr = map.get(num);

		for (let j = 0; j < arr.length; j++) {
			if (set.has(arr[j])) {
				return false;
			}
		}
	}

	return true;
}

// Creates a map of the rules
function createOrder(rules: string[]): Map<number, number[]> {
	const order = new Map<number, number[]>();

	for (let rule of rules) {
		const [a, b] = rule.split("|").map(Number);
		if (order.has(b)) {
			order.get(b).push(a);
		} else {
			order.set(b, [a]);
		}
	}

	return order;
}

// Sorts the update based on the rules
function sortUpdate(line: number[], map: Map<number, number[]>): number[] {
	return line.sort((a, b) => {
		const aArr = map.get(a) || [];
		const bArr = map.get(b) || [];

		if (aArr.includes(b)) {
			return 1;
		} else if (bArr.includes(a)) {
			return -1;
		}

		return 0;
	});
}

// read data from part1.txt
const data = readFileSync("part1.txt", "utf8").split("\n");
const index = data.indexOf("");
const rules = data.slice(0, index);
const update = data.slice(index + 1).map((line) => line.split(",").map(Number));

console.log(part1(rules, update));
console.log(part2(rules, update));
