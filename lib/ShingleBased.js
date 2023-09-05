var ShingleBased = /** @class */ (function () {
    function ShingleBased(k) {
        this.k = 3;
        this.SPACE_REG = new RegExp("\\s+", 'g');
        if (k <= 0) {
            throw new Error("k should be positive!");
        }
        else {
            this.k = k;
        }
    }
    ShingleBased.prototype.getK = function () {
        return this.k;
    };
    ShingleBased.prototype.getProfile = function (str) {
        var shingles = new Map();
        var string_no_space = str.replace(this.SPACE_REG, " ");
        for (var i = 0; i < string_no_space.length - this.k + 1; ++i) {
            var shingle = string_no_space.substring(i, i + this.k);
            var old = shingles.get(shingle);
            if (old != null) {
                shingles.set(shingle, old + 1);
            }
            else {
                shingles.set(shingle, 1);
            }
        }
        return Object.defineProperty(shingles, 'readOnlyProp', {
            writable: false
        });
    };
    return ShingleBased;
}());
export default ShingleBased;
