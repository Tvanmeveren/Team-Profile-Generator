const Engineer = require('../lib/Engineer');

test("create an engineer object", () => {
    const engineer = new Engineer ('Tyler', 17, 'Tyvan07@yahoo.com', "https://github.com/Tvanmeveren");

    expect(engineer.github).toEqual(expect.any(String));
})
test("tests github", ()=> {
const engineer = new Engineer('Tyler', 17, 'Tyvan07@yahoo.com','https://github.com/Tvanmeveren')

expect(engineer.getGithub()).toEqual(expect.any(String));
})
test ('gets engineer role', () => {
    const engineer = new Engineer()

    expect(engineer.getRole()).toEqual('Engineer');
})