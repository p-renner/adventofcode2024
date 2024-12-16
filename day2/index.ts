import { readFileSync } from "fs";

type CheckFunction = (x: number, i: number, arr: number[]) => boolean;

function part1(data: number[][]): number {
	const dec: CheckFunction = (x, i, arr) => {
		return i === 0 || (x < arr[i - 1] && arr[i - 1] - x < 4);
	};

	const inc: CheckFunction = (x, i, arr) => {
		return i === 0 || (x > arr[i - 1] && x - arr[i - 1] < 4);
	};

	return data.reduce((acc, row) => {
		if (row[0] > row[1] && row.every(dec)) {
			return acc + 1;
		} else if (row[0] < row[1] && row.every(inc)) {
			return acc + 1;
		}

		return acc;
	}, 0);
}

function part2(data: number[][]): number {}

// read data from part1.txt
const data = readFileSync("part1.txt", "utf8")
	.split("\n")
	.map((row) => row.split(" ").map(Number));

console.log(part1(data));
