const compression = require('compression');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const staticDir = process.env.STATIC_DIR || path.join(__dirname, 'public');

app.disable('x-powered-by');
app.use(compression());
app.use(express.static(staticDir, { maxAge: '1h', index: false }));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('*', (req, res) => {
  const indexPath = path.join(staticDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    res.status(500).send('Build not found. Run npm run build to generate web assets.');
    return;
  }
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
