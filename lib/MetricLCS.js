import LongestCommonSubsequence from './LongestCommonSubsequence';
var MetricLCS = /** @class */ (function () {
    function MetricLCS() {
        this.lcs = null;
        this.lcs = new LongestCommonSubsequence();
    }
    MetricLCS.prototype.distance = function (s1, s2) {
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
            return m_len == 0 ? 0.0 : 1.0 - 1.0 * this.lcs.length(s1, s2) / m_len;
        }
    };
    return MetricLCS;
}());
export default MetricLCS;
