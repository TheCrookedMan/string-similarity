var JaroWinkler = /** @class */ (function () {
    function JaroWinkler() {
        this.threshold = 0.7;
    }
    JaroWinkler.prototype.getThreshold = function () {
        return this.threshold;
    };
    JaroWinkler.prototype.similarity = function (s1, s2) {
        if (s1 == null) {
            throw new Error("s1 must not be null");
        }
        else if (s2 == null) {
            throw new Error("s2 must not be null");
        }
        else if (s1 === s2) {
            return 1.0;
        }
        else {
            var mtp = this.matches(s1, s2);
            var m = mtp[0];
            if (m == 0.0) {
                return 0.0;
            }
            else {
                var j = ((m / s1.length + m / s2.length + (m - mtp[1]) / m) / 3.0);
                var jw = j;
                if (j > this.getThreshold()) {
                    jw = j + Math.min(0.1, 1.0 / mtp[3]) * mtp[2] * (1.0 - j);
                }
                return jw;
            }
        }
    };
    JaroWinkler.prototype.distance = function (s1, s2) {
        return 1.0 - this.similarity(s1, s2);
    };
    JaroWinkler.prototype.matches = function (s1, s2) {
        var max;
        var min;
        if (s1.length > s2.length) {
            max = s1;
            min = s2;
        }
        else {
            max = s2;
            min = s1;
        }
        var range = Math.max(max.length / 2 - 1, 0);
        range = Math.floor(range);
        var match_indexes = new Array(min.length).fill(-1);
        // Arrays.fill(match_indexes, -1);
        var match_flags = new Array(max.length);
        var matches = 0;
        var transpositions;
        var prefix;
        for (var mi = 0; mi < min.length; ++mi) {
            var c1 = min.charAt(mi);
            transpositions = Math.max(mi - range, 0);
            for (prefix = Math.min(mi + range + 1, max.length); transpositions < prefix; ++transpositions) {
                if (!match_flags[transpositions] && c1 == max.charAt(transpositions)) {
                    match_indexes[mi] = transpositions;
                    match_flags[transpositions] = true;
                    ++matches;
                    break;
                }
            }
        }
        var ms1 = new Array(matches);
        var ms2 = new Array(matches);
        transpositions = 0;
        for (prefix = 0; transpositions < min.length; ++transpositions) {
            if (match_indexes[transpositions] != -1) {
                ms1[prefix] = min.charAt(transpositions);
                ++prefix;
            }
        }
        transpositions = 0;
        for (prefix = 0; transpositions < max.length; ++transpositions) {
            if (match_flags[transpositions]) {
                ms2[prefix] = max.charAt(transpositions);
                ++prefix;
            }
        }
        transpositions = 0;
        for (prefix = 0; prefix < ms1.length; ++prefix) {
            if (ms1[prefix] != ms2[prefix]) {
                ++transpositions;
            }
        }
        prefix = 0;
        for (var mi = 0; mi < min.length && s1.charAt(mi) == s2.charAt(mi); ++mi) {
            ++prefix;
        }
        return [matches, Math.floor(transpositions / 2), prefix, max.length];
    };
    return JaroWinkler;
}());
export default JaroWinkler;
