const message = process.argv.slice(2).join(' ');

const defaultMessage = 'Hello! I am a custom cow.';

function createTopBubble(message) {
    return `(   ${message}   )`;
}

function createBottomBubble() {
    return '________________________/';
}

function createCow() {
    return `
       (__)
       (oo)
  /------\\/
 / |    ||
*  /\\---/\\
     ~~   ~~`;
}

function generateBubble(message) {
    if (!message) {
        message = defaultMessage;
    }

    const topBubble = createTopBubble(message);
    const bottomBubble = createBottomBubble();
    const cow = createCow();

    console.log(topBubble);
    console.log(bottomBubble);
    console.log(cow);
}

generateBubble(message);
