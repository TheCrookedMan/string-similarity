import CharacterSubstitutionInterface from "./interfaces/CharacterSubstitutionInterface";
import CharacterInsDelInterface from "./interfaces/CharacterInsDelInterface";

export default class WeightedLevenshtein {
  charsub: CharacterSubstitutionInterface;
  charchange: CharacterInsDelInterface;

  constructor(
    charsub: CharacterSubstitutionInterface,
    charchange: CharacterInsDelInterface = null
  ) {
    this.charsub = charsub;
    this.charchange = charchange;
  }

  distance(s1: string, s2: string) {
    return this._distance(s1, s2, 1.7976931348623157e308);
  }

  private _distance(s1: string, s2: string, limit: number) {
    if (s1 == null) {
      throw new Error("s1 must not be null");
    } else if (s2 == null) {
      throw new Error("s2 must not be null");
    } else if (s1 === s2) {
      return 0.0;
    } else if (s1.length == 0) {
      return s2.length;
    } else if (s2.length == 0) {
      return s1.length;
    } else {
      let v0 = Array(s2.length + 1).fill(0);
      let v1 = Array(s2.length + 1).fill(0);
      v0[0] = 0.0;

      let i;
      for (i = 1; i < v0.length; ++i) {
        v0[i] = v0[i - 1] + this.insertionCost(s2.charAt(i - 1));
      }

      for (i = 0; i < s1.length; ++i) {
        let s1i = s1.charAt(i);
        let deletion_cost = this.deletionCost(s1i);
        v1[0] = v0[0] + deletion_cost;
        let minv1 = v1[0];

        for (let j = 0; j < s2.length; ++j) {
          let s2j = s2.charAt(j);
          let cost = 0.0;
          if (s1i != s2j) {
            cost = this.charsub.cost(s1i, s2j);
          }

          let insertion_cost = this.insertionCost(s2j);
          v1[j + 1] = Math.min(
            v1[j] + insertion_cost,
            Math.min(v0[j + 1] + deletion_cost, v0[j] + cost)
          );
          minv1 = Math.min(minv1, v1[j + 1]);
        }

        if (minv1 >= limit) {
          return limit;
        }

        let vtemp = v0;
        v0 = v1;
        v1 = vtemp;
      }

      return v0[s2.length];
    }
  }

  insertionCost(c: string) {
    return this.charchange == null ? 1.0 : this.charchange.insertionCost(c);
  }

  deletionCost(c: string) {
    return this.charchange == null ? 1.0 : this.charchange.deletionCost(c);
  }
}
