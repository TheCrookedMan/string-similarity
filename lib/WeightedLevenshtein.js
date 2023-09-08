var WeightedLevenshtein = /** @class */ (function () {
    function WeightedLevenshtein(charsub, charchange) {
        if (charchange === void 0) { charchange = null; }
        this.charsub = charsub;
        this.charchange = charchange;
    }
    WeightedLevenshtein.prototype.distance = function (s1, s2) {
        return this._distance(s1, s2, 1.7976931348623157e308);
    };
    WeightedLevenshtein.prototype._distance = function (s1, s2, limit) {
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
            var v0 = Array(s2.length + 1).fill(0);
            var v1 = Array(s2.length + 1).fill(0);
            v0[0] = 0.0;
            var i = void 0;
            for (i = 1; i < v0.length; ++i) {
                v0[i] = v0[i - 1] + this.insertionCost(s2.charAt(i - 1));
            }
            for (i = 0; i < s1.length; ++i) {
                var s1i = s1.charAt(i);
                var deletion_cost = this.deletionCost(s1i);
                v1[0] = v0[0] + deletion_cost;
                var minv1 = v1[0];
                for (var j = 0; j < s2.length; ++j) {
                    var s2j = s2.charAt(j);
                    var cost = 0.0;
                    if (s1i != s2j) {
                        cost = this.charsub.cost(s1i, s2j);
                    }
                    var insertion_cost = this.insertionCost(s2j);
                    v1[j + 1] = Math.min(v1[j] + insertion_cost, Math.min(v0[j + 1] + deletion_cost, v0[j] + cost));
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
    WeightedLevenshtein.prototype.insertionCost = function (c) {
        return this.charchange == null ? 1.0 : this.charchange.insertionCost(c);
    };
    WeightedLevenshtein.prototype.deletionCost = function (c) {
        return this.charchange == null ? 1.0 : this.charchange.deletionCost(c);
    };
    return WeightedLevenshtein;
}());
export default WeightedLevenshtein;
