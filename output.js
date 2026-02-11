//Wed Feb 11 2026 03:27:09 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
import _0x356d81 from "https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm";
import { instantiate as _0x39a488 } from "https://cdn.jsdelivr.net/npm/@assemblyscript/loader@0.27.10/+esm";
import { PDFDocument as _0x4575de } from "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/+esm";
import * as _0x3b28d3 from "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.2.67/build/pdf.min.mjs";
_0x3b28d3.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.2.67/build/pdf.worker.min.mjs";
const vt = "./notebooklm_watermark_transparent.png";
const bt = 6;
const Ct = "./wasm/core.wasm";
const b = document.getElementById("uploadArea");
const j = document.getElementById("fileInput");
const lt = document.getElementById("fileName");
const f = document.getElementById("statusLog");
const It = document.getElementById("statusText");
const M = document.getElementById("message");
const Q = document.getElementById("pdfMessage");
const B = document.getElementById("downloadZipBtn");
const W = document.getElementById("downloadPdfBtn");
const tt = document.getElementById("previewGrid");
const D = document.getElementById("processedCount");
const k = document.getElementById("totalCount");
const C = document.getElementById("modeText");
const Pt = document.getElementById("toastRoot");
const A = document.getElementById("inpaintToggle");
const ut = document.getElementById("inpaintToggleLabel");
const et = document.getElementById("modeHint");
let x = null;
let nt = new Map();
let P = null;
let _ = null;
let z = null;
let G = null;
let U = false;
let Z = null;
let at = null;
let h = null;
const Et = {
  type: "image/jpeg",
  ext: "jpg",
  quality: 1
};
const Lt = 2;
let E = "idle";
Mt();
function Mt() {
  Bt();
  V("ready");
  N("idle");
}
function Bt() {
  b.addEventListener("click", () => j.click());
  b.addEventListener("keydown", _0x28880a => {
    (_0x28880a.key === "Enter" || _0x28880a.key === " ") && (_0x28880a.preventDefault(), j.click());
  });
  b.addEventListener("dragover", _0x2f19d3 => {
    _0x2f19d3.preventDefault();
    b.classList.add("dragover");
  });
  b.addEventListener("dragleave", () => {
    b.classList.remove("dragover");
  });
  b.addEventListener("drop", _0x5d47e2 => {
    _0x5d47e2.preventDefault();
    b.classList.remove("dragover");
    const _0x492bb1 = Array.from(_0x5d47e2.dataTransfer.files || []);
    mt(_0x492bb1);
  });
  j.addEventListener("change", _0xf18274 => {
    const _0x48c379 = Array.from(_0xf18274.target.files || []);
    mt(_0x48c379);
  });
  B.addEventListener("click", () => {
    P && it(P, z || "unwatermarked_images.zip");
  });
  W.addEventListener("click", () => {
    _ && it(_, G || "unwatermarked.pdf");
  });
}
function N(_0x55094a) {
  const _0x43b126 = _0x55094a === "pdf";
  A && (_0x43b126 ? (A.checked = true, A.disabled = true) : A.disabled = false);
  ut && ut.classList.toggle("locked", _0x43b126);
  et && (_0x43b126 ? et.textContent = "PDF mode locked: OpenCV + JPG (quality=1.0) + PDF output + 2.0x render + preview on." : et.textContent = "Output: JPG (quality=1.0). Preview on. OpenCV optional.");
}
function Dt(_0x1b79ee) {
  return _0x1b79ee.has("zip") ? "zip" : _0x1b79ee.has("pdf") ? "pdf" : "image";
}
function H() {
  return E === "pdf";
}
function de() {
  U || (j.value = "", lt.textContent = "no file", tt.innerHTML = "", f.textContent = "waiting for upload...", M.textContent = "", Q.textContent = "", B.classList.add("hidden"), W.classList.add("hidden"), P = null, _ = null, z = null, G = null, z = null, G = null, D && (D.textContent = "0"), k && (k.textContent = "0"), C && (C.textContent = "idle"), E = "idle", N("idle"), V("ready"));
}
async function mt(_0x3b6bf2) {
  if (U) {
    L("Processing, please wait.");
    return;
  }
  const _0x31cf90 = _0x3b6bf2.filter(_0x1d0b72 => kt(_0x1d0b72));
  if (_0x31cf90.length === 0) {
    L("No supported files found.");
    return;
  }
  lt.textContent = _0x31cf90.length === 1 ? _0x31cf90[0].name : _0x31cf90.length + " files";
  tt.innerHTML = "";
  M.textContent = "";
  Q.textContent = "";
  B.classList.add("hidden");
  W.classList.add("hidden");
  P = null;
  _ = null;
  D && (D.textContent = "0");
  k && (k.textContent = String(_0x31cf90.length));
  f.textContent = "processing...";
  try {
    U = true;
    V("running");
    const _0x33484d = new Set(_0x31cf90.map(q));
    E = Dt(_0x33484d);
    N(E);
    await zt();
    await Wt();
    H() && (await ht());
    const _0x3997e0 = _t(_0x31cf90, _0x33484d);
    const _0x5b1fa1 = At();
    z = gt(_0x3997e0, "zip", _0x5b1fa1);
    G = gt(_0x3997e0, "pdf", _0x5b1fa1);
    E === "zip" ? (C && (C.textContent = "zip"), await Qt(_0x31cf90[0])) : E === "pdf" ? (C && (C.textContent = "pdf"), await ee(_0x31cf90[0])) : (C && (C.textContent = "images"), await Xt(_0x31cf90));
  } catch (_0xded8a2) {
    console.error(_0xded8a2);
    L("Processing failed. Please retry with a smaller file.");
  } finally {
    U = false;
    V("ready");
    E = "idle";
    N("idle");
  }
}
function kt(_0x542aad) {
  return ["zip", "pdf", "image"].includes(q(_0x542aad));
}
function q(_0x54737f) {
  const _0x37db9b = _0x54737f.name.toLowerCase();
  return _0x37db9b.endsWith(".zip") ? "zip" : _0x37db9b.endsWith(".pdf") ? "pdf" : _0x54737f.type.startsWith("image/") ? "image" : "unknown";
}
function At(_0x3462ed = new Date()) {
  const _0x11264e = String(_0x3462ed.getFullYear());
  const _0x6e7909 = String(_0x3462ed.getMonth() + 1).padStart(2, "0");
  const _0x55dee9 = String(_0x3462ed.getDate()).padStart(2, "0");
  return "" + _0x11264e + _0x6e7909 + _0x55dee9;
}
function ot(_0x593a5a) {
  return _0x593a5a.replace(/\.[^.]+$/, "");
}
function _t(_0x1314b9, _0x23cd1b) {
  if (_0x23cd1b.has("zip")) {
    const _0x15232c = _0x1314b9.find(_0x4670a5 => q(_0x4670a5) === "zip");
    return ot(_0x15232c ? _0x15232c.name : _0x1314b9[0].name);
  }
  if (_0x23cd1b.has("pdf")) {
    const _0x58109f = _0x1314b9.find(_0x532b04 => q(_0x532b04) === "pdf");
    return ot(_0x58109f ? _0x58109f.name : _0x1314b9[0].name);
  }
  return ot(_0x1314b9[0].name);
}
function gt(_0x220e29, _0x3bcdd6, _0x6096fb) {
  return (_0x220e29 && _0x220e29.trim() ? _0x220e29.trim() : "output") + "_unwatermarked_" + _0x6096fb + "." + _0x3bcdd6;
}
function V(_0x42054e) {
  It.textContent = _0x42054e;
}
function R(_0x458920) {
  f.textContent = f.textContent + "\n" + _0x458920;
  f.scrollTop = f.scrollHeight;
}
function L(_0x1d55c1) {
  const _0x1c3cb5 = document.createElement("div");
  _0x1c3cb5.className = "toast error";
  _0x1c3cb5.innerHTML = "<div class=\"toast-header\"><span class=\"toast-title\">notice</span><button class=\"toast-close\">×</button></div><div class=\"toast-body\">" + _0x1d55c1 + "</div>";
  _0x1c3cb5.querySelector(".toast-close").addEventListener("click", () => _0x1c3cb5.remove());
  Pt.appendChild(_0x1c3cb5);
  setTimeout(() => _0x1c3cb5.remove(), 5000);
}
function Rt() {
  if (window.mediumZoom) {
    if (!at) {
      at = window.mediumZoom("[data-zoomable]", {
        margin: 24,
        scrollOffset: 0,
        background: "rgba(250, 250, 250, 0.86)"
      });
      return;
    }
    at.attach("[data-zoomable]");
  }
}
function St() {
  return H() ? true : !!(A && A.checked);
}
function $t() {
  return H();
}
function Ft() {
  return true;
}
function Ot() {
  return Lt;
}
function Tt() {
  return Et;
}
function it(_0x4fc4fb, _0x29524c) {
  const _0x2dfebf = URL.createObjectURL(_0x4fc4fb);
  const _0x11d188 = document.createElement("a");
  _0x11d188.href = _0x2dfebf;
  _0x11d188.download = _0x29524c;
  _0x11d188.click();
  URL.revokeObjectURL(_0x2dfebf);
}
async function Wt() {
  if (h) {
    return;
  }
  const _0x557f01 = await fetch(Ct);
  const {
    exports: _0xa49a9a
  } = await _0x39a488(_0x557f01, {});
  if (!_0xa49a9a || typeof _0xa49a9a.removeWatermark != "function") {
    throw new Error("wasm load failed");
  }
  h = _0xa49a9a;
}
function jt(_0x3e4d39, _0x4841bc, _0xde1385) {
  if (!h) {
    throw new Error("wasm not ready");
  }
  const _0x503f33 = h.__newArray(h.U8_ID, _0x3e4d39.data);
  const _0x4235ef = h.__newArray(h.F32_ID, _0xde1385);
  h.__pin(_0x503f33);
  h.__pin(_0x4235ef);
  try {
    h.removeWatermark(_0x503f33, _0x3e4d39.width, _0x4841bc.x, _0x4841bc.y, _0x4841bc.width, _0x4841bc.height, _0x4235ef);
    const _0x3d7404 = h.__getUint8Array(_0x503f33);
    _0x3e4d39.data.set(_0x3d7404);
  } finally {
    h.__unpin(_0x503f33);
    h.__unpin(_0x4235ef);
  }
}
async function zt() {
  if (x) {
    return;
  }
  const _0x4cd9e1 = await Jt(vt);
  const _0x2f62d7 = document.createElement("canvas");
  _0x2f62d7.width = _0x4cd9e1.width;
  _0x2f62d7.height = _0x4cd9e1.height;
  const _0x95df3c = _0x2f62d7.getContext("2d");
  _0x95df3c.drawImage(_0x4cd9e1, 0, 0);
  const _0x584225 = _0x95df3c.getImageData(0, 0, _0x2f62d7.width, _0x2f62d7.height);
  const _0x412743 = Gt(_0x584225.data, _0x2f62d7.width, _0x2f62d7.height);
  if (!_0x412743) {
    throw new Error("alpha map not found");
  }
  const _0x1089d3 = document.createElement("canvas");
  _0x1089d3.width = _0x412743.width;
  _0x1089d3.height = _0x412743.height;
  _0x1089d3.getContext("2d").drawImage(_0x2f62d7, _0x412743.x, _0x412743.y, _0x412743.width, _0x412743.height, 0, 0, _0x412743.width, _0x412743.height);
  x = {
    width: _0x2f62d7.width,
    height: _0x2f62d7.height,
    bounds: _0x412743,
    marginRight: _0x2f62d7.width - _0x412743.x - _0x412743.width,
    marginBottom: _0x2f62d7.height - _0x412743.y - _0x412743.height,
    cropCanvas: _0x1089d3
  };
}
function Gt(_0x371103, _0x3c886b, _0x4d997b) {
  let _0x253bc6 = _0x3c886b;
  let _0xd4f314 = _0x4d997b;
  let _0x5a38c4 = -1;
  let _0x3c6562 = -1;
  for (let _0x55ed6f = 0; _0x55ed6f < _0x4d997b; _0x55ed6f += 1) {
    for (let _0x65b118 = 0; _0x65b118 < _0x3c886b; _0x65b118 += 1) {
      const _0x31a371 = (_0x55ed6f * _0x3c886b + _0x65b118) * 4 + 3;
      _0x371103[_0x31a371] > 5 && (_0x253bc6 = Math.min(_0x253bc6, _0x65b118), _0xd4f314 = Math.min(_0xd4f314, _0x55ed6f), _0x5a38c4 = Math.max(_0x5a38c4, _0x65b118), _0x3c6562 = Math.max(_0x3c6562, _0x55ed6f));
    }
  }
  return _0x5a38c4 < 0 || _0x3c6562 < 0 ? null : {
    x: _0x253bc6,
    y: _0xd4f314,
    width: _0x5a38c4 - _0x253bc6 + 1,
    height: _0x3c6562 - _0xd4f314 + 1
  };
}
function Ut(_0x4a92ea, _0x176fa0) {
  const _0x1cf118 = _0x4a92ea / x.width;
  const _0x4c2796 = _0x176fa0 / x.height;
  const _0x371e5a = Math.max(1, Math.round(x.bounds.width * _0x1cf118));
  const _0x200607 = Math.max(1, Math.round(x.bounds.height * _0x4c2796));
  const _0x4b4fee = Math.round(x.marginRight * _0x1cf118);
  const _0x184703 = Math.round(x.marginBottom * _0x4c2796);
  const _0x66706b = Math.max(0, _0x4a92ea - _0x4b4fee - _0x371e5a);
  const _0x4d6cde = Math.max(0, _0x176fa0 - _0x184703 - _0x200607);
  return {
    x: _0x66706b,
    y: _0x4d6cde,
    width: _0x371e5a,
    height: _0x200607
  };
}
function Zt(_0x2ade00, _0x571b21) {
  const _0x5caf47 = _0x2ade00 + "x" + _0x571b21;
  if (nt.has(_0x5caf47)) {
    return nt.get(_0x5caf47);
  }
  const _0x168fe7 = document.createElement("canvas");
  _0x168fe7.width = _0x2ade00;
  _0x168fe7.height = _0x571b21;
  const _0x524638 = _0x168fe7.getContext("2d");
  _0x524638.imageSmoothingEnabled = false;
  _0x524638.drawImage(x.cropCanvas, 0, 0, _0x2ade00, _0x571b21);
  const _0x26afe6 = _0x524638.getImageData(0, 0, _0x2ade00, _0x571b21).data;
  const _0x4c7f55 = new Float32Array(_0x2ade00 * _0x571b21);
  for (let _0x1f21e8 = 0; _0x1f21e8 < _0x4c7f55.length; _0x1f21e8 += 1) {
    _0x4c7f55[_0x1f21e8] = _0x26afe6[_0x1f21e8 * 4 + 3] / 255;
  }
  nt.set(_0x5caf47, _0x4c7f55);
  return _0x4c7f55;
}
function Nt(_0x42431c, _0x2d55ae, _0x9e3f50) {
  const {
    x: _0x514d0b,
    y: _0x364929,
    width: _0xf1b3c9,
    height: _0x185339
  } = _0x2d55ae;
  const _0x1b8ed9 = _0x42431c.data;
  const _0x23c950 = _0x42431c.width;
  for (let _0x25dd05 = 0; _0x25dd05 < _0x185339; _0x25dd05 += 1) {
    for (let _0x37fc0f = 0; _0x37fc0f < _0xf1b3c9; _0x37fc0f += 1) {
      if (_0x9e3f50 && _0x9e3f50[_0x25dd05 * _0xf1b3c9 + _0x37fc0f] < 0.005) {
        continue;
      }
      const _0x5f46f5 = ((_0x364929 + _0x25dd05) * _0x23c950 + (_0x514d0b + _0x37fc0f)) * 4;
      const _0x495e10 = 0.299 * _0x1b8ed9[_0x5f46f5] + 0.587 * _0x1b8ed9[_0x5f46f5 + 1] + 0.114 * _0x1b8ed9[_0x5f46f5 + 2];
      const _0x1f958f = [];
      const _0x2ca34b = [];
      const _0x166cfd = [];
      const _0x36bf22 = [];
      for (let _0x136f96 = -1; _0x136f96 <= 1; _0x136f96 += 1) {
        const _0x4552b6 = Math.min(Math.max(_0x25dd05 + _0x136f96, 0), _0x185339 - 1);
        for (let _0x1bd1e9 = -1; _0x1bd1e9 <= 1; _0x1bd1e9 += 1) {
          const _0x2e2b10 = Math.min(Math.max(_0x37fc0f + _0x1bd1e9, 0), _0xf1b3c9 - 1);
          const _0x53dea4 = ((_0x364929 + _0x4552b6) * _0x23c950 + (_0x514d0b + _0x2e2b10)) * 4;
          _0x1f958f.push(0.299 * _0x1b8ed9[_0x53dea4] + 0.587 * _0x1b8ed9[_0x53dea4 + 1] + 0.114 * _0x1b8ed9[_0x53dea4 + 2]);
          _0x2ca34b.push(_0x1b8ed9[_0x53dea4]);
          _0x166cfd.push(_0x1b8ed9[_0x53dea4 + 1]);
          _0x36bf22.push(_0x1b8ed9[_0x53dea4 + 2]);
        }
      }
      const _0x2246e6 = Y(_0x1f958f);
      _0x495e10 + bt < _0x2246e6 && (_0x1b8ed9[_0x5f46f5] = Y(_0x2ca34b), _0x1b8ed9[_0x5f46f5 + 1] = Y(_0x166cfd), _0x1b8ed9[_0x5f46f5 + 2] = Y(_0x36bf22));
    }
  }
}
function Y(_0x5dd478) {
  _0x5dd478.sort((_0xd1cf3b, _0x4c3bc0) => _0xd1cf3b - _0x4c3bc0);
  return _0x5dd478[4];
}
function Ht(_0x52fb48, _0x3d1983, _0x53f900) {
  const {
    x: _0x3e42be,
    y: _0x252a15,
    width: _0x4e45c1,
    height: _0x54886b
  } = _0x3d1983;
  const _0x513422 = _0x52fb48.data;
  const _0x4ae82e = _0x52fb48.width;
  const _0x185d82 = 0.15;
  for (let _0xbecb14 = 0; _0xbecb14 < _0x54886b; _0xbecb14 += 1) {
    for (let _0x47a259 = 0; _0x47a259 < _0x4e45c1; _0x47a259 += 1) {
      if (_0x53f900 && _0x53f900[_0xbecb14 * _0x4e45c1 + _0x47a259] < 0.005) {
        continue;
      }
      let _0x2f2511 = 0;
      let _0x3b0c70 = 0;
      let _0x32f63d = 0;
      for (let _0x31a350 = -1; _0x31a350 <= 1; _0x31a350 += 1) {
        const _0x54aeae = Math.min(Math.max(_0xbecb14 + _0x31a350, 0), _0x54886b - 1);
        for (let _0x433e43 = -1; _0x433e43 <= 1; _0x433e43 += 1) {
          const _0x30fca7 = Math.min(Math.max(_0x47a259 + _0x433e43, 0), _0x4e45c1 - 1);
          const _0x3419ec = ((_0x252a15 + _0x54aeae) * _0x4ae82e + (_0x3e42be + _0x30fca7)) * 4;
          _0x2f2511 += _0x513422[_0x3419ec];
          _0x3b0c70 += _0x513422[_0x3419ec + 1];
          _0x32f63d += _0x513422[_0x3419ec + 2];
        }
      }
      const _0x12cd37 = ((_0x252a15 + _0xbecb14) * _0x4ae82e + (_0x3e42be + _0x47a259)) * 4;
      const _0x4d91e5 = _0x2f2511 / 9;
      const _0x51ca14 = _0x3b0c70 / 9;
      const _0x199743 = _0x32f63d / 9;
      _0x513422[_0x12cd37] = Math.max(0, Math.min(255, Math.round(_0x513422[_0x12cd37] * (1 + _0x185d82) - _0x4d91e5 * _0x185d82)));
      _0x513422[_0x12cd37 + 1] = Math.max(0, Math.min(255, Math.round(_0x513422[_0x12cd37 + 1] * (1 + _0x185d82) - _0x51ca14 * _0x185d82)));
      _0x513422[_0x12cd37 + 2] = Math.max(0, Math.min(255, Math.round(_0x513422[_0x12cd37 + 2] * (1 + _0x185d82) - _0x199743 * _0x185d82)));
    }
  }
}
async function qt(_0x277a95, _0x38d154, _0x17e6b5) {
  await ht();
  const _0x303984 = _0x277a95.width;
  const _0x5b0058 = _0x277a95.height;
  const _0x501ded = new Uint8ClampedArray(_0x303984 * _0x5b0058);
  const {
    x: _0x3a0b76,
    y: _0x162304,
    width: _0x536244,
    height: _0x43dda8
  } = _0x38d154;
  for (let _0x398fda = 0; _0x398fda < _0x43dda8; _0x398fda += 1) {
    for (let _0x52fbbd = 0; _0x52fbbd < _0x536244; _0x52fbbd += 1) {
      _0x17e6b5[_0x398fda * _0x536244 + _0x52fbbd] < 0.005 || (_0x501ded[(_0x162304 + _0x398fda) * _0x303984 + (_0x3a0b76 + _0x52fbbd)] = 255);
    }
  }
  Vt(_0x501ded, _0x303984, _0x5b0058, 1);
  const _0x18a183 = cv.matFromImageData(_0x277a95);
  const _0x2acb57 = new cv.Mat();
  cv.cvtColor(_0x18a183, _0x2acb57, cv.COLOR_RGBA2RGB);
  const _0x7b7678 = cv.matFromArray(_0x5b0058, _0x303984, cv.CV_8UC1, _0x501ded);
  const _0x253176 = new cv.Mat();
  cv.inpaint(_0x2acb57, _0x7b7678, _0x253176, 3, cv.INPAINT_TELEA);
  const _0x107892 = new cv.Mat();
  cv.cvtColor(_0x253176, _0x107892, cv.COLOR_RGB2RGBA);
  _0x277a95.data.set(_0x107892.data);
  _0x18a183.delete();
  _0x2acb57.delete();
  _0x7b7678.delete();
  _0x253176.delete();
  _0x107892.delete();
}
function ht() {
  return Z || (Z = new Promise((_0x17f945, _0x1b2804) => {
    if (window.cv && window.cv.Mat) {
      _0x17f945();
      return;
    }
    const _0x508b4b = document.createElement("script");
    _0x508b4b.src = "https://docs.opencv.org/4.x/opencv.js";
    _0x508b4b.async = true;
    _0x508b4b.onload = () => {
      window.cv && window.cv.Mat ? _0x17f945() : window.cv ? window.cv.onRuntimeInitialized = () => _0x17f945() : _0x1b2804(new Error("OpenCV not available"));
    };
    _0x508b4b.onerror = () => _0x1b2804(new Error("Failed to load OpenCV.js"));
    document.head.appendChild(_0x508b4b);
  }), Z);
}
function Vt(_0x59decc, _0x534b54, _0x26b8c1, _0x38365d) {
  if (_0x38365d <= 0) {
    return;
  }
  const _0x393461 = _0x59decc.slice();
  for (let _0x2d9de1 = 0; _0x2d9de1 < _0x26b8c1; _0x2d9de1 += 1) {
    for (let _0x2435e4 = 0; _0x2435e4 < _0x534b54; _0x2435e4 += 1) {
      if (_0x393461[_0x2d9de1 * _0x534b54 + _0x2435e4] !== 0) {
        for (let _0x3e6cda = -_0x38365d; _0x3e6cda <= _0x38365d; _0x3e6cda += 1) {
          const _0x435c67 = _0x2d9de1 + _0x3e6cda;
          if (!(_0x435c67 < 0 || _0x435c67 >= _0x26b8c1)) {
            for (let _0x467b0d = -_0x38365d; _0x467b0d <= _0x38365d; _0x467b0d += 1) {
              const _0x5b9a13 = _0x2435e4 + _0x467b0d;
              _0x5b9a13 < 0 || _0x5b9a13 >= _0x534b54 || (_0x59decc[_0x435c67 * _0x534b54 + _0x5b9a13] = 255);
            }
          }
        }
      }
    }
  }
}
async function Yt(_0x4971d6, _0x39d1ad, _0x483568) {
  try {
    await qt(_0x4971d6, _0x39d1ad, _0x483568);
  } catch (_0xc806c8) {
    if (console.error(_0xc806c8), H()) {
      throw L("OpenCV is required for PDF mode."), _0xc806c8;
    }
    L("inpaint failed, fallback to normal mode.");
  }
}
function Jt(_0x30c86a) {
  return new Promise((_0x22576e, _0x34a10c) => {
    const _0x436737 = new Image();
    _0x436737.onload = () => _0x22576e(_0x436737);
    _0x436737.onerror = _0x34a10c;
    _0x436737.src = _0x30c86a;
  });
}
async function Xt(_0x2c4f7b) {
  R("found " + _0x2c4f7b.length + " image(s)");
  const _0x5102bd = [];
  for (const _0x4fe189 of _0x2c4f7b) {
    const _0x432809 = await ft(_0x4fe189);
    _0x5102bd.push(_0x432809);
    rt(_0x432809);
    st(_0x5102bd.length, _0x2c4f7b.length);
  }
  _0x5102bd.length > 1 && (P = await ct(_0x5102bd), B.classList.remove("hidden"));
  M.textContent = "Processed " + _0x5102bd.length + " image(s).";
}
async function ft(_0x1b9a42) {
  const _0x5de97e = await createImageBitmap(_0x1b9a42);
  const _0x5b2e34 = document.createElement("canvas");
  _0x5b2e34.width = _0x5de97e.width;
  _0x5b2e34.height = _0x5de97e.height;
  const _0x193b76 = _0x5b2e34.getContext("2d");
  _0x193b76.drawImage(_0x5de97e, 0, 0);
  const _0x470ffd = _0x193b76.getImageData(0, 0, _0x5b2e34.width, _0x5b2e34.height);
  const _0x218769 = Ut(_0x5b2e34.width, _0x5b2e34.height);
  const _0xae30f4 = Zt(_0x218769.width, _0x218769.height);
  jt(_0x470ffd, _0x218769, _0xae30f4);
  Nt(_0x470ffd, _0x218769, _0xae30f4);
  St() && (f.textContent = "inpaint running...", await Yt(_0x470ffd, _0x218769, _0xae30f4));
  Ht(_0x470ffd, _0x218769, _0xae30f4);
  _0x193b76.putImageData(_0x470ffd, 0, 0);
  const _0x57c211 = Tt();
  const _0x43b1ca = await wt(_0x5b2e34, _0x57c211.type, _0x57c211.quality);
  return {
    name: _0x1b9a42.name.replace(/\.[^.]+$/, "") + ("." + _0x57c211.ext),
    blob: _0x43b1ca,
    type: _0x57c211.type,
    width: _0x5b2e34.width,
    height: _0x5b2e34.height
  };
}
async function pt(_0x4689c7, _0x3ee742) {
  const _0x3e54f8 = Kt(_0x3ee742) || _0x4689c7.type || "image/png";
  const _0x3383c8 = new File([_0x4689c7], _0x3ee742, {
    type: _0x3e54f8
  });
  return ft(_0x3383c8);
}
function Kt(_0x2207aa) {
  const _0x3d7f1a = _0x2207aa.toLowerCase();
  return _0x3d7f1a.endsWith(".png") ? "image/png" : _0x3d7f1a.endsWith(".jpg") || _0x3d7f1a.endsWith(".jpeg") ? "image/jpeg" : _0x3d7f1a.endsWith(".webp") ? "image/webp" : "";
}
function rt(_0x1eebbb) {
  const _0x2ae41b = URL.createObjectURL(_0x1eebbb.blob);
  const _0x198717 = document.createElement("div");
  _0x198717.className = "preview-card";
  _0x198717.innerHTML = "\n    <img class=\"preview-img\" src=\"" + _0x2ae41b + "\" alt=\"preview\" data-zoomable>\n    <div class=\"muted\">" + _0x1eebbb.name + "</div>\n    <div class=\"progress-row\">\n      <span class=\"tag\">" + _0x1eebbb.width + "x" + _0x1eebbb.height + "</span>\n      <button class=\"btn\">下载</button>\n    </div>\n  ";
  _0x198717.querySelector("button").addEventListener("click", () => it(_0x1eebbb.blob, _0x1eebbb.name));
  tt.appendChild(_0x198717);
  Rt();
}
function st(_0x43c14e, _0x2b2fd9) {
  D && (D.textContent = String(_0x43c14e));
  k && (k.textContent = String(_0x2b2fd9));
}
async function ct(_0x4b4946) {
  const _0x31258a = new _0x356d81();
  _0x4b4946.forEach(_0x4c26db => {
    _0x31258a.file(_0x4c26db.name, _0x4c26db.blob);
  });
  return _0x31258a.generateAsync({
    type: "blob"
  });
}
function wt(_0x5c23c5, _0x8e09df, _0x2fe751) {
  return new Promise(_0xea3d15 => {
    _0x5c23c5.toBlob(_0x5b67d2 => _0xea3d15(_0x5b67d2), _0x8e09df, _0x2fe751);
  });
}
async function Qt(_0x3017fb) {
  R("loading zip: " + _0x3017fb.name);
  const _0x40fc28 = await _0x356d81.loadAsync(await _0x3017fb.arrayBuffer());
  const _0x54b46c = Object.values(_0x40fc28.files).filter(_0x325629 => !_0x325629.dir).filter(_0x2adb65 => te(_0x2adb65.name));
  if (_0x54b46c.length === 0) {
    throw new Error("zip contains no images");
  }
  const _0xe0c4d2 = [];
  let _0x469591 = 0;
  for (const _0x151e28 of _0x54b46c) {
    _0x469591 += 1;
    const _0x363dd9 = await _0x151e28.async("blob");
    const _0x4fb134 = await pt(_0x363dd9, _0x151e28.name);
    _0xe0c4d2.push(_0x4fb134);
    rt(_0x4fb134);
    st(_0x469591, _0x54b46c.length);
  }
  P = await ct(_0xe0c4d2);
  B.classList.remove("hidden");
  R("zip processed");
  M.textContent = "ZIP ready. Images: " + _0xe0c4d2.length + ".";
}
function te(_0x55ce3a) {
  const _0xde451f = _0x55ce3a.toLowerCase();
  return _0xde451f.endsWith(".png") || _0xde451f.endsWith(".jpg") || _0xde451f.endsWith(".jpeg") || _0xde451f.endsWith(".webp");
}
async function ee(_0x1084e5) {
  R("loading pdf: " + _0x1084e5.name);
  const _0x81d982 = await _0x1084e5.arrayBuffer();
  const _0x81c569 = await _0x3b28d3.getDocument({
    data: _0x81d982
  }).promise;
  const _0x39ba97 = [];
  Q.textContent = "PDF pages: " + _0x81c569.numPages;
  R("processing " + _0x81c569.numPages + " pages...");
  M.textContent = "PDF mode locked: OpenCV + JPG (quality=1.0) + PDF output + 2.0x render.";
  for (let _0x55eb0d = 1; _0x55eb0d <= _0x81c569.numPages; _0x55eb0d += 1) {
    f.textContent = "extracting page " + _0x55eb0d + "/" + _0x81c569.numPages + "...";
    await J();
    const _0x5613df = await _0x81c569.getPage(_0x55eb0d);
    let _0x364bec = await ne(_0x5613df);
    _0x364bec || (_0x364bec = await oe(_0x5613df));
    const _0x3fe571 = await wt(_0x364bec, "image/png");
    f.textContent = "processing page " + _0x55eb0d + "/" + _0x81c569.numPages + "...";
    await J();
    const _0x453217 = await pt(_0x3fe571, "page_" + String(_0x55eb0d).padStart(3, "0"));
    _0x39ba97.push(_0x453217);
    Ft() && rt(_0x453217);
    st(_0x55eb0d, _0x81c569.numPages);
  }
  f.textContent = "building zip...";
  await J();
  try {
    P = await ct(_0x39ba97);
    B.classList.remove("hidden");
  } catch (_0x1bde2c) {
    console.error(_0x1bde2c);
    L("ZIP build failed.");
  }
  if ($t()) {
    f.textContent = "building pdf...";
    await J();
    try {
      _ = await ie(_0x39ba97);
      W.classList.remove("hidden");
    } catch (_0x4984e2) {
      console.error(_0x4984e2);
      L("PDF build failed.");
    }
  } else {
    _ = null;
    W.classList.add("hidden");
  }
  R("pdf processed");
  M.textContent = "PDF ready. Pages: " + _0x39ba97.length + ".";
}
function J() {
  return new Promise(_0x2687ba => requestAnimationFrame(() => _0x2687ba()));
}
async function ne(_0x16ee99) {
  try {
    const _0x115451 = await _0x16ee99.getOperatorList();
    const _0x13113d = _0x3b28d3.OPS || {};
    const _0x30c6e5 = new Set([_0x13113d.paintImageXObject, _0x13113d.paintJpegXObject, _0x13113d.paintInlineImageXObject]);
    let _0x11fe5e = null;
    for (let _0xed8340 = 0; _0xed8340 < _0x115451.fnArray.length; _0xed8340 += 1) {
      if (_0x30c6e5.has(_0x115451.fnArray[_0xed8340])) {
        const _0x56194c = _0x115451.argsArray[_0xed8340];
        _0x11fe5e = _0x56194c && _0x56194c[0];
        break;
      }
    }
    if (!_0x11fe5e) {
      return null;
    }
    let _0x381179 = null;
    try {
      _0x381179 = _0x16ee99.objs.get(_0x11fe5e);
    } catch {
      return null;
    }
    if (!_0x381179 || !_0x381179.data || !_0x381179.width || !_0x381179.height) {
      return null;
    }
    const _0x32c7f2 = ae(_0x381179);
    if (!_0x32c7f2) {
      return null;
    }
    const _0x56a03d = document.createElement("canvas");
    _0x56a03d.width = _0x381179.width;
    _0x56a03d.height = _0x381179.height;
    _0x56a03d.getContext("2d").putImageData(new ImageData(_0x32c7f2, _0x381179.width, _0x381179.height), 0, 0);
    return _0x56a03d;
  } catch {
    return null;
  }
}
function ae(_0x180be8) {
  const _0x638a03 = _0x180be8.kind;
  const _0xd4018c = _0x180be8.data;
  if (_0x638a03 === _0x3b28d3.ImageKind.RGBA_32BPP && _0xd4018c.length === _0x180be8.width * _0x180be8.height * 4) {
    return new Uint8ClampedArray(_0xd4018c);
  }
  if (_0x638a03 === _0x3b28d3.ImageKind.RGB_24BPP && _0xd4018c.length === _0x180be8.width * _0x180be8.height * 3) {
    const _0x23715f = new Uint8ClampedArray(_0x180be8.width * _0x180be8.height * 4);
    for (let _0x19ed16 = 0; _0x19ed16 < _0x180be8.width * _0x180be8.height; _0x19ed16 += 1) {
      _0x23715f[_0x19ed16 * 4] = _0xd4018c[_0x19ed16 * 3];
      _0x23715f[_0x19ed16 * 4 + 1] = _0xd4018c[_0x19ed16 * 3 + 1];
      _0x23715f[_0x19ed16 * 4 + 2] = _0xd4018c[_0x19ed16 * 3 + 2];
      _0x23715f[_0x19ed16 * 4 + 3] = 255;
    }
    return _0x23715f;
  }
  return null;
}
async function oe(_0x322eb1) {
  const _0x544747 = _0x322eb1.getViewport({
    scale: Ot()
  });
  const _0x55d6ef = document.createElement("canvas");
  _0x55d6ef.width = _0x544747.width;
  _0x55d6ef.height = _0x544747.height;
  const _0x11b60d = _0x55d6ef.getContext("2d");
  _0x11b60d.imageSmoothingEnabled = false;
  await _0x322eb1.render({
    canvasContext: _0x11b60d,
    viewport: _0x544747
  }).promise;
  return _0x55d6ef;
}
async function ie(_0x59fbdd) {
  const _0x37496d = await _0x4575de.create();
  for (const _0x46a97a of _0x59fbdd) {
    const _0x214f78 = await _0x46a97a.blob.arrayBuffer();
    const _0x20ebfd = _0x46a97a.type === "image/jpeg" ? await _0x37496d.embedJpg(_0x214f78) : await _0x37496d.embedPng(_0x214f78);
    _0x37496d.addPage([_0x20ebfd.width, _0x20ebfd.height]).drawImage(_0x20ebfd, {
      x: 0,
      y: 0,
      width: _0x20ebfd.width,
      height: _0x20ebfd.height
    });
  }
  const _0x245e00 = await _0x37496d.save();
  return new Blob([_0x245e00], {
    type: "application/pdf"
  });
}