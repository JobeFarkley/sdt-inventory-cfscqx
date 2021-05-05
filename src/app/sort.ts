export class Sort {
  private SortOrder = 1;
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  });

  constructor(){

  }

  public startSort(property,order,type = "") {
    if(order === "desc") {
      this.SortOrder = -1;
    }
    return (a,b) => {
            return this.collator.compare(a[property],b[property]) * this.SortOrder;
      }
    }

  
  private sortData(a,b){
    if (a < b) {
      return -1 * this.SortOrder;
    } else if (a > b) {
      return 1 * this.SortOrder;
    } else {
      return 0 * this.SortOrder;
    }
  }
}
