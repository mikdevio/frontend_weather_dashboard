
export function classNames<T>( ...classes: T[]):string {
    return classes.filter(Boolean).join('')
}