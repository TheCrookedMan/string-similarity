var OptimalStringAlignment = /** @class */ (function () {
    function OptimalStringAlignment() {
    }
    OptimalStringAlignment.prototype.distance = function (s1, s2) {
        if (s1 == null) {
            throw new Error("s1 must not be null");
        }
        else if (s2 == null) {
            throw new Error("s2 must not be null");
        }
        else if (s1 === s2) {
            return 0.0;
        }
        else {
            var n = s1.length;
            var m_1 = s2.length;
            if (n == 0) {
                return m_1;
            }
            else if (m_1 == 0) {
                return n;
            }
            else {
                var d = Array(n + 2)
                    .fill([])
                    .map(function () {
                    return Array(m_1 + 2).fill(0);
                });
                for (var j = 0; j <= n; d[j][0] = j++) { }
                for (var j = 0; j <= m_1; d[0][j] = j++) { }
                for (var i = 1; i <= n; ++i) {
                    for (var j = 1; j <= m_1; ++j) {
                        var cost = 1;
                        if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                            cost = 0;
                        }
                        d[i][j] = this.min(d[i - 1][j - 1] + cost, d[i][j - 1] + 1, d[i - 1][j] + 1);
                        if (i > 1 &&
                            j > 1 &&
                            s1.charAt(i - 1) == s2.charAt(j - 2) &&
                            s1.charAt(i - 2) == s2.charAt(j - 1)) {
                            d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
                        }
                    }
                }
                return d[n][m_1];
            }
        }
    };
    OptimalStringAlignment.prototype.min = function (a, b, c) {
        return Math.min(a, Math.min(b, c));
    };
    return OptimalStringAlignment;
}());
export default OptimalStringAlignment;
