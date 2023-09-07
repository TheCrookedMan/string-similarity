
export default class LongestCommonSubsequence{
  constructor(){}

  distance(s1:string, s2:string) {
    if (s1 == null) {
      throw new Error("s1 must not be null");
    } else if (s2 == null) {
      throw new Error("s2 must not be null");
    } else {
      return s1 === s2 ? 0.0 : (s1.length + s2.length - 2 * this.length(s1, s2));
    }
  }

  length(s1:string, s2:string) {
    if (s1 == null) {
      throw new Error("s1 must not be null");
    } else if (s2 == null) {
      throw new Error("s2 must not be null");
    } else {
      let s1_length = s1.length;
      let s2_length = s2.length;
      let x = s1.split("");
      let y = s2.split("");
      let c = Array(s1_length + 1).fill([]).map(()=>{return Array(s2_length + 1).fill(null)})

      for(let i = 1; i <= s1_length; ++i) {
        for(let j = 1; j <= s2_length; ++j) {
          if (x[i - 1] == y[j - 1]) {
            c[i][j] = c[i - 1][j - 1] + 1;
          } else {
            c[i][j] = Math.max(c[i][j - 1], c[i - 1][j]);
          }
        }
      }

      return c[s1_length][s2_length];
    }
  }
}
