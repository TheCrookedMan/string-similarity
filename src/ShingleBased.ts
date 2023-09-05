
export default class ShingleBased {
  k:number = 3;
  SPACE_REG = new RegExp("\\s+",'g');

  constructor(k:number){
    if (k <= 0) {
        throw new Error("k should be positive!");
      } else {
        this.k = k;
      }
  }
  getK() {
    return this.k;
  }

  getProfile(str:string):Map<string, number> {
    let shingles = new Map();
    let string_no_space:String = str.replace(this.SPACE_REG," ");

    for(let i = 0; i < string_no_space.length - this.k + 1; ++i) {
      let shingle:string = string_no_space.substring(i, i + this.k);
      let old:number = shingles.get(shingle);
      if (old != null) {
        shingles.set(shingle, old + 1);
      } else {
        shingles.set(shingle, 1);
      }
    }

    return Object.defineProperty(shingles,'readOnlyProp',{
        writable: false
    });
  }
}
