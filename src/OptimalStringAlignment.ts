export default class OptimalStringAlignment {
  constructor() {}

  distance(s1: string, s2: string) {
    if (s1 == null) {
      throw new Error("s1 must not be null");
    } else if (s2 == null) {
      throw new Error("s2 must not be null");
    } else if (s1 === s2) {
      return 0.0;
    } else {
      let n = s1.length;
      let m = s2.length;
      if (n == 0) {
        return m;
      } else if (m == 0) {
        return n;
      } else {
        let d = Array(n + 2)
          .fill([])
          .map(() => {
            return Array(m + 2).fill(0);
          });

        for (let j = 0; j <= n; d[j][0] = j++) {}

        for (let j = 0; j <= m; d[0][j] = j++) {}

        for (let i = 1; i <= n; ++i) {
          for (let j = 1; j <= m; ++j) {
            let cost = 1;
            if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
              cost = 0;
            }

            d[i][j] = this.min(
              d[i - 1][j - 1] + cost,
              d[i][j - 1] + 1,
              d[i - 1][j] + 1
            );
            if (
              i > 1 &&
              j > 1 &&
              s1.charAt(i - 1) == s2.charAt(j - 2) &&
              s1.charAt(i - 2) == s2.charAt(j - 1)
            ) {
              d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
            }
          }
        }

        return d[n][m];
      }
    }
  }

  min(a: number, b: number, c: number) {
    return Math.min(a, Math.min(b, c));
  }
}
