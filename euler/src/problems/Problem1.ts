import Helper from "../helpers/EulerHelper"

class Problem1 {
    static solve(): number {
        return Array.from(Helper.range(1, 1000))
            .filter(x => x % 3 === 0 || x % 5 === 0)
            .reduce((acc, x) => acc + x, 0);
    }
}

export default Problem1;