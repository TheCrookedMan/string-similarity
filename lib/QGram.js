var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import ShingleBased from "./ShingleBased";
var QGram = /** @class */ (function (_super) {
    __extends(QGram, _super);
    function QGram(k) {
        return _super.call(this, k) || this;
    }
    QGram.prototype.distance = function (s1, s2) {
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
            var profile1 = this.getProfile(s1);
            var profile2 = this.getProfile(s2);
            return this._distance(profile1, profile2);
        }
    };
    QGram.prototype._distance = function (profile1, profile2) {
        var union = new Map();
        var profile1Iterator = profile1.keys();
        var keys1 = profile1Iterator.next();
        while (!keys1.done) {
            union.set(keys1.value, null);
            keys1 = profile1Iterator.next();
        }
        var profile2Iterator = profile2.keys();
        var keys2 = profile2Iterator.next();
        while (!keys2.done) {
            union.set(keys2.value, null);
            keys2 = profile2Iterator.next();
        }
        var agg = 0;
        var v1;
        var v2;
        var unionIterator = union.keys();
        for (var var5 = unionIterator.next(); !var5.done; agg += Math.abs(v1 - v2)) {
            var key = var5.value;
            v1 = 0;
            v2 = 0;
            var iv1 = profile1.get(key);
            if (iv1 != null) {
                v1 = iv1;
            }
            var iv2 = profile2.get(key);
            if (iv2 != null) {
                v2 = iv2;
            }
            var5 = unionIterator.next();
        }
        return agg;
    };
    return QGram;
}(ShingleBased));
export default QGram;
