import LongestCommonSubsequence from './LongestCommonSubsequence'

export default class MetricLCS {
    lcs:LongestCommonSubsequence = null;
  constructor(){
    this.lcs = new LongestCommonSubsequence();
  }

  distance(s1:string, s2:string) {
    if (s1 == null) {
      throw new Error("s1 must not be null");
    } else if (s2 == null) {
      throw new Error("s2 must not be null");
    } else if (s1  === s2) {
      return 0.0;
    } else {
      let m_len = Math.max(s1.length, s2.length);
      return m_len == 0 ? 0.0 : 1.0 - 1.0 * this.lcs.length(s1, s2) / m_len;
    }
  }
}
