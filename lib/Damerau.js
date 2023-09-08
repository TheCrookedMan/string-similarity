var Damerau = /** @class */ (function () {
    function Damerau() {
    }
    Damerau.prototype.distance = function (s1, s2) {
        if (s1 == null) {
            throw new Error("s1 must not be null");
        }
        else if (s2 == null) {
            throw new Error("s2 must not be null");
        }
        else if (s1 == s2) {
            return 0.0;
        }
        else {
            var inf = s1.length + s2.length;
            var da = new Map();
            var d = void 0;
            for (d = 0; d < s1.length; ++d) {
                da.set(s1.charAt(d), 0);
            }
            for (d = 0; d < s2.length; ++d) {
                da.set(s2.charAt(d), 0);
            }
            //   int[][] h = new int[s1.length() + 2][s2.length() + 2];
            var h = [];
            for (var i_1 = 0; i_1 < s1.length + 2; i_1++) {
                var v = [];
                for (var j = 0; j < s2.length + 2; j++) {
                    v.push(0);
                }
                h.push(v);
            }
            var i = void 0;
            for (i = 0; i <= s1.length; h[i + 1][1] = i++) {
                h[i + 1][0] = inf;
            }
            for (i = 0; i <= s2.length; h[1][i + 1] = i++) {
                h[0][i + 1] = inf;
            }
            for (i = 1; i <= s1.length; ++i) {
                var db = 0;
                for (var j = 1; j <= s2.length; ++j) {
                    var i1 = da.get(s2.charAt(j - 1));
                    var cost = 1;
                    if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                        cost = 0;
                        db = j;
                    }
                    h[i + 1][j + 1] = this.min(h[i][j] + cost, h[i + 1][j] + 1, h[i][j + 1] + 1, h[i1][db] + (i - i1 - 1) + 1 + (j - db - 1));
                }
                da.set(s1.charAt(i - 1), i);
            }
            return h[s1.length + 1][s2.length + 1];
        }
    };
    Damerau.prototype.min = function (a, b, c, d) {
        return Math.min(a, Math.min(b, Math.min(c, d)));
    };
    return Damerau;
}());
export default Damerau;
