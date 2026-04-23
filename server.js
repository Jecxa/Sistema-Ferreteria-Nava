require('dotenv').config();
const express = require('express');
const multer  = require('multer');
const path    = require('path');
const { createClient } = require('@supabase/supabase-js');

const app  = express();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    if (['image/jpeg', 'image/png'].includes(file.mimetype)) cb(null, true);
    else cb(new Error('Solo se permiten imágenes JPG o PNG'));
  }
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

/* ── Subir imagen a Supabase Storage ─────────────────────────────────── */
async function subirImagen(file) {
  const nombre = `${Date.now()}_${file.originalname.replace(/\s+/g, '_')}`;
  const { error } = await supabase.storage
    .from('productos')
    .upload(nombre, file.buffer, { contentType: file.mimetype, upsert: false });
  if (error) throw new Error('Error al subir imagen: ' + error.message);
  const { data } = supabase.storage.from('productos').getPublicUrl(nombre);
  return { url: data.publicUrl, nombre: file.originalname, tipo: file.mimetype };
}

/* ── PRODUCTOS ────────────────────────────────────────────────────────── */
app.get('/api/productos', async (req, res) => {
  const { data, error } = await supabase
    .from('productos').select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post('/api/productos', upload.single('imagen'), async (req, res) => {
  try {
    const b = req.body;
    let imagen_url = null, imagen_nombre = null, imagen_tipo = null;
    if (req.file) {
      const img = await subirImagen(req.file);
      imagen_url = img.url; imagen_nombre = img.nombre; imagen_tipo = img.tipo;
    }
    const producto = {
      id:          Math.random().toString(36).slice(2, 10),
      codigo:      b.codigo,
      nombre:      b.nombre,
      categoria:   b.categoria || 'General',
      precio:      Number(b.precio),
      existencia:  Number(b.existencia),
      minimo:      Number(b.minimo),
      imagen_url, imagen_nombre, imagen_tipo
    };
    const { data, error } = await supabase.from('productos').insert(producto).select().single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.put('/api/productos/:id', upload.single('imagen'), async (req, res) => {
  try {
    const b = req.body;
    const updates = {
      codigo:     b.codigo,
      nombre:     b.nombre,
      categoria:  b.categoria || 'General',
      precio:     Number(b.precio),
      existencia: Number(b.existencia),
      minimo:     Number(b.minimo)
    };
    if (req.file) {
      const img = await subirImagen(req.file);
      updates.imagen_url = img.url;
      updates.imagen_nombre = img.nombre;
      updates.imagen_tipo = img.tipo;
    }
    const { data, error } = await supabase
      .from('productos').update(updates).eq('id', req.params.id).select().single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.delete('/api/productos/:id', async (req, res) => {
  const { error } = await supabase.from('productos').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ ok: true });
});

/* ── VENTAS ──────────────────────────────────────────────────────────── */
app.get('/api/ventas', async (req, res) => {
  const { data, error } = await supabase
    .from('ventas').select('*').order('ts', { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Registra la venta y descuenta stock en una sola petición
app.post('/api/ventas', async (req, res) => {
  const { id, ts, user_email, items, total } = req.body;

  for (const item of items) {
    const { data: prod, error: fetchErr } = await supabase
      .from('productos').select('existencia').eq('id', item.productoId).single();
    if (fetchErr || !prod)
      return res.status(404).json({ error: `Producto ${item.codigo} no encontrado` });
    if (prod.existencia < item.cantidad)
      return res.status(400).json({ error: `Stock insuficiente para ${item.nombre}` });
    await supabase.from('productos')
      .update({ existencia: prod.existencia - item.cantidad })
      .eq('id', item.productoId);
  }

  const { data, error } = await supabase
    .from('ventas').insert({ id, ts, user_email, items, total }).select().single();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

/* ── LOG ─────────────────────────────────────────────────────────────── */
app.get('/api/log', async (req, res) => {
  const { data, error } = await supabase
    .from('log').select('*').order('created_at', { ascending: false }).limit(200);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post('/api/log', async (req, res) => {
  const { data, error } = await supabase.from('log').insert(req.body).select().single();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

/* ── Manejo de errores de multer ─────────────────────────────────────── */
app.use((err, req, res, next) => {
  if (err.code === 'LIMIT_FILE_SIZE')
    return res.status(400).json({ error: 'La imagen supera el máximo de 2 MB' });
  res.status(400).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ferretería Nava corriendo en puerto ${PORT}`));
