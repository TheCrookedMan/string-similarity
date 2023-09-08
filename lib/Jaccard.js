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
var Jaccard = /** @class */ (function (_super) {
    __extends(Jaccard, _super);
    function Jaccard(k) {
        return _super.call(this, k) || this;
    }
    Jaccard.prototype.similarity = function (s1, s2) {
        if (s1 == null) {
            throw new Error("s1 must not be null");
        }
        else if (s2 == null) {
            throw new Error("s2 must not be null");
        }
        else if (s1 === s2) {
            return 1.0;
        }
        else {
            var profile1 = this.getProfile(s1);
            var profile2 = this.getProfile(s2);
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
            var inter = profile1.size + profile2.size - union.size;
            return 1.0 * inter / union.size;
        }
    };
    Jaccard.prototype.distance = function (s1, s2) {
        return 1.0 - this.similarity(s1, s2);
    };
    return Jaccard;
}(ShingleBased));
export default Jaccard;
