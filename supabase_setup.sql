-- ============================================================
-- Ferretería Nava — Setup de tablas en Supabase
-- Pega esto en: Supabase > SQL Editor > New Query > Run
-- ============================================================

CREATE TABLE productos (
  id            TEXT PRIMARY KEY,
  codigo        TEXT UNIQUE NOT NULL,
  nombre        TEXT NOT NULL,
  categoria     TEXT NOT NULL DEFAULT 'General',
  precio        DECIMAL(10,2) NOT NULL,
  existencia    INTEGER NOT NULL DEFAULT 0,
  minimo        INTEGER NOT NULL DEFAULT 0,
  imagen_url    TEXT,
  imagen_nombre TEXT,
  imagen_tipo   TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE ventas (
  id         TEXT PRIMARY KEY,
  ts         TIMESTAMPTZ NOT NULL,
  user_email TEXT,
  total      DECIMAL(10,2),
  items      JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE log (
  id         SERIAL PRIMARY KEY,
  ts         TEXT,
  user_email TEXT,
  accion     TEXT,
  detalle    TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Deshabilitar RLS para el prototipo academico
ALTER TABLE productos DISABLE ROW LEVEL SECURITY;
ALTER TABLE ventas    DISABLE ROW LEVEL SECURITY;
ALTER TABLE log       DISABLE ROW LEVEL SECURITY;

-- ============================================================
-- Storage: crear bucket "productos" con acceso publico
-- Ir a: Supabase > Storage > New Bucket
--   Name: productos
--   Public bucket: ON
-- ============================================================
