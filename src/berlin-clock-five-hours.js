
export default (timeString) => {

    let convertedToIntTime = (parseInt(timeString))/5
    let flooredTime = Math.floor(convertedToIntTime)
    let timeArray = []
    for(let i = 0; i < 4; i++){
         if(flooredTime > 0){
                timeArray.push('R')
         }
         else{
                timeArray.push('O')
             }
             flooredTime--
         }
         
    return timeArray.join('')
}