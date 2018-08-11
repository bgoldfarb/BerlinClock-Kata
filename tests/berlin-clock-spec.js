import { expect } from 'chai'
import convertSingleMinutes from '../src/berlin-clock-minutes'
import convertSingleHours from '../src/berlin-clock-hours'
import convertFiveMinutes from '../src/berlin-clock-five-minutes'
import convertFiveHours from '../src/berlin-clock-five-hours'
import convertSeconds from '../src/berlin-clock-seconds'
import berlinIntegration from '../src/berlin-integration'

describe('Berlin Clock Single Minutes', () => {

    it('should return OOOO for 0', () => {
        expect(convertSingleMinutes('00')).to.be.equal('OOOO')
    })

    it('should return YOOO for empty string', () => {
        expect(convertSingleMinutes('36')).to.be.equal('YOOO')
    })

    it('should return YOOO for empty string', () => {
        expect(convertSingleMinutes('39')).to.be.equal('YYYY')
    })

    it('should return YOOO for empty string', () => {
        expect(convertSingleMinutes('39')).to.be.equal('YYYY')
    })

    it('should return YOOO for empty string and ignore :', () => {
        expect(convertSingleMinutes('39:')).to.be.equal('YYYY')
    })
})


describe('Berlin Clock Single Hours', () => {

    it('should return OOOO for 0', () => {
        expect(convertSingleHours('00')).to.be.equal('OOOO')
    })

    it('should return RROO for 0', () => {
        expect(convertSingleHours('23')).to.be.equal('RRRO')
    })

    it('should return RRRR for 14', () => {
        expect(convertSingleHours('14')).to.be.equal('RRRR')
    })
})

describe('Berlin Clock 5 Minutes', () => {

    it('should return OOOOOOOOOOO for 0', () => {
        expect(convertFiveMinutes('00')).to.be.equal('OOOOOOOOOOO')
    })

    it('should return YYRYYRYYRYY for 59', () => {
        expect(convertFiveMinutes('59')).to.be.equal('YYRYYRYYRYY')
    })
   
})

describe('Berlin Clock 5 Hours', () => {

    it('should return OOOO for 0', () => {
        expect(convertFiveHours('00')).to.be.equal('OOOO')
    })

    it('should return RRRR for 23', () => {
        expect(convertFiveHours('23')).to.be.equal('RRRR')
    })

    it('should return RRRO for 59', () => {
        expect(convertFiveHours('16')).to.be.equal('RRRO')
    })
   
})

describe('Berlin Clock Seconds', () => {

    it('should return Y for 0', () => {
        expect(convertSeconds('0')).to.be.equal('Y')
    })

    it('should return O for 1', () => {
        expect(convertSeconds('1')).to.be.equal('O')
    })
   
})

describe('Berlin Clock Integration', () => {

    it('should return YOOOOOOOOOOOOOOOOOOOOOOO for all zeros', () => {
        expect(berlinIntegration('00:00:00')).to.be.equal('YOOOOOOOOOOOOOOOOOOOOOOO')
    })
   

    it('should return ORRRRRRROYYRYYRYYRYYYYYY for 23:59:59', () => {
        expect(berlinIntegration('23:59:59')).to.be.equal('ORRRRRRROYYRYYRYYRYYYYYY')
    }) 

    it('should return YRRROROOOYYRYYRYYRYOOOOO for 16:50:06', () => {
        expect(berlinIntegration('16:50:06')).to.be.equal('YRRROROOOYYRYYRYYRYOOOOO')
    })

    it('should return ORROOROOOYYRYYRYOOOOYYOO for 11:37:01', () => {
        expect(berlinIntegration('11:37:01')).to.be.equal('ORROOROOOYYRYYRYOOOOYYOO')
    })
   
})


