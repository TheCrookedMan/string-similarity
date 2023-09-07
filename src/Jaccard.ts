import ShingleBased from "./ShingleBased";

export default class Jaccard extends ShingleBased {

  public constructor(k:number) {
    super(k);
  }

  similarity(s1:string, s2:string) {
    if (s1 == null) {
      throw new Error("s1 must not be null");
    } else if (s2 == null) {
      throw new Error("s2 must not be null");
    } else if (s1 === s2) {
      return 1.0;
    } else {
      let profile1 = this.getProfile(s1);
      let profile2 = this.getProfile(s2);
      let union = new Map();

      let profile1Iterator = profile1.keys()
      let keys1 = profile1Iterator.next();
      while(!keys1.done){
        union.set(keys1.value,null);
        keys1 = profile1Iterator.next();
      }
      let profile2Iterator = profile2.keys()
      let keys2 = profile2Iterator.next();
      while(!keys2.done){
        union.set(keys2.value,null);
        keys2 = profile2Iterator.next();
      }
      let inter = profile1.size + profile2.size - union.size;
      return 1.0 * inter / union.size;
    }
  }

  distance(s1:string, s2:string) {
    return 1.0 - this.similarity(s1, s2);
  }
}
