
import ShingleBased from "./ShingleBased"

export default class Cosine extends ShingleBased {
    constructor(k: number) {
        super(k);
    }
    similarity(s1: string, s2: string) {
        if (s1 == null) {
            throw new Error("s1 must not be null");
        } else if (s2 == null) {
            throw new Error("s2 must not be null");
        } else if (s1 == s2) {
            return 1.0;
        } else if (s1.length >= this.getK() && s2.length >= this.getK()) {
            let profile1 = this.getProfile(s1);
            let profile2 = this.getProfile(s2);
            return this.dotProduct(profile1, profile2) / (this.norm(profile1) * this.norm(profile2));
        } else {
            return 0.0;
        }
    }

    norm(profile: Map<string, number>) {
        let agg = 0.0;
        let var3 = profile.entries();
        let entry = var3.next();
        for (; !entry.done; agg += 1.0 * entry.value[1] * entry.value[1]) {
            entry = var3.next();
            if(entry.done){
                return Math.sqrt(agg);
            }
        }
        return Math.sqrt(agg);
    }
    dotProduct(profile1:any, profile2:any) {
        let small_profile = profile2;
        let large_profile = profile1;
        if (profile1.size < profile2.size) {
            small_profile = profile1;
            large_profile = profile2;
        }
        let agg = 0.0;
        let var6 = small_profile.entries();
        let entry = var6.next()
        while (!entry.done) {
            let i = large_profile.get(entry.value[0]);
            if (i != null) {
                agg += 1.0 * entry.value[1] * i;
            }
            entry = var6.next();
        }
        return agg;
    }

    distance(s1:string, s2:string) {
        return 1.0 - this.similarity(s1, s2);
    }
    similarityMap(profile1:any,  profile2:any) {
        return this.dotProduct(profile1, profile2) / (this.norm(profile1) * this.norm(profile2));
    }
}