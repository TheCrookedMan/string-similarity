var LongestCommonSubsequence = /** @class */ (function () {
    function LongestCommonSubsequence() {
    }
    LongestCommonSubsequence.prototype.distance = function (s1, s2) {
        if (s1 == null) {
            throw new Error("s1 must not be null");
        }
        else if (s2 == null) {
            throw new Error("s2 must not be null");
        }
        else {
            return s1 === s2 ? 0.0 : (s1.length + s2.length - 2 * this.length(s1, s2));
        }
    };
    LongestCommonSubsequence.prototype.length = function (s1, s2) {
        if (s1 == null) {
            throw new Error("s1 must not be null");
        }
        else if (s2 == null) {
            throw new Error("s2 must not be null");
        }
        else {
            var s1_length = s1.length;
            var s2_length_1 = s2.length;
            var x = s1.split("");
            var y = s2.split("");
            var c = Array(s1_length + 1).fill([]).map(function () { return Array(s2_length_1 + 1).fill(null); });
            for (var i = 1; i <= s1_length; ++i) {
                for (var j = 1; j <= s2_length_1; ++j) {
                    if (x[i - 1] == y[j - 1]) {
                        c[i][j] = c[i - 1][j - 1] + 1;
                    }
                    else {
                        c[i][j] = Math.max(c[i][j - 1], c[i - 1][j]);
                    }
                }
            }
            return c[s1_length][s2_length_1];
        }
    };
    return LongestCommonSubsequence;
}());
export default LongestCommonSubsequence;
