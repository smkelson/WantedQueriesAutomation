var wanted = {}

module.exports = {
    beforeEach: browser => {
        wanted = browser.page.wantedPage()
        wanted.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Valid Entries': browser => {
        wanted
        .setValue('@header', 'dkei384hd')
        .setValue('@mke', 'd#d')
        .setValue('@oai', 'fjdi38eid')
        .setValue('@name', 'Sarah')
        .setValue('@sex', 'f')
        .setValue('@race', 'w')
        .setValue('@height', '500')
        .setValue('@weight', '55')
        .setValue('@offense', 'happy')
        .setValue('@warrantDate', '02122019')
        //submit and save
        .click('@submit')
         
    }
}