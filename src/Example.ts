let str1 = "{\"block\":[{\"line\":[{\"confidence\":1,\"word\":[{\"content\":\"题型二\"},{\"content\":\"探究\"}]},{\"confidence\":1,\"word\":[{\"content\":\"日号\"}]},{\"confidence\":1,\"word\":[{\"content\":\"列2[2023·安徽马鞍山模\"}]},{\"confidence\":1,\"word\":[{\"content\":\"拟]如图所示，四棱锥P-\"}]},{\"confidence\":1,\"word\":[{\"content\":\"DIM\"}]},{\"confidence\":1,\"word\":[{\"content\":\"ABCD,底面在以AC为直\"}]},{\"confidence\":1,\"word\":[{\"content\":\"径的圆O上，POL圆O,\"}]},{\"confidence\":1,\"word\":[{\"content\":\"ABD为等边三角形，AC\"}]},{\"confidence\":1,\"word\":[{\"content\":\"=4,PO=√2.\"}]},{\"confidence\":1,\"word\":[{\"content\":\"(1)求证：平面PBDL平面PAB;\"}]},{\"confidence\":1,\"word\":[{\"content\":\"(2)线段PB上是否存在一点M使得直线PA与\"}]},{\"confidence\":1,\"word\":[{\"content\":\"平面AMC所成角的正弦值为21?若存在，\"}]},{\"confidence\":1,\"word\":[{\"content\":\"PM;若不存在，请说明理由.\"}]},{\"confidence\":1,\"word\":[{\"content\":\"求出PB\"}]}],\"type\":\"text\"}]}";
let str2 = "{\"block\":[{\"line\":[{\"confidence\":1,\"word\":[{\"content\":\"题\"}]},{\"confidence\":1,\"word\":[{\"content\":\"L2023·安徽马鞍山模\"}]},{\"confidence\":1,\"word\":[{\"content\":\"拟]如图所示，四棱锥P-\"}]},{\"confidence\":1,\"word\":[{\"content\":\"ABCD,底面在以AC为直\"}]},{\"confidence\":1,\"word\":[{\"content\":\"径的圆O上，POL圆O,\"}]},{\"confidence\":1,\"word\":[{\"content\":\"ABD为等边三角形，AC\"},{\"content\":\"A\"}]},{\"confidence\":1,\"word\":[{\"content\":\"=4,PO=2.\"}]},{\"confidence\":1,\"word\":[{\"content\":\"(1)求证：平面PBDL平面PAB;\"}]},{\"confidence\":1,\"word\":[{\"content\":\"(2)线段PB上是否存在一点M使得\"}]},{\"confidence\":1,\"word\":[{\"content\":\"平面AMC所成角的正弦值为，\"}]},{\"confidence\":1,\"word\":[{\"content\":\"求出PB;若不存在，请说明理由\"}]},{\"confidence\":1,\"word\":[{\"content\":\"听课记录]\"}]}],\"type\":\"text\"}]}";

import JaroWinkler from "./JaroWinkler";
import Cosine from './Cosine'


document.write("JaroWinkler:"+new JaroWinkler().similarity(str1,str2).toString());

document.write("<br />");

document.write("Cosine:"+new Cosine(3).similarity(str1,str2).toString())