import ShingleBased from "./ShingleBased";

export default class QGram extends ShingleBased {
  constructor(k: number) {
    super(k);
  }

  distance(s1: string, s2: string) {
    if (s1 == null) {
      throw new Error("s1 must not be null");
    } else if (s2 == null) {
      throw new Error("s2 must not be null");
    } else if (s1 === s2) {
      return 0.0;
    } else {
      let profile1 = this.getProfile(s1);
      let profile2 = this.getProfile(s2);
      return this._distance(profile1, profile2);
    }
  }

  _distance(profile1: Map<string, number>, profile2: Map<string, number>) {
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
    let agg = 0;

    let v1;
    let v2;

    let unionIterator = union.keys();

    for (
      let var5 = unionIterator.next();
      !var5.done;
      agg += Math.abs(v1 - v2)
    ) {
      let key = var5.value;
      v1 = 0;
      v2 = 0;
      let iv1 = profile1.get(key);
      if (iv1 != null) {
        v1 = iv1;
      }

      let iv2 = profile2.get(key);
      if (iv2 != null) {
        v2 = iv2;
      }
      var5 = unionIterator.next();
    }

    return agg;
  }
}
