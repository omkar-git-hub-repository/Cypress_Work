//first install the plugin to upload the file
// npm install --save-dev cypress-file-upload

// import the package that we have just installed
import 'cypress-file-upload'

describe('Upload single and multiple files', () => {
    it.skip('upload single file', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        //upload single file
        // whatever the files we have to upload keep it in the 'fixtures' folder
        // only files from the 'fixtures' folder are supported
        cy.get("#singleFileInput").attachFile('roadmap-2.pdf')
        cy.get("form[id='singleFileForm'] button[type='submit']").click();

    })

    it('rename file at the time of upload', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        // upload single file with renaming
        cy.get("#singleFileInput").attachFile({ filePath: 'roadmap-2.pdf', fileName: 'Automation Testing Roadmap.pdf' })
    })

    it('Drag n drop the file into the upload area', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get("#singleFileInput").attachFile('roadmap-2.pdf', { subjectType: 'drag-n-drop' });
    })

    it('upload multiple files', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        //upload multiple files
        cy.get("#multipleFilesInput").attachFile(['roadmap-1.pdf','roadmap-2.pdf']);

    })

    it.only('file upload shasow - dom', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("input[type='file']",{includeShadowDom:true}).attachFile('roadmap-1.pdf')
    })
})