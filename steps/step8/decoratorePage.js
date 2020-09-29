import chalk from 'chalk';

function logger(message, ...args) {
    console.log(chalk.green(message), ...args);
}

function decorateService(pageOrFramgent) {
    const name = pageOrFramgent.id || pageOrFramgent.__proto__.constructor.name;
    const requiredToDecorate = Object.getOwnPropertyNames(pageOrFramgent.__proto__)
        .filter(prop => {
            if (prop !== 'constructor' && (typeof pageOrFramgent.__proto__[prop]).includes('function')) {
                return true
            }
            return false
        })

    requiredToDecorate.forEach(prop => {
        const originalProp = pageOrFramgent.__proto__[prop]
        pageOrFramgent.__proto__[prop] = async function (...args) {

            let message = `${name} execute ${prop}`;

            async function currentCall(...currentCallArgs) {
                return originalProp.call(this, ...currentCallArgs);
            }

            logger(message);
            return currentCall.call(this, ...args);
        }
    })
}

export {
    decorateService,
};

