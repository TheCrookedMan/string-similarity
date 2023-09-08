var RatcliffObershelp = /** @class */ (function () {
    function RatcliffObershelp() {
    }
    RatcliffObershelp.prototype.similarity = function (s1, s2) {
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
            var matches = this.getMatchList(s1, s2);
            var sum_of_matches_1 = 0;
            matches.map(function (item) {
                sum_of_matches_1 += item.length;
            });
            return (2.0 * sum_of_matches_1) / (s1.length + s2.length);
        }
    };
    RatcliffObershelp.prototype.distance = function (s1, s2) {
        return 1.0 - this.similarity(s1, s2);
    };
    RatcliffObershelp.prototype.getMatchList = function (s1, s2) {
        var list = new Array();
        var match = this.frontMaxMatch(s1, s2);
        if (match.length > 0) {
            var frontsource = s1.substring(0, s1.indexOf(match));
            var fronttarget = s2.substring(0, s2.indexOf(match));
            var frontqueue = this.getMatchList(frontsource, fronttarget);
            var endsource = s1.substring(s1.indexOf(match) + match.length);
            var endtarget = s2.substring(s2.indexOf(match) + match.length);
            var endqueue = this.getMatchList(endsource, endtarget);
            list.push(match);
            list = list.concat(frontqueue, endqueue);
        }
        return list;
    };
    RatcliffObershelp.prototype.frontMaxMatch = function (s1, s2) {
        var longest = 0;
        var longestsubstring = "";
        for (var i = 0; i < s1.length; ++i) {
            for (var j = i + 1; j <= s1.length; ++j) {
                var substring = s1.substring(i, j);
                if (s2.indexOf(substring) > -1 && substring.length > longest) {
                    longest = substring.length;
                    longestsubstring = substring;
                }
            }
        }
        return longestsubstring;
    };
    return RatcliffObershelp;
}());
export default RatcliffObershelp;
