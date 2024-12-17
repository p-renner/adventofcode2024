import { readFileSync } from "fs";

function part1(rules: string[], updates: string[]): number {
	const map = new Map<number, number[]>();

	for (let rule of rules) {
		const [a, b] = rule.split("|").map(Number);
		if (map.has(b)) {
			map.get(b).push(a);
		} else {
			map.set(b, [a]);
		}
	}

	return updates.reduce((acc, line) => {
		const update = line.split(",").map(Number);
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
					return acc;
				}
			}
		}

		return acc + update[Math.floor(update.length / 2)];
	}, 0);
}

function part2(data: string[]): number {}

// read data from part1.txt
const data = readFileSync("part1.txt", "utf8").split("\n");
const index = data.indexOf("");
const rules = data.slice(0, index);
const update = data.slice(index + 1);

console.log(part1(rules, update));
//console.log(part2(data));
