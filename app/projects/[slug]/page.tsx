import Link from "next/link";
import { projects } from "../../../data/projects";

const RIBBON_H = 500;
// 16:9 quand la hauteur fait 500 -> ~889
const DEFAULT_IMG_W = 890;

export default async function ProjectPage({
params,
}: {
params: Promise<{ slug: string }>;
}) {
const { slug } = await params;

const project = projects.find((p) => p.slug === slug);

if (!project) {
return (
<main style={{ padding: "20px" }}>
<p>Projet introuvable</p>
<Link
href="/"
style={{ color: "#000", textDecoration: "none", display: "inline-block" }}
>
← Retour accueil
</Link>
</main>
);
}

// largeur totale du ruban = addition des largeurs de chaque image
const ribbonW = project.images.reduce(
(sum, img) => sum + (img.wProject ?? DEFAULT_IMG_W),
0
);

return (
<main className="projectPage">
{/* RETOUR (plus haut, sous "Aidan") */}
<Link 
href="/" className="projectBack"
style={{
display: "inline-block",
paddingLeft: 65, // aligné avec le header (padding 40)
top: 100, // remonte sous “Aidan”
marginBottom: 0,
color: "#c61818",
textDecoration: "none",
fontSize: 14,
position: "fixed",
zIndex: 20,
}}
>
← Retour
</Link>



{/* RUBAN (500px de haut, scroll horizontal si ça dépasse) */}
<div
style={{
height: RIBBON_H,
width: "100vw",
overflowX: "auto",
overflowY: "hidden",
position: "relative",
left: "50%",
transform: "translateX(-50%)",
paddingLeft: 35,
paddingRight: 35,
}}
>
<div
style={{
display: "flex",
height: "100%",
width: ribbonW, // IMPORTANT: force la vraie largeur du ruban
}}
>
{project.images.map((img) => (
<img
key={img.src}
src={img.src}
alt={img.alt}
style={{
height: "100%",
width: img.wProject ?? DEFAULT_IMG_W, // ✅ largeur individuelle
objectFit: "contain",
flexShrink: 0,
display: "block",
}}
/>
))}
</div>
</div>

{/* TEXTE (20px sous les images) */}
{project.description && (
<p
style={{
marginTop: 20,
maxWidth: 600,
fontSize: 14,
lineHeight: 1.6,
}}
>
{project.description}
</p>
)}
</main>
);
}