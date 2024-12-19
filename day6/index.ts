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

	const dirs = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	];

	let [x, y] = getStartPos(data);
	let dir = 0;
	let steps = 0;
	visited[x][y][dir] = true;

	while (true) {
		const dx = x + dirs[dir][0];
		const dy = y + dirs[dir][1];

		if (isOutOfBounds(dx, dy, data) || checkLoop(dx, dy, dir, visited)) {
			return steps;
		}

		if (checkTurn(dx, dy, data)) {
			dir = (dir + 1) % 4;
			continue;
		}

		if (isDistinct(dx, dy, visited)) {
			steps++;
		}

		visited[dx][dy][dir] = true;
		[x, y] = [dx, dy];
	}
}

function part2(data: string[]): number {
	let count = 0;

	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			if (data[i][j] === "#") {
				continue;
			}

			if (willLoop(data, [i, j])) {
				count++;
			}
		}
	}

	return count;
}

function isOutOfBounds(x: number, y: number, data: string[]): boolean {
	return x < 0 || x >= data.length || y < 0 || y >= data[0].length;
}

function checkLoop(
	x: number,
	y: number,
	dir: number,
	visited: boolean[][][],
): boolean {
	return visited[x][y][dir];
}

function checkTurn(x: number, y: number, data: string[]): boolean {
	return data[x][y] === "#";
}

function isDistinct(x: number, y: number, visited: boolean[][][]): boolean {
	return visited[x][y].every((v) => !v);
}

function getStartPos(data: string[]): [number, number] {
	for (let i = 0; i < data.length; i++) {
		const j = data[i].indexOf("^");

		if (j !== -1) {
			return [i, j];
		}
	}

	throw new Error("No start position found");
}

function willLoop(data: string[], block: [number, number]): boolean {
	const isBlocked = (x: number, y: number) => block[0] == x && block[1] == y;

	const visited = Array.from({ length: data.length }, () =>
		Array.from({ length: data[0].length }, () => [
			false,
			false,
			false,
			false,
		]),
	);

	const dirs = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	];

	let [x, y] = getStartPos(data);
	let dir = 0;

	while (true) {
		const dx = x + dirs[dir][0];
		const dy = y + dirs[dir][1];

		if (isOutOfBounds(dx, dy, data)) {
			break;
		}

		if (checkLoop(dx, dy, dir, visited)) {
			return true;
		}

		if (checkTurn(dx, dy, data) || isBlocked(dx, dy)) {
			dir = (dir + 1) % 4;
			continue;
		}

		visited[dx][dy][dir] = true;
		[x, y] = [dx, dy];
	}

	return false;
}

// read data from part1.txt
const data = readFileSync("part1.txt", "utf8").split("\n");

console.log(part1(data));
console.log(part2(data));
