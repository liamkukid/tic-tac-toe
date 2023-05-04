export default function calculateLocation(index) {
    switch(index) {
        case 0: return 'row 1, col 1';
        case 1: return 'row 1, col 2';
        case 2: return 'row 1, col 3';
        case 3: return 'row 2, col 1';
        case 4: return 'row 2, col 2';
        case 5: return 'row 2, col 3';
        case 6: return 'row 3, col 1';
        case 7: return 'row 3, col 2';
        case 8: return 'row 3, col 3';
        default: return '';
    };
}