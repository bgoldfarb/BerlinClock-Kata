
export default (timeString) => {

    let convertedToIntTime = (parseInt(timeString))/5
    let flooredTime = Math.floor(convertedToIntTime)
    let timeArray = Array(4)
    // for(let i = 0; i < 4; i++){
    //      if(flooredTime > 0){
    //             timeArray.push('R')
    //      }
    //      else{
    //             timeArray.push('O')
    //          }
    //          flooredTime--
    //      }
    let funcArray = timeArray.fill().map(() => (flooredTime-- > 0 ? 'R' : 'O'))
    return funcArray.join('')
        
}