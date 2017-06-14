function typesOf(obj){
    return Object.prototype.toString.apply(obj)
}
export {typesOf}