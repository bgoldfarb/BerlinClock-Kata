
export default (timeString) => {

    let convertedToIntTime = parseInt(timeString)
    let remainder = convertedToIntTime % 5
    let timeArray = []
    for(let i = 0; i < 4; i++){
        if(remainder > 0){
            timeArray.push('Y')
        }
        else{
            timeArray.push('O')
        }
        remainder--
    }
   return timeArray.join('')
}





