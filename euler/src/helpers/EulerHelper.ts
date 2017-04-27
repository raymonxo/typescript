class EulerHelper {
    /**
     * Return iterator ranging from begin to end (non-inclusive) stepping by interval.
     */
    static *range(begin: number, end: number, interval: number = 1): IterableIterator<number> {
        for (let i = begin; i < end; i += interval) {
            yield i;
        }
    }
}

export default EulerHelper;