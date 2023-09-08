import Levenshtein from "./Levenshtein";
var NormalizedLevenshtein = /** @class */ (function () {
    function NormalizedLevenshtein() {
        this.l = new Levenshtein();
    }
    NormalizedLevenshtein.prototype.distance = function (s1, s2) {
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
            var m_len = Math.max(s1.length, s2.length);
            return m_len == 0 ? 0.0 : this.l.distance(s1, s2) / m_len;
        }
    };
    NormalizedLevenshtein.prototype.similarity = function (s1, s2) {
        return 1.0 - this.distance(s1, s2);
    };
    return NormalizedLevenshtein;
}());
export default NormalizedLevenshtein;
