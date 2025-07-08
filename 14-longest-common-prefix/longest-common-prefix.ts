function longestCommonPrefix(strs: string[]): string {
    let prefix: string = ''

    for(let i = 0; i < strs[0].length; i++){
        const char = strs[0][i]

        for(let x = 0; x < strs.length; x++){
            if(strs[x][i] !== char) return prefix
        }

        prefix += char
    }
    return prefix
};