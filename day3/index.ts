import { readFileSync } from "fs";

function part1(data: string): number {
	let res = 0;

	for (const match of data.matchAll(/mul\((\d+),(\d+)\)/g)) {
		res += parseInt(match[1]) * parseInt(match[2]);
	}

	return res;
}

function part2(data: string): number {
	let res = 0;
	let last = true;

	for (const match of data.matchAll(
		/do\(\)|don\'t\(\)|mul\((\d+),(\d+)\)/g,
	)) {
		if (match[0] === "do()") {
			last = true;
			continue;
		}

		if (match[0] === "don't()") {
			last = false;
			continue;
		}

		if (last) {
			res += parseInt(match[1]) * parseInt(match[2]);
		}
	}

	return res;
}

// read data from part1.txt
const data = readFileSync("part1.txt", "utf8");
console.log(part1(data));
console.log(part2(data));
