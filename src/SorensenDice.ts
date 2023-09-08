import ShingleBased from "./ShingleBased";

export default class SorensenDice extends ShingleBased {
  constructor(k: number) {
    super(k);
  }
  similarity(s1: string, s2: string) {
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

      let profile1Iterator = profile1.keys();
      let keys1 = profile1Iterator.next();
      while (!keys1.done) {
        union.set(keys1.value, null);
        keys1 = profile1Iterator.next();
      }
      let profile2Iterator = profile2.keys();
      let keys2 = profile2Iterator.next();
      while (!keys2.done) {
        union.set(keys2.value, null);
        keys2 = profile2Iterator.next();
      }
      let inter = 0;

      let unionIterator = union.keys();
      let var7 = unionIterator.next();
      while (!var7.done) {
        var7 = unionIterator.next();
        if (profile1.get(var7.value) && profile2.get(var7.value)) {
          ++inter;
        }
      }

      return (2.0 * inter) / (profile1.size + profile2.size);
    }
  }

  distance(s1: string, s2: string) {
    return 1.0 - this.similarity(s1, s2);
  }
}
