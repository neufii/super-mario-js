export class Matrix{
    constructor(){
        this.grid = [];
    }

    forEach(callback){
        this.grid.forEach((column,x) => {
            column.forEach((value,y) => {
                callback(value,x,y);
            });
        });
    }

    get(x,y){
        const col = this.grid[x];
        if(col){
            return col[y];
        }
        return undefined;
    }

    set(x,y,value){
        if(!this.grid[x]){
            this.grid[x] = [];
        }
        this.grid[x][y] = value;
    }
}

window.Matrix = Matrix;

export class Vec2 {
    constructor(x, y) {
        this.set(x, y);
    }

    copy(vec2) {
        this.x = vec2.x;
        this.y = vec2.y;
    }

    equals(vec2) {
        return this.x === vec2.x && this.y === vec2.y;
    }

    distance(v) {
        const dx = this.x - v.x, dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }
}