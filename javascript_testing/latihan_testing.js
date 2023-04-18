

// deksripsi ekspektasi yang diinginkan
test('dua tambah dua adalah empat', () => {
    /*
    expect(2 + 2) merupakan segmen yang berisi perintah yang menghasilkan nilai balikan, perintah tersebut dapat berupa fungsi ataupun perintah langsung.
    toBe(4) disebut dengan matcher, berisi nilai yang diharapkan dari sebuah perintah yang dilakukan sebelumnya.
    */
    expect(2+2).toBe(4);
});

/*
 kita juga dapat menuliskan sebuah test secara grouping berdasarkan karakteristik ataupun grup yang sama menggunakan segmen describe
*/
describe('pengujian olah aritmatika', () => {
   test('#1 dua tambah dua adalah empat', () => {
        expect(2+2).toBe(4);
   });
 
   test('#2 dua kali tiga adalah enam', () => {
        expect(2*3).toBe(6);
   });
});
