
import {fill} from 'lodash'


export default (timeString) => {
    let convertedToIntTime = parseInt(timeString)
    let remainder = convertedToIntTime % 5
    let timeArray = Array(4)
    // for(let i = 0; i < 4; i++){
    //     remainder-- > 0 ?  timeArray.push('Y') :  timeArray.push('O')
    // }
    return (timeArray.fill().map(() => (remainder-- > 0 ? 'Y' : 'O'))).join('')
}