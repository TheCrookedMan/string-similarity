# string-similarity

字符串相似度比较工具，为了与 [java-string-similarity](https://github.com/tdebatty/java-string-similarity/blob/master/README.md) 所用算法保持一致。实现前端和后端算法统一，得出同样的比较结果。

### 使用
```node
npm i @thecrookedman/string-similarity --save
```

### 示例

```js
import {JaroWinkler,Cosine,Damerau,Jaccard,Levenshtein,LongestCommonSubsequence,MetricLCS,NGram,NormalizedLevenshtein,OptimalStringAlignment,QGram,RatcliffObershelp,SorensenDice,WeightedLevenshtein} from '@thecrookedman/string-similarity';
//  字符串示例
let str1 = "123321";

let str2 = "123421";

console.log('JaroWinkler: '+new JaroWinkler().similarity(str1,str2)) //return 0.9222222222222223

console.log('Cosine: '+new Cosine(3).similarity(str1,str2)) //return 0.33333333333333337

console.log("Damerau:"+new Damerau().distance(str1,str2)); //return 1

console.log("Jaccard:"+new Jaccard(3).similarity(str1,str2)); //return 0.14285714285714285

console.log("Levenshtein:"+new Levenshtein().distance(str1,str2)); //return 1

console.log("LongestCommonSubsequence:"+new LongestCommonSubsequence().distance(str1,str2));//return 2

console.log("MetricLCS:"+new MetricLCS().distance(str1,str2));//return 0.16666666666666663

console.log("NGram:"+new NGram().distance(str1,str2));//return 0.16666666666666666

console.log("NormalizedLevenshtein:"+new NormalizedLevenshtein().similarity(str1,str2));//return 0.8333333333333334

console.log("OptimalStringAlignment:"+new OptimalStringAlignment().distance(str1,str2));//return 1

console.log("QGram:"+new QGram(3).distance(str1,str2));//return 6

console.log("RatcliffObershelp:"+new RatcliffObershelp().similarity(str1,str2));//return 0.8333333333333334

console.log("SorensenDice:"+new SorensenDice(3).similarity(str1,str2));//return 0

let wl = new WeightedLevenshtein({
    cost:(c1:string, c2:string) =>{
        if (c1 == 't' && c2 == 'r') {
          return 0.5;
        }
        return 1.0;
      }
});

console.log("WeightedLevenshtein:"+wl.distance(str1,str2));//return 1
```
