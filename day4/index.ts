import { readFileSync } from "fs";

function part1(data: string[]): number {
	let count = 0;
	const directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	];

	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			if (data[i][j] === "X") {
				for (const dir of directions) {
					count += checkXmas(i, j, dir) ? 1 : 0;
				}
			}
		}
	}

	return count;

	function checkXmas(i: number, j: number, dir: number[]) {
		let x = i;
		let y = j;
		let count = 0;
		const search = ["M", "A", "S"];

		x += dir[0];
		y += dir[1];

		while (x >= 0 && x < data.length && y >= 0 && y < data[x].length) {
			if (data[x][y] !== search[count]) {
				break;
			}

			count++;

			if (count === 3) {
				return true;
			}

			x += dir[0];
			y += dir[1];
		}

		return false;
	}
}

//function part2(data: string): number {}

// read data from part1.txt
const data = readFileSync("part1.txt", "utf8").split("\n");
console.log(part1(data));
//console.log(part2(data));
