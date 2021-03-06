function solve() {
    let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

    let possibleAnswers = document.getElementsByClassName('answer-wrap');

    Array.from(possibleAnswers).forEach(answer => answer.addEventListener('click', selected));

    let indexSection = 0;
    let validAnswers = 0;
    let allSections = document.getElementsByTagName('section');

    function selected() {
        if (rightAnswers.includes(this.children[0].textContent)) {
            validAnswers++;
        }
        allSections[indexSection].style.display = 'none';
        if (indexSection < allSections.length - 1) {
            allSections[indexSection + 1].style.display = 'block';
        } else {
            document.getElementById('results').style.display = 'block';
            if (validAnswers == 3) {
                document.getElementById('results').children[0].children[0].textContent = 'You are recognized as top JavaScript fan!';
            } else {
                document.getElementById('results').children[0].children[0].textContent = `You have ${validAnswers} right answers`;
            }
        }
        indexSection++;
    }
}
