var Levenshtein = /** @class */ (function () {
    function Levenshtein() {
    }
    Levenshtein.prototype.distance = function (s1, s2) {
        return this._distance(s1, s2, 2147483647);
    };
    Levenshtein.prototype._distance = function (s1, s2, limit) {
        if (s1 == null) {
            throw new Error("s1 must not be null");
        }
        else if (s2 == null) {
            throw new Error("s2 must not be null");
        }
        else if (s1 === s2) {
            return 0.0;
        }
        else if (s1.length == 0) {
            return s2.length;
        }
        else if (s2.length == 0) {
            return s1.length;
        }
        else {
            var v0 = Array(s2.length + 1);
            var v1 = Array(s2.length + 1);
            var i = void 0;
            for (i = 0; i < v0.length; v0[i] = i++) {
            }
            for (i = 0; i < s1.length; ++i) {
                v1[0] = i + 1;
                var minv1 = v1[0];
                for (var j = 0; j < s2.length; ++j) {
                    var cost = 1;
                    if (s1.charAt(i) == s2.charAt(j)) {
                        cost = 0;
                    }
                    v1[j + 1] = Math.min(v1[j] + 1, Math.min(v0[j + 1] + 1, v0[j] + cost));
                    minv1 = Math.min(minv1, v1[j + 1]);
                }
                if (minv1 >= limit) {
                    return limit;
                }
                var vtemp = v0;
                v0 = v1;
                v1 = vtemp;
            }
            return v0[s2.length];
        }
    };
    return Levenshtein;
}());
export default Levenshtein;
