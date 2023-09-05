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
var Cosine = /** @class */ (function (_super) {
    __extends(Cosine, _super);
    function Cosine(k) {
        return _super.call(this, k) || this;
    }
    Cosine.prototype.similarity = function (s1, s2) {
        if (s1 == null) {
            throw new Error("s1 must not be null");
        }
        else if (s2 == null) {
            throw new Error("s2 must not be null");
        }
        else if (s1 == s2) {
            return 1.0;
        }
        else if (s1.length >= this.getK() && s2.length >= this.getK()) {
            var profile1 = this.getProfile(s1);
            var profile2 = this.getProfile(s2);
            return this.dotProduct(profile1, profile2) / (this.norm(profile1) * this.norm(profile2));
        }
        else {
            return 0.0;
        }
    };
    Cosine.prototype.norm = function (profile) {
        var agg = 0.0;
        var var3 = profile.entries();
        var entry = var3.next();
        for (; !entry.done; agg += 1.0 * entry.value[1] * entry.value[1]) {
            entry = var3.next();
            if (entry.done) {
                return Math.sqrt(agg);
            }
        }
        return Math.sqrt(agg);
    };
    Cosine.prototype.dotProduct = function (profile1, profile2) {
        var small_profile = profile2;
        var large_profile = profile1;
        if (profile1.size < profile2.size) {
            small_profile = profile1;
            large_profile = profile2;
        }
        var agg = 0.0;
        var var6 = small_profile.entries();
        var entry = var6.next();
        while (!entry.done) {
            var i = large_profile.get(entry.value[0]);
            if (i != null) {
                agg += 1.0 * entry.value[1] * i;
            }
            entry = var6.next();
        }
        return agg;
    };
    Cosine.prototype.distance = function (s1, s2) {
        return 1.0 - this.similarity(s1, s2);
    };
    Cosine.prototype.similarityMap = function (profile1, profile2) {
        return this.dotProduct(profile1, profile2) / (this.norm(profile1) * this.norm(profile2));
    };
    return Cosine;
}(ShingleBased));
export default Cosine;
