// Get references to the necessary elements
const encryptRadio = document.getElementById('encryptRadio');
encryptRadio.checked = true;
const decryptRadio = document.getElementById('decryptRadio');
const encryptArea = document.getElementById('encryptArea');
const decryptArea = document.getElementById('decryptArea');
const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');
const resetButton = document.getElementById('reset');

// Initial state: Encrypt radio checked, encrypt area enabled, decrypt area disabled
encryptArea.disabled = false;
encryptArea.placeholder="Paste here to encrypt..."
decryptArea.disabled = true;

// Function to toggle between encrypt and decrypt mode
function toggleMode() {
    if (encryptRadio.checked) {
        encryptArea.disabled = false;        
        decryptArea.disabled = true;
        encryptArea.value = '';  // Clear the text areas
        encryptArea.placeholder="Paste here to encrypt..."
        decryptArea.value = '';
        decryptArea.placeholder=""
    } else if (decryptRadio.checked) {
        encryptArea.disabled = true;
        decryptArea.disabled = false;
        encryptArea.value = '';
        decryptArea.value = '';
        encryptArea.placeholder=""
        decryptArea.placeholder="Paste here to decrypt..."
    }
}

// Listen for changes in radio buttons
encryptRadio.addEventListener('change', toggleMode);
decryptRadio.addEventListener('change', toggleMode);

// Create a simple symbol map for encryption
const symbolMap = {
    a: '@', b: '#', c: '$', d: '%', e: '^', f: '&', g: '*', h: '(', i: ')',
    j: '-', k: '+', l: '=', m: '[', n: ']', o: '{', p: '}', q: '<', r: '>',
    s: '!', t: '~', u: '`', v: ':', w: ';', x: '"', y: "'", z: '?', ' ': '_'
};

// Reverse map for decryption
const reverseSymbolMap = Object.fromEntries(
    Object.entries(symbolMap).map(([key, value]) => [value, key])
);

// Function to encrypt plain text
function encryptText(text) {
    return text.toLowerCase().split('').map(char => symbolMap[char] || char).join('');
}

// Function to decrypt symbolic text
function decryptText(text) {
    return text.split('').map(char => reverseSymbolMap[char] || char).join('');
}

// Encrypt button click handler
encryptButton.addEventListener('click', () => {
    const plainText = encryptArea.value;
    const encryptedText = encryptText(plainText);
    decryptArea.value = encryptedText;
});

// Decrypt button click handler
decryptButton.addEventListener('click', () => {
    const encryptedText = decryptArea.value;
    const plainText = decryptText(encryptedText);
    encryptArea.value = plainText;
});

// Reset button to clear both text areas
resetButton.addEventListener('click', () => {
    encryptArea.value = '';
    decryptArea.value = '';
});
