let str1 = "123321";
let str2 = "123421";

import {JaroWinkler,Cosine,Damerau,Jaccard,Levenshtein,LongestCommonSubsequence,MetricLCS,NGram,NormalizedLevenshtein,OptimalStringAlignment,QGram,RatcliffObershelp,SorensenDice,WeightedLevenshtein} from './index'

document.write("JaroWinkler:"+new JaroWinkler().similarity(str1,str2));

document.write("<br />");

document.write("Cosine:"+new Cosine(3).similarity(str1,str2));

document.write("<br />");

document.write("Damerau:"+new Damerau().distance(str1,str2));

document.write("<br />");

document.write("Jaccard:"+new Jaccard(3).similarity(str1,str2));

document.write("<br />");

document.write("Levenshtein:"+new Levenshtein().distance(str1,str2));

document.write("<br />");

document.write("LongestCommonSubsequence:"+new LongestCommonSubsequence().distance(str1,str2));

document.write("<br />");

document.write("MetricLCS:"+new MetricLCS().distance(str1,str2));

document.write("<br />");

document.write("NGram:"+new NGram().distance(str1,str2));

document.write("<br />");

document.write("NormalizedLevenshtein:"+new NormalizedLevenshtein().similarity(str1,str2));

document.write("<br />");

document.write("OptimalStringAlignment:"+new OptimalStringAlignment().distance(str1,str2));

document.write("<br />");

document.write("QGram:"+new QGram(3).distance(str1,str2));

document.write("<br />");

document.write("RatcliffObershelp:"+new RatcliffObershelp().similarity(str1,str2));

document.write("<br />");

document.write("SorensenDice:"+new SorensenDice(3).similarity(str1,str2));

let wl = new WeightedLevenshtein({
    cost:(c1:string, c2:string) =>{
        if (c1 == 't' && c2 == 'r') {
          return 0.5;
        }
        return 1.0;
      }
});

document.write("<br />");

document.write("WeightedLevenshtein:"+wl.distance(str1,str2));

