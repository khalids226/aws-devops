const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('🚀 Deployed from GitHub Actions to EC2! Powered by DevSkill AWS DevOps Team'));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
