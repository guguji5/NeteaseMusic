/**
 * Created by dukuan on 2017/6/13.
 */
export default{
  toWan: function (val) {
    if (val > 100000) {
      return Math.floor(val / 10000) + '万';
    } else {
      return val;
    }

  },
  timeformat: function (value) {
    var date = new Date(value),
      Y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      H = date.getHours(),
      i = date.getMinutes(),
      s = date.getSeconds();
    if (m < 10) {
      m = '0' + m;
    }
    if (d < 10) {
      d = '0' + d;
    }
    if (H < 10) {
      H = '0' + H;
    }
    if (i < 10) {
      i = '0' + i;
    }
    if (s < 10) {
      s = '0' + s;
    }
    var t = Y + '-' + m + '-' + d;
    return t;
  },
  MillisecondToDate: function MillisecondToDate(msd) {
    var time = parseFloat(msd) / 1000;
    var min = Math.floor(time / 60);
    var sec = Math.ceil(time % 60);

    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    return min + ':' + sec;
    // if (null != time && "" != time) {
    //   if (time > 60 && time < 60 * 60) {
    //     var m = parseInt(time / 60.0) > parseInt(9) ? parseInt(time / 60.0) : "0" + parseInt(time / 60.0);
    //     var s = parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) > parseInt(9) ? parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) : "0" + parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60);
    //     time = m + ":" + s;
    //   } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
    //     var h = parseInt(time / 3600.0) > parseInt(9) ? parseInt(time / 3600.0) : "0" + parseInt(time / 3600.0)
    //     var m = parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) > parseInt(9) ? parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) : "0" + parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60);
    //     var s = parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
    //       parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) > parseInt(9) ? parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
    //       parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) : "0" + parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
    //         parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60)
    //     time = h + ":" + m + ":" + s;
    //   } else {
    //     time = "00" + parseInt(time) > parseInt(9) ? parseInt(time) : "0" + parseInt(time);
    //   }
    // } else {
    //   time = "00:00";
    // }
    // return time;

  }
}
