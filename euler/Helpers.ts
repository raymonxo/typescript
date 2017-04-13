namespace RayMitchell.Euler {
    // TODO: Implement functional methods (e.g. filter, map) to work directly with iterators.
    //       See wu.js for example of library that does this.

    /**
     * Return iterator ranging from begin to end (non-inclusive) stepping by interval.
     */
    export function* range(begin: number, end: number, interval: number = 1): IterableIterator<number> {
        for (let i = begin; i < end; i += interval) {
            yield i;
        }
    }
}