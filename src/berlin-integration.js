import convertSingleMinutes from './berlin-clock-minutes'
import convertSingleHours from './berlin-clock-hours'
import convertFiveMinutes from './berlin-clock-five-minutes'
import convertFiveHours from './berlin-clock-five-hours'
import convertSeconds from './berlin-clock-seconds'





export default (timeString) => {
    let noColons = timeString.replace(/[^\w\s]/gi, '')
    console.log(noColons)
    let secondString = convertSeconds(noColons.substring(4,6))
    let fiveHourString = convertFiveHours(noColons.substring(0,2))
    let hourString = convertSingleHours(noColons.substring(0,2))
    let fiveMinuteString = convertFiveMinutes(noColons.substring(2,4))
    let minutesString = convertSingleMinutes(noColons.substring(2,4))

    return secondString + fiveHourString + hourString + fiveMinuteString + minutesString
}