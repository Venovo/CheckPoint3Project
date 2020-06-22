var CheckPoint3Project
var asset = require('../codeAbstact/Check3Array')
module.exports = {
    beforeEach: browser => {
        CheckPoint3Project = browser.page.Check3PageObjects()
        CheckPoint3Project
            .navigate()
    },
    'Epicness Test' : browser =>{
        CheckPoint3Project
            .Shrek4life(asset)
    }
}