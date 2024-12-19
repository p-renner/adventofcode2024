import { readFileSync } from "fs";

function part1(data: string[]): number {
	const visited = Array.from({ length: data.length }, () =>
		Array.from({ length: data[0].length }, () => [
			false,
			false,
			false,
			false,
		]),
	);

	let dirs = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	];
	let dir = 0;
	let [x, y] = getStartPos(data);
	visited[x][y][dir] = true;

	let steps = 0;

	while (true) {
		const dx = x + dirs[dir][0];
		const dy = y + dirs[dir][1];

		if (dx < 0 || dx >= data.length || dy < 0 || dy >= data[0].length) {
			return steps;
		}

		if (data[dx][dy] === "#") {
			dir = (dir + 1) % 4;
			continue;
		}

		if (visited[dx][dy][dir]) {
			return steps;
		}

		x = dx;
		y = dy;

		if (visited[x][y].every((v) => !v)) {
			steps++;
		}

		visited[x][y][dir] = true;
	}
}

function part2(rules: string[], updates: number[][]): number {}

function getStartPos(data: string[]): [number, number] {
	for (let i = 0; i < data.length; i++) {
		const j = data[i].indexOf("^");

		if (j !== -1) {
			return [i, j];
		}
	}

	throw new Error("No start position found");
}

// read data from part1.txt
const data = readFileSync("part1.txt", "utf8").split("\n");

console.log(part1(data));
//console.log(part2(rules, update));
