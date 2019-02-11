var wanted = {}

module.exports = {
    beforeEach: browser => {
        wanted = browser.page.wantedPage()
        wanted.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Enter header': browser => {
        
    }
}