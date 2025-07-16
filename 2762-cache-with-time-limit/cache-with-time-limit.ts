type Cache= {
    value: number;
    expiryTime: number;
}

class TimeLimitedCache {
    private cache: Map<number, Cache>
    constructor() {
        this.cache = new Map<number, Cache>();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const now = Date.now();
        const alreadyExist: boolean = this.cache.has(key) && this.cache.get(key).expiryTime > now;

        this.cache.set(key, {
            value: value,
            expiryTime: duration + now
            });

        return alreadyExist
    }
    
    get(key: number): number {
        const now = Date.now()
        if(this.cache.has(key)){
           const entry = this.cache.get(key)
            if(entry && entry.expiryTime > now){
                return entry.value
            }else{
                this.cache.delete(key)
            }
        }
        return -1
    }
    
    count(): number {
        const now = Date.now();
        let count: number = 0;

        for( const [key, {expiryTime}] of this.cache.entries()){
            if(expiryTime > now){
                count++
            }else{
                this.cache.delete(key)
            }
        }

        return count;

    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */