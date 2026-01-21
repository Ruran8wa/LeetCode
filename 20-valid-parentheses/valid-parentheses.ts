function isValid(s: string): boolean {
    const stack: string[] = []
    const matching: Record<string, string> = {
        "}":"{",
        ")":"(",
        "]":"["
    }
    for(let i=0; i<s.length; i++){
        const char = s[i]

        if(char in matching){
            if(stack.length === 0){
                return false
            }

            const top = stack.pop()

            if(top !== matching[char]){
                return false
            }

        }else{
            stack.push(char)
        }
    }

    return stack.length === 0
};