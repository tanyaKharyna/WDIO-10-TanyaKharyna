import {shared} from './user'


describe('Admin', function () {

    it('can do some admin stuff', function () {
        const addnoteBtn = $('//*[@id="root"]/div/div/div/div/div[1]/span[2]/button'); ////*[@id="root"]/div/div/div/div/div[1]/span[2]/button
        const titleInput = $('span.mtk1');
        const notesTitle = 'Hi, this is my first note';
        addnoteBtn.click();
        titleInput.setValue(notesTitle);
        expect(titleInput).toHaveText(notesTitle, {message: `Received title was ${titleInput.getText()}`})
    })

    shared({name: 'abby.faker@gmail.com', password: 'faker2021'});
})