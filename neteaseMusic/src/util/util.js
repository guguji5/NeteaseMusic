function typesOf (obj) {
  return Object.prototype.toString.apply(obj)
}
function parseLyric (lyric) {

  var lyricArr = lyric.replace(/&#\d+;/g, function (char) {
    return String.fromCharCode(char.substring(2, char.length - 1))
  }).split('\n')
  // 定义一个歌词对象
  var lyricObj = {}
  // 将这个歌词的数组 解析成对象的形式，里面的一些无用数据给删掉。时间戳给弄成秒的单位
  for (var i = 0; i < lyricArr.length; i++) {
    var lyric = lyricArr[i]
    var timeReg = /\[\d*\:\d*\.\d*\]/
    var timeText = lyric.match(timeReg)

    if (!timeText) {
      continue
    }
    var text = lyric.replace(timeReg, '')
    if (!text) {
      continue
    }
    // 将上面得到的时间戳  timeText[0] 将它转换成 秒数的单位。
    var time = timeText[0]

    var min = parseInt(String(time.match(/\[\d*\:/)).substring(1))
    var sec = parseInt(String(time.match(/\:\d*\./)).substring(1))
    time = min * 60 + sec
    lyricObj[time] = {
      'text': text
    }
  }

  return lyricObj
}
export { typesOf, parseLyric }
