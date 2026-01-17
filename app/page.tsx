import Link from "next/link";
import { projects } from "../data/projects";

const RIBBON_H = 90;
const GAP = 20;
const DEFAULT_IMG_W = 120;

export default function Home() {
return (
<main style={{ paddingTop: 40, paddingRight: 24, paddingBottom: 24, paddingLeft: 35 }}>
<div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
{projects.map((p) => {
// ✅ largeur "réelle" du ruban = somme des largeurs d’images
const ribbonNaturalW = p.images.reduce((sum, img) => sum + (img.w ?? DEFAULT_IMG_W), 0);

// si tu veux forcer un ruban précis, tu peux mettre p.ribbonWidth dans data
const ribbonW = p.ribbonWidth ?? ribbonNaturalW;

return (
<Link
key={p.slug}
href={`/projects/${p.slug}`}
style={{ color: "inherit", textDecoration: "none", display: "block" }}
>
<div style={{ display: "flex", alignItems: "center" }}>
{/* Ruban */}
<div style={{ width: ribbonW, height: RIBBON_H, overflow: "hidden" }}>
<div style={{ display: "flex", height: "100%" }}>
{p.images.map((img) => (
<img
key={img.src}
src={img.src}
alt={img.alt}
draggable={false}
style={{
height: "100%",
width: img.w ?? DEFAULT_IMG_W, // ✅ chaque image a une largeur contrôlée
objectFit: "cover",
display: "block",
}}
/>
))}
</div>
</div>

{/* 20px fixes */}
<div style={{ width: GAP }} />

{/* Titre */}
<div
style={{
height: RIBBON_H,
display: "flex",
alignItems: "center",
whiteSpace: "nowrap",
}}
>
<div style={{ fontSize: RIBBON_H, lineHeight: 0.85, letterSpacing: -0.5 }}>
{p.title}
</div>
</div>
</div>
</Link>
);
})}
</div>
</main>
);
}