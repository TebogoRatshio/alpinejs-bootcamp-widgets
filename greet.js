function greet(name, language = 'en') {
    const greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
        de: 'Hallo',
        it: 'Ciao',
        // Add more languages as needed
    };

    return (greetings[language] || greetings['en']) + ', ' + name;
}