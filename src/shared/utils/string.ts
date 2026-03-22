export function pluralize(word: string, amount: number): string {
    if ( amount === 1 ) return word;

    const lastChar = word[word.length - 1].toLowerCase()
    if ( ['a', 'e', 'i', 'o', 'u'].includes(lastChar) ) {
        return word + 's'
    }

    return word + "es";
}
