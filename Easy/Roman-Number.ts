function romanToInt(s: string): number {
    interface Romans {
        I: number;
        V: number;
        X: number;
        L: number;
        C: number;
        D: number;
        M: number;
    }

    const roms: Romans = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }

    const result: number[] = []
    let i: number = 0
    while(i < s.length){
        const cur = roms[s[i]];
        const next = roms[s[i+1]];
        if(cur < next){
            const real: number = next - cur
            result.push(real)
            i+=2
        }else{
            result.push(cur)
            i++
        }
    }
    return result.reduce((a,b) => a + b, 0)
};