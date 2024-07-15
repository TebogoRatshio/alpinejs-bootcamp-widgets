function greet() {
    return {
        name: '',
        language: 'en',
        greeting: '',
        updateGreeting() {
            const greetings = {
                en: 'Hello',
                es: 'Hola',
                fr: 'Bonjour',
                de: 'Hallo'
            };
            this.greeting = this.name ? `${greetings[this.language]}, ${this.name}` : '';
        }
    };
}

    

document.addEventListener('alpine:init', function () {
    Alpine.data('greet',  greet)
});