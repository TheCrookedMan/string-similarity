export default class RatcliffObershelp {
  constructor() {}

  similarity(s1: string, s2: string) {
    if (s1 == null) {
      throw new Error("s1 must not be null");
    } else if (s2 == null) {
      throw new Error("s2 must not be null");
    } else if (s1 === s2) {
      return 1.0;
    } else {
      let matches = this.getMatchList(s1, s2);
      let sum_of_matches = 0;

      matches.map((item) => {
        sum_of_matches += item.length;
      });
      return (2.0 * sum_of_matches) / (s1.length + s2.length);
    }
  }

  distance(s1: string, s2: string) {
    return 1.0 - this.similarity(s1, s2);
  }

  getMatchList(s1: string, s2: string) {
    let list = new Array();
    let match = this.frontMaxMatch(s1, s2);

    if (match.length > 0) {
      let frontsource = s1.substring(0, s1.indexOf(match));
      let fronttarget = s2.substring(0, s2.indexOf(match));
      let frontqueue = this.getMatchList(frontsource, fronttarget);
      let endsource = s1.substring(s1.indexOf(match) + match.length);
      let endtarget = s2.substring(s2.indexOf(match) + match.length);
      let endqueue = this.getMatchList(endsource, endtarget);
      list.push(match);
      list = list.concat(frontqueue, endqueue);
    }
    return list;
  }

  frontMaxMatch(s1: string, s2: string) {
    let longest = 0;
    let longestsubstring = "";

    for (let i = 0; i < s1.length; ++i) {
      for (let j = i + 1; j <= s1.length; ++j) {
        let substring = s1.substring(i, j);
        if (s2.indexOf(substring) > -1 && substring.length > longest) {
          longest = substring.length;
          longestsubstring = substring;
        }
      }
    }

    return longestsubstring;
  }
}
