/**
 * Created by dukuan on 2017/6/13.
 */
export default{
    toWan: function(val){
        if(val>100000){
            return Math.floor(val/10000)+'万';
        }else{
            return val;
        }

    }
}