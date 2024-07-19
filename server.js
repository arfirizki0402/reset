const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/delete-server-data', (req, res) => {
    console.log('Permintaan diterima:', req.body);
    const { action } = req.body;
    
    if (action === 'delete') {
        // Logika untuk menghapus data di server
        // Misalnya, hapus data dari database
        
        // Simulasi penghapusan data
        console.log('Data server dihapus');
        
        // Berikan respons sukses
        res.status(200).send('Data server berhasil dihapus');
    } else {
        console.log('Aksi tidak dikenal');
        res.status(400).send('Aksi tidak dikenal');
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
