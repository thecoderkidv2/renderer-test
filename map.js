// ─────────────────────────────────────────────────────────────────────────────
// TEXTURE DEFINITIONS
// src        : path, URL, or base64 data URI for the albedo/diffuse image
// metallic   : 0.0 (non-metal) → 1.0 (full metal)
// roughness  : 0.0 (mirror) → 1.0 (fully rough)
// normal     : "auto" to generate from albedo luminance, or a path/URL/base64
// hue        : hue rotation in degrees, 0 = no shift (range: -180 → 180)
// ─────────────────────────────────────────────────────────────────────────────

texture_concrete = {
  src:      "textures/concrete_1.jpg",
  metallic:  0.0,
  roughness: 0.95,
  normal:    "auto",
  hue:       0,
};

texture_wood = {
  src:      "textures/wood.jpg",
  metallic:  0.05,
  roughness: 0.6,
  normal:    "auto",
  hue:       0,
};

texture_metal = {
  src:      "textures/metal_plate.jpg",
  metallic:  0.9,
  roughness: 0.3,
  normal:    "auto",
  hue:       200,
};

texture_wall = {
  src:      "textures/stone_wall.jpg",
  metallic:  0.0,
  roughness: 0.95,
  normal:    "auto",
  hue:       200,
};

// ─────────────────────────────────────────────────────────────────────────────
// SCENE DEFINITION
// Each object is a box (axis-aligned) defined by:
//   pos     : [x, y, z]  — centre of the box in world space
//   size    : [w, h, d]  — full extents (width, height, depth)
//   texture : reference to one of the texture objects above
// ─────────────────────────────────────────────────────────────────────────────

scene = [

  // ── Floor ──────────────────────────────────────────────────────────────────
  {
    pos:     [0, -0.25, 0],
    size:    [12, 0.5, 12],
    texture: texture_concrete,
  },

  // ── Back wall ──────────────────────────────────────────────────────────────
  {
    pos:     [0, 2, -6],
    size:    [12, 5, 0.4],
    texture: texture_wall,
  },

  // ── Left wall ──────────────────────────────────────────────────────────────
  {
    pos:     [-6, 2, 0],
    size:    [0.4, 5, 12],
    texture: texture_wall,
  },

  // ── Wooden crate (large) ───────────────────────────────────────────────────
  {
    pos:     [0.5, 0.75, 0],
    size:    [1.5, 1.5, 1.5],
    texture: texture_wood,
  },

  // ── Wooden crate (small, stacked on top) ───────────────────────────────────
  {
    pos:     [0.5, 2.25, 0.2],
    size:    [0.9, 0.9, 0.9],
    texture: texture_wood,
  },

  // ── Metal support column, left ─────────────────────────────────────────────
  {
    pos:     [-4, 2, -4],
    size:    [0.4, 4, 0.4],
    texture: texture_metal,
  },

  // ── Metal support column, right ────────────────────────────────────────────
  {
    pos:     [3, 2, -4],
    size:    [0.4, 4, 0.4],
    texture: texture_metal,
  },

  // ── Metal crossbeam ────────────────────────────────────────────────────────
  {
    pos:     [-0.5, 4.1, -4],
    size:    [7.4, 0.25, 0.4],
    texture: texture_metal,
  },

  // ── Concrete step / plinth ─────────────────────────────────────────────────
  {
    pos:     [-3, 0.2, 1.5],
    size:    [2, 0.4, 1.5],
    texture: texture_concrete,
  },

  // ── Metal box on the plinth ────────────────────────────────────────────────
  {
    pos:     [-3, 0.65, 1.5],
    size:    [0.9, 0.5, 0.9],
    texture: texture_metal,
  },

  // ── Flat wooden pallet on the floor ────────────────────────────────────────
  {
    pos:     [2.5, 0.1, 2],
    size:    [2.5, 0.2, 1.5],
    texture: texture_wood,
  },

  // ── Concrete block, far right ──────────────────────────────────────────────
  {
    pos:     [4, 0.5, -1],
    size:    [1.2, 1.0, 1.2],
    texture: texture_concrete,
  },

];