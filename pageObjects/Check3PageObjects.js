var Check3Test = {
    Shrek4life: function (asset) {
        this
            .click('@addEmployee')
            .click('@newEmployee')
            .clearValue('@nameEntry')
            .setValue('@nameEntry', asset.name)
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', asset.phone)
            .clearValue('@emailEntry')
            .setValue('@emailEntry', asset.email)
            .clearValue('@titleEntry')
            .setValue('@titleEntry', asset.title)
            .click('@cancel')
            .verify.containsText('@verifyName', 'New Employee')
            .pause(5000)
            .clearValue('@nameEntry')
            .pause(5000)
            .setValue('@nameEntry', asset.name)
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', asset.phone)
            .clearValue('@emailEntry')
            .setValue('@emailEntry', asset.email)
            .clearValue('@titleEntry')
            .setValue('@titleEntry', asset.title)
            .click('@save')
            .verify.containsText('@verifyName', asset.name)
            .verify.containsText('@ID', 'ID: 817')
            .setValue('@search', asset.search)
            .pause(5000)
            .click('@newEmployee')
            .verify.containsText('@verifyName', asset.name)
            .click('@clearSearch')
            .pause(5000)
        return this

    }
}
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [Check3Test],
    elements: {
        addEmployee: 'li[name="addEmployee"]',
        newEmployee: 'li[name="employee817"]',
        nameEntry: 'input[name="nameEntry"]',
        phoneEntry: 'input[name="phoneEntry"]',
        emailEntry: 'input[name="emailEntry"]',
        titleEntry: 'input[name="titleEntry"]',
        save: 'button[name="save"]',
        cancel: 'button[name="cancel"]',
        delete: 'button[name="delete"]',
        ID: 'span[name="employeeID"]',
        verifyName: 'p[name="employeeName"]',
        search: 'input[name="searchBox"]',
        clearSearch: 'button[name="clearSearch"]',


    }
}