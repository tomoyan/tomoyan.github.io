const cmdInput = document.getElementById('cmdInput');
const output = document.getElementById('output');
const windowDiv = document.getElementById('windowDiv');

const commands = {
    help: `Available commands:<br>
           <span class="success">whoami</span>   - Who is tomoyan?<br>
           <span class="success">projects</span> - View my GitHub repositories<br>
           <span class="success">skills</span>   - List my technical skills<br>
           <span class="success">contact</span>  - How to reach me<br>
           <span class="success">clear</span>    - Clear the terminal screen<br>
           <span class="success">date</span>     - Current date and time<br>
           <span class="success">echo</span>     - Print text`,
    whoami: "<img src='profile.png' alt='Profile' class='profile-img'><br>tomoyan - Software Engineer.<br>Passionate about building cool applications and solving complex problems.",
    projects: "Fetching projects...<br>Here are some things I've built:<br> - <a href='https://github.com/tomoyan' target='_blank'>Awesome Repo 1</a><br> - <a href='https://github.com/tomoyan' target='_blank'>Interactive Terminal Portfolio</a><br> - Type <span class='success'>github</span> to view my full profile.",
    skills: "<span class='accent'>Languages:</span> JavaScript, TypeScript, Python, HTML, CSS<br><span class='accent'>Frameworks:</span> React, Node.js, Next.js<br><span class='accent'>Tools:</span> Git, Docker, Linux",
    contact: "Email: 7days-tn@msn.com<br>GitHub: <a href='https://github.com/tomoyan' target='_blank'>github.com/tomoyan</a><br>LinkedIn: <a href='https://linkedin.com/in/tomoyan' target='_blank'>linkedin.com/in/tomoyan</a>",
    date: new Date().toString(),
    github: "Opening GitHub in a new tab...",
    clear: () => { output.innerHTML = ''; }
};

const welcomeMessage = `Welcome to tomoyan's Interactive Terminal v1.0.0.<br>Type <span class="success">'help'</span> to see a list of available commands.`;

function printLine(text, className = "response") {
    const line = document.createElement('div');
    line.innerHTML = text;
    line.className = className;
    output.appendChild(line);
    windowDiv.scrollTop = windowDiv.scrollHeight;
}

// Initial boot sequence
setTimeout(() => {
    printLine(welcomeMessage);
}, 300);

cmdInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const cmdString = this.value.trim();
        if (cmdString) {
            printLine(`<span class="prompt">tomoyan@portfolio:~$</span> <span class="command">${cmdString}</span>`, "command-line");
            processCommand(cmdString);
        }
        this.value = '';
    }
});

// Always keep focus on the input so users can just type
document.body.addEventListener('click', () => {
    cmdInput.focus();
});

function processCommand(cmdString) {
    const args = cmdString.split(' ');
    const cmd = args[0].toLowerCase();

    if (cmd === 'clear') {
        commands.clear();
    } else if (cmd === 'echo') {
        printLine(args.slice(1).join(' '));
    } else if (cmd === 'github') {
        printLine(commands.github);
        setTimeout(() => { window.open('https://github.com/tomoyan', '_blank'); }, 1000);
    } else if (commands[cmd]) {
        printLine(commands[cmd]);
    } else if (cmd === 'sudo') {
        printLine("Nice try. This incident will be reported.", "error");
    } else {
        const funnyMessages = [
            `bash: ${cmd}: command not found. Did you mean to type 'help'?`,
            `Hmm, I don't know what '${cmd}' means. Type 'help' for available commands.`,
            `Command '${cmd}' not recognized. Have you tried turning it off and on again? Type 'help' for available commands.`,
            `404: Command '${cmd}' not found. The matrix is glitching. Type 'help' for available commands.`,
            `I'm sorry, Dave. I'm afraid I can't do '${cmd}'. Type 'help' for available commands.`,
            `Error: '${cmd}' is not a valid spell. Check your mana or type 'help' for available commands.`,
            `'${cmd}'? That's not a bug, it's an undocumented feature... that doesn't exist. Type 'help' for available commands.`,
            `I would execute '${cmd}', but it works on my machine. Type 'help' for available commands.`,
            `SyntaxError: unexpected token '${cmd}'. I'm a terminal, not a mind reader. Type 'help' for available commands.`,
            `'${cmd}' failed to execute safely. Please check Stack Overflow. Type 'help' for available commands.`,
            `Warning: '${cmd}' has been deprecated. Wait, no, it never existed. Type 'help'.`,
            `'${cmd}' is taking too long to respond. Probably stuck in an infinite loop. Type 'help'.`,
            `Executing '${cmd}'... Just kidding, I have no idea what that is. Type 'help' for available commands.`,
            `'${cmd}'? Is that a JavaScript framework? Because a new one just came out. Type 'help'.`,
            `I tried to run '${cmd}' but my coffee cup is empty. Type 'help' for available commands.`,
            `'${cmd}' is not in the sudoers file. This incident will be reported. Type 'help'.`
        ];
        const randomIndex = Math.floor(Math.random() * funnyMessages.length);
        printLine(funnyMessages[randomIndex], "error");
    }
}
