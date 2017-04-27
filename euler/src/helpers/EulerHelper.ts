class EulerHelper {
    /**
     * Return iterator generating Fibonacci numbers.
     */
    static *fibonaccis(): IterableIterator<number> {
        let a = 1;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }

    /**
     * Return iterator ranging from begin to end (non-inclusive) stepping by
     * interval.
     */
    static *range(begin: number, end: number, interval: number = 1):
            IterableIterator<number> {
        for (let i = begin; i < end; i += interval) {
            yield i;
        }
    }
}

export default EulerHelper;