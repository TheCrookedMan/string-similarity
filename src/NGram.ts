
export default class NGram {
  DEFAULT_N:number = 2;
  n:number = null;

  constructor(n:number = 2){
    this.n = n;
  }

  distance(s0:string, s1:string) {
    if (s0 == null) {
      throw new Error("s0 must not be null");
    } else if (s1 == null) {
      throw new Error("s1 must not be null");
    } else if (s0 === s1) {
      return 0.0;
    } else {
      let special = true;
      let sl = s0.length;
      let tl = s1.length;
      if (sl != 0 && tl != 0) {
        let cost = 0;
        if (sl >= this.n && tl >= this.n) {
          let sa = Array(sl + this.n - 1);

          let i;
          for(i = 0; i < sa.length; ++i) {
            if (i < this.n - 1) {
              sa[i] = '\n';
            } else {
              sa[i] = s0.charAt(i - this.n + 1);
            }
          }

          let p = Array(sl + 1);
          let d = Array(sl + 1);
          let t_j = Array(this.n);

          for(i = 0; i <= sl; ++i) {
            p[i] = i;
          }

          for(let j = 1; j <= tl; ++j) {
            let tn;
            if (j >= this.n) {
              t_j = s1.substring(j - this.n, j).split("");
            } else {
              for(tn = 0; tn < this.n - j; ++tn) {
                t_j[tn] = '\n';
              }

              for(tn = this.n - j; tn < this.n; ++tn) {
                t_j[tn] = s1.charAt(tn - (this.n - j));
              }
            }

            d[0] = j;

            for(i = 1; i <= sl; ++i) {
              cost = 0;
              tn = this.n;

              for(let ni = 0; ni < this.n; ++ni) {
                if (sa[i - 1 + ni] != t_j[ni]) {
                  ++cost;
                } else if (sa[i - 1 + ni] == '\n') {
                  --tn;
                }
              }

              let ec = cost / tn;
              d[i] = Math.min(Math.min(d[i - 1] + 1.0, p[i] + 1.0), p[i - 1] + ec);
            }

            let d2 = p;
            p = d;
            d = d2;
          }

          return (p[sl] / Math.max(tl, sl));
        } else {
          let i = 0;

          for(let ni = Math.min(sl, tl); i < ni; ++i) {
            if (s0.charAt(i) == s1.charAt(i)) {
              ++cost;
            }
          }

          return (cost / Math.max(sl, tl));
        }
      } else {
        return 1.0;
      }
    }
  }
}
