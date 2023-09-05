export default class JaroWinkler {
    public threshold;
  constructor(){
    this.threshold = 0.7;
  }

  getThreshold() {
    return this.threshold;
  }

  similarity(s1:String, s2:String) {
    if (s1 == null) {
      throw new Error("s1 must not be null");
    } else if (s2 == null) {
      throw new Error("s2 must not be null");
    } else if (s1 === s2) {
      return 1.0;
    } else {
      let mtp:Array<number> = this.matches(s1, s2);
      let m = mtp[0];
      if (m == 0.0) {
        return 0.0;
      } else {
        let j =  ((m / s1.length + m / s2.length + (m - mtp[1]) / m) / 3.0);
        let jw = j;
        if (j > this.getThreshold()) {
          jw = j + Math.min(0.1, 1.0 / mtp[3]) * mtp[2] * (1.0 - j);
        }
        return jw;
      }
    }
  }

  distance(s1:String, s2:String) {
    return 1.0 - this.similarity(s1, s2);
  }

  matches(s1:String, s2:String) {
    let max;
    let min;
    if (s1.length > s2.length) {
      max = s1;
      min = s2;
    } else {
      max = s2;
      min = s1;
    }

    let range:number = Math.max(max.length / 2 - 1, 0);
    range = Math.floor(range);

    let match_indexes:Array<number> = new Array(min.length).fill(-1);
    // Arrays.fill(match_indexes, -1);
    let match_flags = new Array(max.length);
    let matches = 0;

    let transpositions;
    let prefix;
    for(let mi = 0; mi < min.length; ++mi) {
      let c1 = min.charAt(mi);
      transpositions = Math.max(mi - range, 0);

      for(prefix = Math.min(mi + range + 1, max.length); transpositions < prefix; ++transpositions) {
        if (!match_flags[transpositions] && c1 == max.charAt(transpositions)) {
          match_indexes[mi] = transpositions;
          match_flags[transpositions] = true;
          ++matches;
          break;
        }
      }
    }

    let ms1 = new Array(matches);
    let ms2 = new Array(matches);
    transpositions = 0;

    for(prefix = 0; transpositions < min.length; ++transpositions) {
      if (match_indexes[transpositions] != -1) {
        ms1[prefix] = min.charAt(transpositions);
        ++prefix;
      }
    }

    transpositions = 0;

    for(prefix = 0; transpositions < max.length; ++transpositions) {
      if (match_flags[transpositions]) {
        ms2[prefix] = max.charAt(transpositions);
        ++prefix;
      }
    }

    transpositions = 0;

    for(prefix = 0; prefix < ms1.length; ++prefix) {
      if (ms1[prefix] != ms2[prefix]) {
        ++transpositions;
      }
    }

    prefix = 0;

    for(let mi = 0; mi < min.length && s1.charAt(mi) == s2.charAt(mi); ++mi) {
      ++prefix;
    }

    return [matches,transpositions/2,prefix,max.length];
  }
}
