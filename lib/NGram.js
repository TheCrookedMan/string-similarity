var NGram = /** @class */ (function () {
    function NGram(n) {
        if (n === void 0) { n = 2; }
        this.DEFAULT_N = 2;
        this.n = null;
        this.n = n;
    }
    NGram.prototype.distance = function (s0, s1) {
        if (s0 == null) {
            throw new Error("s0 must not be null");
        }
        else if (s1 == null) {
            throw new Error("s1 must not be null");
        }
        else if (s0 === s1) {
            return 0.0;
        }
        else {
            var special = true;
            var sl = s0.length;
            var tl = s1.length;
            if (sl != 0 && tl != 0) {
                var cost = 0;
                if (sl >= this.n && tl >= this.n) {
                    var sa = Array(sl + this.n - 1);
                    var i = void 0;
                    for (i = 0; i < sa.length; ++i) {
                        if (i < this.n - 1) {
                            sa[i] = '\n';
                        }
                        else {
                            sa[i] = s0.charAt(i - this.n + 1);
                        }
                    }
                    var p = Array(sl + 1);
                    var d = Array(sl + 1);
                    var t_j = Array(this.n);
                    for (i = 0; i <= sl; ++i) {
                        p[i] = i;
                    }
                    for (var j = 1; j <= tl; ++j) {
                        var tn = void 0;
                        if (j >= this.n) {
                            t_j = s1.substring(j - this.n, j).split("");
                        }
                        else {
                            for (tn = 0; tn < this.n - j; ++tn) {
                                t_j[tn] = '\n';
                            }
                            for (tn = this.n - j; tn < this.n; ++tn) {
                                t_j[tn] = s1.charAt(tn - (this.n - j));
                            }
                        }
                        d[0] = j;
                        for (i = 1; i <= sl; ++i) {
                            cost = 0;
                            tn = this.n;
                            for (var ni = 0; ni < this.n; ++ni) {
                                if (sa[i - 1 + ni] != t_j[ni]) {
                                    ++cost;
                                }
                                else if (sa[i - 1 + ni] == '\n') {
                                    --tn;
                                }
                            }
                            var ec = cost / tn;
                            d[i] = Math.min(Math.min(d[i - 1] + 1.0, p[i] + 1.0), p[i - 1] + ec);
                        }
                        var d2 = p;
                        p = d;
                        d = d2;
                    }
                    return (p[sl] / Math.max(tl, sl));
                }
                else {
                    var i = 0;
                    for (var ni = Math.min(sl, tl); i < ni; ++i) {
                        if (s0.charAt(i) == s1.charAt(i)) {
                            ++cost;
                        }
                    }
                    return (cost / Math.max(sl, tl));
                }
            }
            else {
                return 1.0;
            }
        }
    };
    return NGram;
}());
export default NGram;
