// problem 1
function formatString(input: string, toUpper: boolean = true): string{
    if (toUpper) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();

    }
}


//problem 2

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    
    return items.filter(item => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[]{
    const result: T[] = [];

    arrays.forEach(element  => {
        element.forEach(item => {
            result.push(item);
        })
    });
    console.log(result);
    return result;
}


// problem 3


function concatenateArrays<T>(...arrays: T[][]): T[]{
    const result: T[] = [];

    arrays.forEach(element  => {
        element.forEach(item => {
            result.push(item);
        })
    });
    console.log(result);
    return result;
}


//problem 4

class Vehicle{
    private _make: string;
    year: number;

    constructor(make: string, year: number){
        this._make = make;
        this.year = year;
    }

    getInfo(): string{
        
        return `Make: ${this._make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle{
    private _model: string;

    constructor(make: string, year: number, model: string){
        super(make, year);
        this._model = model;
    }

    getModel(): string{
        
        return  `Model: ${this._model}`;
    }
}


//problem 5

function processValue(value: string | number): number{
    if(typeof value === "string"){
        
        return value.length;
    }
    else{
        
        return value * 2;
    }
}


//problem 6

function getMostExpensiveProduct(products: Product[]): Product | null {
    let maxprice : number = 0;
        let maxproduct : Product = {
            name: "",
            price: 0
        };
    if (products.length === 0) {
        return null;
    }
    else{
        
       products.map(product => {
        if(product.price > maxprice){
            maxprice = product.price;
            maxproduct = product;
    }})
       }; 
         console.log(maxproduct);
         return maxproduct;

    }


//problem 7

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      console.log("Weekend");
      return "Weekend";
    }else{
        console.log("Weekday");
        return "Weekday";
    }
}

//problem 8

const createPromise = (data:number): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
      if (data >= 0) {
        setInterval(() => {
          resolve(data);},1000)  
      } else {
        reject("Error: Negative number not allowed");
      }
    });
  };

async function squareAsync(n: number): Promise<number>{
    
    const data: number = await createPromise(n);
    return data * data;    
}