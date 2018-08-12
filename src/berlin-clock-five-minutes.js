
export default (timeString) => {

    let convertedToIntTime = Math.floor((parseInt(timeString))/5)
    let timeArray = Array(11)
    // for(let i = 0; i < 11; i++){
    //      if(convertedToIntTime > 0){
    //          if(((i + 1) % 3) === 0) {
    //             timeArray.push('R')
    //          }
    //          else{
    //             timeArray.push('Y')
    //          }
    //      }
    //      else{
    //          timeArray.push('O')
    //      }
    //      convertedToIntTime--
    // }
    // return timeArray.join('')
    let funcArray = timeArray.fill().map((_, i) => {
        return (convertedToIntTime-- > 0 ? (((i+1) % 3) === 0 ? 'R' : 'Y') : 'O')
    })
    return funcArray.join('')
}

