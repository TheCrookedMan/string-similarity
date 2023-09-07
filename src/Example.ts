let str1 = "f(x)=e+cosx2.若曲线f(x)=e+sinx+m在x=0处的切线方程为2x-ny+1=0,则（D)A.m=1,n=-1B.m=-1,n=1C.m=0,n=-1D.m=0,n=1";
let str2 = "f(x)=-f(-x))=0,f(x+1)是偶函数，f(1)=-1,则f(2023)+f(2026)已知函数f(x)的定义域为R,f(-x)f(1+1)3.0B.1C.-1D.2";

import JaroWinkler from "./JaroWinkler";
import Cosine from './Cosine'
import Damerau from './Damerau'
import Jaccard from './Jaccard'
import Levenshtein from './Levenshtein'
import LongestCommonSubsequence from './LongestCommonSubsequence'
import MetricLCS from './MetricLCS'
import NGram from './NGram'

document.write("JaroWinkler:"+new JaroWinkler().similarity(str1,str2));

document.write("<br />");

document.write("Cosine:"+new Cosine(3).similarity(str1,str2).toString());

document.write("<br />");

document.write("Damerau:"+new Damerau().distance(str1,str2).toString());

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