export default (timeString) => {
    let convertedToIntTime = parseInt(timeString)
    let remainder = convertedToIntTime % 5
    let timeArray = Array(4)
//     for(let i = 0; i < 4; i++){
//         if(remainder > 0){
//             timeArray.push('R')
//         }
//         else{
//             timeArray.push('O')
//         }
//         remainder--
//     }
//    return timeArray.join('')

    let funcArray = timeArray.fill().map(() => (remainder-- > 0 ? 'R' : 'O'))
    return funcArray.join('')
}