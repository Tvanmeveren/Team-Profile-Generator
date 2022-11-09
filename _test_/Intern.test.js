const Intern =require('../lib/Intern');

test("create an intern object", () => {
    const intern = new Intern ('Tyler', 17, 'Tyvan07@yahoo.com', 'bootcamp' );

    expect(intern.school).toEqual(expect.any(String));
})
test("tests office number", ()=> {
const intern = new Intern('Tyler', 17 , 'Tyvan07@yahoo.com', 'bootcamp' )

expect(intern.getSchool()).toEqual(expect.any(String));
})
test ('gets intern role', () => {
    const intern = new Intern()

    expect(intern.getRole()).toEqual('Intern');
})