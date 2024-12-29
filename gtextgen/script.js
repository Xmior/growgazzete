const canvas = document.getElementById('guiCanvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('textInput');
const downloadButton = document.getElementById('downloadButton');

const guiBoxImage = new Image();
const fontImage = new Image();

// Path to your images
guiBoxImage.src = 'images/gui_chatbox.png';
fontImage.src = 'images/gtfont.png';

// Load font character data
const fontData = {
    lineHeight: 23,
    chars: {
            32: { x: 339, y: 189, width: 7, height: 5, xoffset: -3, yoffset: 20, xadvance: 6 },
            33: { x: 31, y: 157, width: 7, height: 19, xoffset: -1, yoffset: 2, xadvance: 6 },
            34: { x: 208, y: 197, width: 11, height: 9, xoffset: -2, yoffset: 2, xadvance: 7 },
            35: { x: 222, y: 133, width: 15, height: 19, xoffset: -2, yoffset: 2, xadvance: 12 },
            36: { x: 110, y: 112, width: 15, height: 22, xoffset: -2, yoffset: 2, xadvance: 11 },
            37: { x: 287, y: 109, width: 20, height: 20, xoffset: -2, yoffset: 2, xadvance: 17 },
            38: { x: 248, y: 154, width: 16, height: 18, xoffset: -1, yoffset: 3, xadvance: 14 },
            39: { x: 229, y: 193, width: 7, height: 9, xoffset: -1, yoffset: 2, xadvance: 4 },
            40: { x: 415, y: 84, width: 10, height: 23, xoffset: -1, yoffset: 2, xadvance: 8 },
            41: { x: 426, y: 84, width: 10, height: 23, xoffset: -2, yoffset: 2, xadvance: 8 },
            42: { x: 169, y: 197, width: 12, height: 11, xoffset: -1, yoffset: 2, xadvance: 9 },
            43: { x: 59, y: 197, width: 14, height: 14, xoffset: -1, yoffset: 5, xadvance: 12 },
            44: { x: 220, y: 193, width: 8, height: 9, xoffset: -1, yoffset: 14, xadvance: 6 },
            45: { x: 299, y: 190, width: 9, height: 6, xoffset: -1, yoffset: 11, xadvance: 8 },
            46: { x: 501, y: 120, width: 7, height: 7, xoffset: -1, yoffset: 14, xadvance: 6 },
            47: { x: 261, y: 109, width: 12, height: 21, xoffset: -2, yoffset: 2, xadvance: 9 },
            48: { x: 467, y: 152, width: 14, height: 18, xoffset: -2, yoffset: 3, xadvance: 11 },
            49: { x: 197, y: 177, width: 9, height: 18, xoffset: 0, yoffset: 3, xadvance: 11 },
            50: { x: 377, y: 152, width: 14, height: 18, xoffset: -2, yoffset: 3, xadvance: 11 },
            51: { x: 392, y: 152, width: 14, height: 18, xoffset: -2, yoffset: 3, xadvance: 11 },
            52: { x: 407, y: 152, width: 14, height: 18, xoffset: -2, yoffset: 3, xadvance: 11 },
            53: { x: 452, y: 152, width: 14, height: 18, xoffset: -2, yoffset: 3, xadvance: 11 },
            54: { x: 56, y: 177, width: 13, height: 18, xoffset: -1, yoffset: 3, xadvance: 11 },
            55: { x: 0, y: 178, width: 13, height: 18, xoffset: -1, yoffset: 3, xadvance: 11 },
            56: { x: 437, y: 152, width: 14, height: 18, xoffset: -2, yoffset: 3, xadvance: 11 },
            57: { x: 14, y: 178, width: 13, height: 18, xoffset: -1, yoffset: 3, xadvance: 11 },
            58: { x: 36, y: 198, width: 7, height: 15, xoffset: -1, yoffset: 6, xadvance: 6 },
            59: { x: 245, y: 174, width: 8, height: 17, xoffset: -1, yoffset: 6, xadvance: 6 },
            60: { x: 230, y: 174, width: 14, height: 17, xoffset: -1, yoffset: 3, xadvance: 12 },
            61: { x: 193, y: 197, width: 14, height: 10, xoffset: -1, yoffset: 7, xadvance: 12 },
            62: { x: 215, y: 174, width: 14, height: 17, xoffset: -1, yoffset: 3, xadvance: 12 },
            63: { x: 468, y: 130, width: 13, height: 19, xoffset: -1, yoffset: 2, xadvance: 11 },
            64: { x: 481, y: 109, width: 19, height: 19, xoffset: -2, yoffset: 2, xadvance: 15 },
            65: { x: 230, y: 154, width: 17, height: 18, xoffset: -1, yoffset: 3, xadvance: 15 },
            66: { x: 42, y: 178, width: 13, height: 18, xoffset: 0, yoffset: 3, xadvance: 12 },
            67: { x: 192, y: 157, width: 18, height: 18, xoffset: -1, yoffset: 3, xadvance: 16 },
            68: { x: 330, y: 152, width: 15, height: 18, xoffset: 0, yoffset: 3, xadvance: 14 },
            69: { x: 162, y: 177, width: 11, height: 18, xoffset: 0, yoffset: 3, xadvance: 10 },
            70: { x: 150, y: 177, width: 11, height: 18, xoffset: 0, yoffset: 3, xadvance: 10 },
            71: { x: 132, y: 157, width: 19, height: 18, xoffset: -1, yoffset: 3, xadvance: 17 },
            72: { x: 362, y: 152, width: 14, height: 18, xoffset: 0, yoffset: 3, xadvance: 14 },
            73: { x: 207, y: 177, width: 7, height: 18, xoffset: -1, yoffset: 3, xadvance: 6 },
            74: { x: 98, y: 177, width: 12, height: 18, xoffset: -2, yoffset: 3, xadvance: 10 },
            75: { x: 84, y: 177, width: 13, height: 18, xoffset: 0, yoffset: 3, xadvance: 12 },
            76: { x: 186, y: 177, width: 10, height: 18, xoffset: 0, yoffset: 3, xadvance: 9 },
            77: { x: 47, y: 157, width: 21, height: 18, xoffset: -2, yoffset: 3, xadvance: 18 },
            78: { x: 314, y: 152, width: 15, height: 18, xoffset: 0, yoffset: 3, xadvance: 15 },
            79: { x: 112, y: 157, width: 19, height: 18, xoffset: -1, yoffset: 3, xadvance: 17 },
            80: { x: 124, y: 177, width: 12, height: 18, xoffset: 0, yoffset: 3, xadvance: 11 },
            81: { x: 0, y: 136, width: 19, height: 19, xoffset: -1, yoffset: 3, xadvance: 17 },
            82: { x: 496, y: 151, width: 13, height: 18, xoffset: 0, yoffset: 3, xadvance: 12 },
            83: { x: 70, y: 177, width: 13, height: 18, xoffset: -2, yoffset: 3, xadvance: 10 },
            84: { x: 174, y: 177, width: 11, height: 18, xoffset: -2, yoffset: 3, xadvance: 8 },
            85: { x: 28, y: 178, width: 13, height: 18, xoffset: 0, yoffset: 3, xadvance: 13 },
            86: { x: 346, y: 152, width: 15, height: 18, xoffset: -1, yoffset: 3, xadvance: 14 },
            87: { x: 69, y: 157, width: 21, height: 18, xoffset: -2, yoffset: 3, xadvance: 18 },
            88: { x: 265, y: 153, width: 16, height: 18, xoffset: -1, yoffset: 3, xadvance: 14 },
            89: { x: 282, y: 153, width: 15, height: 18, xoffset: -2, yoffset: 3, xadvance: 12 },
            90: { x: 137, y: 177, width: 12, height: 18, xoffset: -1, yoffset: 3, xadvance: 10 },
            91: { x: 477, y: 84, width: 9, height: 23, xoffset: 0, yoffset: 2, xadvance: 6 },
            92: { x: 274, y: 109, width: 12, height: 21, xoffset: 1, yoffset: 2, xadvance: 13 },
            93: { x: 467, y: 84, width: 9, height: 23, xoffset: -2, yoffset: 2, xadvance: 6 },
            94: { x: 477, y: 172, width: 13, height: 15, xoffset: 0, yoffset: 3, xadvance: 12 },
            95: { x: 324, y: 189, width: 14, height: 5, xoffset: -2, yoffset: 19, xadvance: 10 },
            96: { x: 252, y: 193, width: 9, height: 8, xoffset: -1, yoffset: 0, xadvance: 8 },
            97: { x: 321, y: 172, width: 15, height: 15, xoffset: -1, yoffset: 6, xadvance: 13 },
            98: { x: 158, y: 136, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            99: { x: 401, y: 172, width: 15, height: 15, xoffset: -1, yoffset: 6, xadvance: 13 },
            100: { x: 174, y: 136, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            101: { x: 369, y: 172, width: 15, height: 15, xoffset: -1, yoffset: 6, xadvance: 13 },
            102: { x: 501, y: 99, width: 10, height: 19, xoffset: -2, yoffset: 2, xadvance: 6 },
            103: { x: 190, y: 136, width: 15, height: 19, xoffset: -1, yoffset: 6, xadvance: 13 },
            104: { x: 424, y: 131, width: 14, height: 19, xoffset: -1, yoffset: 2, xadvance: 12 },
            105: { x: 39, y: 157, width: 7, height: 19, xoffset: -1, yoffset: 2, xadvance: 5 },
            106: { x: 457, y: 84, width: 9, height: 23, xoffset: -3, yoffset: 2, xadvance: 5 },
            107: { x: 439, y: 131, width: 14, height: 19, xoffset: -1, yoffset: 2, xadvance: 12 },
            108: { x: 486, y: 28, width: 11, height: 20, xoffset: -2, yoffset: 2, xadvance: 7 },
            109: { x: 279, y: 173, width: 21, height: 15, xoffset: -1, yoffset: 6, xadvance: 19 },
            110: { x: 417, y: 172, width: 14, height: 15, xoffset: -1, yoffset: 6, xadvance: 12 },
            111: { x: 337, y: 172, width: 15, height: 15, xoffset: -1, yoffset: 6, xadvance: 13 },
            112: { x: 206, y: 133, width: 15, height: 19, xoffset: -1, yoffset: 6, xadvance: 13 },
            113: { x: 318, y: 131, width: 15, height: 19, xoffset: -1, yoffset: 6, xadvance: 13 },
            114: { x: 26, y: 198, width: 9, height: 15, xoffset: -1, yoffset: 6, xadvance: 6 },
            115: { x: 14, y: 198, width: 11, height: 15, xoffset: -1, yoffset: 6, xadvance: 9 },
            116: { x: 12, y: 157, width: 10, height: 19, xoffset: -2, yoffset: 2, xadvance: 6 },
            117: { x: 432, y: 172, width: 14, height: 15, xoffset: -1, yoffset: 6, xadvance: 12 },
            118: { x: 0, y: 198, width: 13, height: 15, xoffset: -1, yoffset: 6, xadvance: 11 },
            119: { x: 301, y: 173, width: 19, height: 15, xoffset: -2, yoffset: 6, xadvance: 16 },
            120: { x: 385, y: 172, width: 15, height: 15, xoffset: -2, yoffset: 6, xadvance: 11 },
            121: { x: 270, y: 132, width: 15, height: 19, xoffset: -2, yoffset: 6, xadvance: 12 },
            122: { x: 491, y: 171, width: 13, height: 15, xoffset: -2, yoffset: 6, xadvance: 9 },
            123: { x: 230, y: 109, width: 11, height: 22, xoffset: -2, yoffset: 3, xadvance: 7 },
            124: { x: 494, y: 50, width: 6, height: 23, xoffset: 3, yoffset: 2, xadvance: 12 },
            125: { x: 194, y: 110, width: 11, height: 22, xoffset: -2, yoffset: 3, xadvance: 7 },
            126: { x: 237, y: 193, width: 14, height: 8, xoffset: -1, yoffset: 8, xadvance: 12 },
            127: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            128: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            129: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            130: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            131: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            132: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            133: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            134: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            135: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            136: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            137: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            138: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            139: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            140: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            141: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            142: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            143: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            144: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            145: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            146: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            147: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            148: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            149: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            150: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            151: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            152: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            153: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            154: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            155: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            156: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            157: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            158: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            159: { x: 0, y: 0, width: 0, height: 0, xoffset: 0, yoffset: 0, xadvance: 0 },
            160: { x: 347, y: 189, width: 7, height: 5, xoffset: -3, yoffset: 20, xadvance: 6 },
            161: { x: 23, y: 157, width: 7, height: 19, xoffset: -1, yoffset: 6, xadvance: 6 },
            162: { x: 482, y: 130, width: 13, height: 19, xoffset: -1, yoffset: 4, xadvance: 11 },
            163: { x: 379, y: 131, width: 14, height: 19, xoffset: -2, yoffset: 2, xadvance: 11 },
            164: { x: 44, y: 198, width: 14, height: 14, xoffset: -1, yoffset: 4, xadvance: 12 },
            165: { x: 482, y: 151, width: 13, height: 18, xoffset: -1, yoffset: 3, xadvance: 11 },
            166: { x: 487, y: 50, width: 6, height: 23, xoffset: 3, yoffset: 2, xadvance: 12 },
            167: { x: 347, y: 84, width: 13, height: 23, xoffset: -1, yoffset: 2, xadvance: 11 },
            168: { x: 487, y: 99, width: 11, height: 7, xoffset: -1, yoffset: 1, xadvance: 10 },
            169: { x: 172, y: 157, width: 19, height: 18, xoffset: -2, yoffset: 3, xadvance: 15 },
            170: { x: 113, y: 197, width: 10, height: 12, xoffset: -2, yoffset: 2, xadvance: 7 },
            171: { x: 462, y: 172, width: 14, height: 15, xoffset: -2, yoffset: 6, xadvance: 9 },
            172: { x: 154, y: 197, width: 14, height: 11, xoffset: -1, yoffset: 6, xadvance: 12 },
            173: { x: 289, y: 190, width: 9, height: 6, xoffset: -1, yoffset: 11, xadvance: 8 },
            174: { x: 152, y: 157, width: 19, height: 18, xoffset: -2, yoffset: 3, xadvance: 15 },
            175: { x: 309, y: 190, width: 14, height: 5, xoffset: -2, yoffset: 1, xadvance: 10 },
            176: { x: 182, y: 197, width: 10, height: 11, xoffset: -1, yoffset: 2, xadvance: 8 },
            177: { x: 422, y: 152, width: 14, height: 18, xoffset: -1, yoffset: 3, xadvance: 11 },
            178: { x: 124, y: 197, width: 10, height: 12, xoffset: -2, yoffset: 2, xadvance: 7 },
            179: { x: 135, y: 197, width: 10, height: 12, xoffset: -2, yoffset: 2, xadvance: 7 },
            180: { x: 262, y: 191, width: 9, height: 8, xoffset: 0, yoffset: 0, xadvance: 8 },
            181: { x: 409, y: 131, width: 14, height: 19, xoffset: -1, yoffset: 6, xadvance: 12 },
            182: { x: 154, y: 112, width: 13, height: 22, xoffset: -1, yoffset: 2, xadvance: 12 },
            183: { x: 281, y: 190, width: 7, height: 7, xoffset: 3, yoffset: 8, xadvance: 7 },
            184: { x: 272, y: 191, width: 8, height: 7, xoffset: -1, yoffset: 17, xadvance: 7 },
            185: { x: 146, y: 197, width: 7, height: 12, xoffset: 0, yoffset: 2, xadvance: 7 },
            186: { x: 102, y: 197, width: 10, height: 12, xoffset: -2, yoffset: 2, xadvance: 7 },
            187: { x: 447, y: 172, width: 14, height: 15, xoffset: -2, yoffset: 6, xadvance: 9 },
            188: { x: 40, y: 136, width: 18, height: 19, xoffset: 0, yoffset: 2, xadvance: 17 },
            189: { x: 59, y: 136, width: 18, height: 19, xoffset: 0, yoffset: 2, xadvance: 17 },
            190: { x: 460, y: 109, width: 20, height: 19, xoffset: -2, yoffset: 2, xadvance: 17 },
            191: { x: 454, y: 131, width: 13, height: 19, xoffset: -1, yoffset: 6, xadvance: 11 },
            192: { x: 281, y: 84, width: 17, height: 23, xoffset: -1, yoffset: -2, xadvance: 15 },
            193: { x: 263, y: 84, width: 17, height: 23, xoffset: -1, yoffset: -2, xadvance: 15 },
            194: { x: 76, y: 112, width: 17, height: 22, xoffset: -1, yoffset: -1, xadvance: 15 },
            195: { x: 40, y: 112, width: 17, height: 22, xoffset: -1, yoffset: -1, xadvance: 15 },
            196: { x: 58, y: 112, width: 17, height: 22, xoffset: -1, yoffset: -1, xadvance: 15 },
            197: { x: 245, y: 84, width: 17, height: 23, xoffset: -1, yoffset: -2, xadvance: 15 },
            198: { x: 91, y: 157, width: 20, height: 18, xoffset: -1, yoffset: 3, xadvance: 18 },
            199: { x: 242, y: 109, width: 18, height: 21, xoffset: -1, yoffset: 3, xadvance: 16 },
            200: { x: 402, y: 84, width: 12, height: 23, xoffset: -1, yoffset: -2, xadvance: 10 },
            201: { x: 389, y: 84, width: 12, height: 23, xoffset: 0, yoffset: -2, xadvance: 10 },
            202: { x: 168, y: 112, width: 12, height: 22, xoffset: -1, yoffset: -1, xadvance: 10 },
            203: { x: 218, y: 109, width: 11, height: 22, xoffset: 0, yoffset: -1, xadvance: 10 },
            204: { x: 447, y: 84, width: 9, height: 23, xoffset: -3, yoffset: -2, xadvance: 6 },
            205: { x: 437, y: 84, width: 9, height: 23, xoffset: -1, yoffset: -2, xadvance: 6 },
            206: { x: 181, y: 112, width: 12, height: 22, xoffset: -4, yoffset: -1, xadvance: 6 },
            207: { x: 206, y: 109, width: 11, height: 22, xoffset: -3, yoffset: -1, xadvance: 6 },
            208: { x: 211, y: 154, width: 18, height: 18, xoffset: -2, yoffset: 3, xadvance: 15 },
            209: { x: 94, y: 112, width: 15, height: 22, xoffset: 0, yoffset: -1, xadvance: 15 },
            210: { x: 205, y: 84, width: 19, height: 23, xoffset: -1, yoffset: -2, xadvance: 17 },
            211: { x: 225, y: 84, width: 19, height: 23, xoffset: -1, yoffset: -2, xadvance: 17 },
            212: { x: 487, y: 75, width: 19, height: 22, xoffset: -1, yoffset: -1, xadvance: 17 },
            213: { x: 0, y: 112, width: 19, height: 22, xoffset: -1, yoffset: -1, xadvance: 17 },
            214: { x: 20, y: 112, width: 19, height: 22, xoffset: -1, yoffset: -1, xadvance: 17 },
            215: { x: 88, y: 197, width: 13, height: 12, xoffset: -1, yoffset: 6, xadvance: 12 },
            216: { x: 20, y: 136, width: 19, height: 19, xoffset: -1, yoffset: 3, xadvance: 17 },
            217: { x: 375, y: 84, width: 13, height: 23, xoffset: 0, yoffset: -2, xadvance: 13 },
            218: { x: 361, y: 84, width: 13, height: 23, xoffset: 0, yoffset: -2, xadvance: 13 },
            219: { x: 126, y: 112, width: 13, height: 22, xoffset: 0, yoffset: -1, xadvance: 13 },
            220: { x: 140, y: 112, width: 13, height: 22, xoffset: 0, yoffset: -1, xadvance: 13 },
            221: { x: 331, y: 84, width: 15, height: 23, xoffset: -2, yoffset: -2, xadvance: 12 },
            222: { x: 111, y: 177, width: 12, height: 18, xoffset: 0, yoffset: 3, xadvance: 11 },
            223: { x: 349, y: 131, width: 14, height: 19, xoffset: -1, yoffset: 2, xadvance: 12 },
            224: { x: 324, y: 109, width: 15, height: 20, xoffset: -1, yoffset: 1, xadvance: 13 },
            225: { x: 340, y: 109, width: 15, height: 20, xoffset: -1, yoffset: 1, xadvance: 13 },
            226: { x: 110, y: 136, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            227: { x: 78, y: 136, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            228: { x: 94, y: 136, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            229: { x: 356, y: 109, width: 15, height: 20, xoffset: -1, yoffset: 1, xadvance: 13 },
            230: { x: 254, y: 174, width: 24, height: 15, xoffset: -1, yoffset: 6, xadvance: 22 },
            231: { x: 298, y: 153, width: 15, height: 18, xoffset: -1, yoffset: 6, xadvance: 13 },
            232: { x: 308, y: 109, width: 15, height: 20, xoffset: -1, yoffset: 1, xadvance: 13 },
            233: { x: 372, y: 109, width: 15, height: 20, xoffset: -1, yoffset: 1, xadvance: 13 },
            234: { x: 126, y: 136, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            235: { x: 142, y: 136, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            236: { x: 501, y: 28, width: 9, height: 20, xoffset: -3, yoffset: 1, xadvance: 5 },
            237: { x: 450, y: 109, width: 9, height: 20, xoffset: -1, yoffset: 1, xadvance: 5 },
            238: { x: 496, y: 130, width: 12, height: 19, xoffset: -4, yoffset: 2, xadvance: 5 },
            239: { x: 0, y: 157, width: 11, height: 19, xoffset: -3, yoffset: 2, xadvance: 5 },
            240: { x: 238, y: 133, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            241: { x: 394, y: 131, width: 14, height: 19, xoffset: -1, yoffset: 2, xadvance: 12 },
            242: { x: 388, y: 109, width: 15, height: 20, xoffset: -1, yoffset: 1, xadvance: 13 },
            243: { x: 404, y: 109, width: 15, height: 20, xoffset: -1, yoffset: 1, xadvance: 13 },
            244: { x: 302, y: 131, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            245: { x: 286, y: 132, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            246: { x: 254, y: 132, width: 15, height: 19, xoffset: -1, yoffset: 2, xadvance: 13 },
            247: { x: 74, y: 197, width: 13, height: 12, xoffset: -1, yoffset: 6, xadvance: 11 },
            248: { x: 353, y: 172, width: 15, height: 15, xoffset: -1, yoffset: 6, xadvance: 13 },
            249: { x: 435, y: 109, width: 14, height: 20, xoffset: -1, yoffset: 1, xadvance: 12 },
            250: { x: 420, y: 109, width: 14, height: 20, xoffset: -1, yoffset: 1, xadvance: 12 },
            251: { x: 364, y: 131, width: 14, height: 19, xoffset: -1, yoffset: 2, xadvance: 12 },
            252: { x: 334, y: 131, width: 14, height: 19, xoffset: -1, yoffset: 2, xadvance: 12 },
            253: { x: 189, y: 84, width: 15, height: 24, xoffset: -2, yoffset: 1, xadvance: 12 },
            254: { x: 315, y: 84, width: 15, height: 23, xoffset: -1, yoffset: 2, xadvance: 13 },
            255: { x: 299, y: 84, width: 15, height: 23, xoffset: -2, yoffset: 2, xadvance: 12 },
            256: { x: 27, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            257: { x: 54, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            258: { x: 81, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            259: { x: 108, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            260: { x: 135, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            261: { x: 162, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            262: { x: 0, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            263: { x: 216, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            264: { x: 243, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            265: { x: 270, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            266: { x: 297, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            267: { x: 324, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            268: { x: 351, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            269: { x: 189, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            270: { x: 405, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            271: { x: 432, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            272: { x: 459, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            273: { x: 0, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            274: { x: 27, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            275: { x: 54, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            276: { x: 81, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            277: { x: 108, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            278: { x: 135, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            279: { x: 162, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            280: { x: 189, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            281: { x: 216, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            282: { x: 243, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            283: { x: 270, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            284: { x: 297, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            285: { x: 324, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            286: { x: 351, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            287: { x: 378, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            288: { x: 405, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            289: { x: 432, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            290: { x: 459, y: 28, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            291: { x: 0, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            292: { x: 27, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            293: { x: 54, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            294: { x: 81, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            295: { x: 108, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            296: { x: 135, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            297: { x: 162, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            298: { x: 189, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            299: { x: 216, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            300: { x: 243, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            301: { x: 270, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            302: { x: 297, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            303: { x: 324, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            304: { x: 351, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            305: { x: 378, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            306: { x: 405, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            307: { x: 432, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            308: { x: 459, y: 56, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            309: { x: 0, y: 84, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            310: { x: 27, y: 84, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            311: { x: 486, y: 0, width: 25, height: 26, xoffset: -2, yoffset: 0, xadvance: 21 },
            312: { x: 54, y: 84, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            313: { x: 81, y: 84, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            314: { x: 108, y: 84, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            315: { x: 135, y: 84, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            316: { x: 162, y: 84, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
            317: { x: 378, y: 0, width: 26, height: 26, xoffset: -2, yoffset: 0, xadvance: 22 },
    }
};
// Draw the GUI box using 9-slice scaling
function drawGuiBox(ctx, guiImage, x, y, width, height) {
    const cornerSize = 16;

    // Corners
    ctx.drawImage(guiImage, 0, 0, cornerSize, cornerSize, x, y, cornerSize, cornerSize); // Top-left
    ctx.drawImage(guiImage, guiImage.width - cornerSize, 0, cornerSize, cornerSize, x + width - cornerSize, y, cornerSize, cornerSize); // Top-right
    ctx.drawImage(guiImage, 0, guiImage.height - cornerSize, cornerSize, cornerSize, x, y + height - cornerSize, cornerSize, cornerSize); // Bottom-left
    ctx.drawImage(guiImage, guiImage.width - cornerSize, guiImage.height - cornerSize, cornerSize, cornerSize, x + width - cornerSize, y + height - cornerSize, cornerSize, cornerSize); // Bottom-right

    // Edges
    ctx.drawImage(guiImage, cornerSize, 0, guiImage.width - 2 * cornerSize, cornerSize, x + cornerSize, y, width - 2 * cornerSize, cornerSize); // Top edge
    ctx.drawImage(guiImage, cornerSize, guiImage.height - cornerSize, guiImage.width - 2 * cornerSize, cornerSize, x + cornerSize, y + height - cornerSize, width - 2 * cornerSize, cornerSize); // Bottom edge
    ctx.drawImage(guiImage, 0, cornerSize, cornerSize, guiImage.height - 2 * cornerSize, x, y + cornerSize, cornerSize, height - 2 * cornerSize); // Left edge
    ctx.drawImage(guiImage, guiImage.width - cornerSize, cornerSize, cornerSize, guiImage.height - 2 * cornerSize, x + width - cornerSize, y + cornerSize, cornerSize, height - 2 * cornerSize); // Right edge

    // Center
    ctx.drawImage(guiImage, cornerSize, cornerSize, guiImage.width - 2 * cornerSize, guiImage.height - 2 * cornerSize, x + cornerSize, y + cornerSize, width - 2 * cornerSize, height - 2 * cornerSize);
}

function drawText() {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const maxLines = 4; // Max number of lines
    const lineHeight = 24; // Height of each line in pixels3

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Calculate text box dimensions
    const padding = 16;
    const boxWidth = canvasWidth - 2 * padding;
    const boxHeight = canvasHeight - 2 * padding;

    // Draw GUI box
    drawGuiBox(ctx, guiBoxImage, padding, padding, boxWidth, boxHeight);

    // Get the text input
    const text = textInput.value;
    let x = padding + 10; // starting x position
    let y = padding + 10; // starting y position

    // Render each character
    for (let i = 0; i < text.length; i++) {
        const char = text.charCodeAt(i);
        const glyph = fontData.chars[char];

        if (glyph) {
            // Draw the character from the font atlas
            ctx.drawImage(fontImage,
                glyph.x, glyph.y, glyph.width, glyph.height,
                x + glyph.xoffset, y + glyph.yoffset, glyph.width, glyph.height
            );
            x += glyph.xadvance; // Move to the next character position
        }
    }
}

// Update GUI box when input changes
textInput.addEventListener("input", drawText);

// Download the canvas content as an image
downloadButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "growtopia_text.png";
    link.click();
});

// Initial draw once images are loaded
guiBoxImage.onload = drawText;
fontImage.onload = drawText;
