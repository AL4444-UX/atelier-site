import Link from "next/link";
import { projects } from "../../../data/projects";

const RIBBON_H = 500;
const DEFAULT_IMG_W = 500;

export default async function ProjectPage({
params,
}: {
params: Promise<{ slug: string }>;
}) {
const { slug } = await params;

const project = projects.find((p) => p.slug === slug);

if (!project) {
return (
<main style={{ padding: 20 }}>
<p>Projet introuvable</p>
<Link href="/" style={{ color: "#000", textDecoration: "none" }}>
← Retour accueil
</Link>
</main>
);
}

const ribbonW = project.images.reduce(
(sum, img) => sum + (img.w ?? DEFAULT_IMG_W),
0
);

return (
<main style={{ padding: " 0 20px" }}>
{/* RETOUR */}
<Link
href="/"
style={{
display: "inline-block",
marginBottom: 10,
color: "#828080",
textDecoration: "none",
paddingLeft: 18
}}
>
← Retour
</Link>

{/* TITRE – niveau header, centré écran */}
<div
style={{
width: "100%",
display: "flex",
justifyContent: "center",
marginTop: -100,
marginBottom: 100,
}}
>
<h1
style={{
fontSize: 28,
fontWeight: 400,
letterSpacing: 1,
margin: 0,
}}
>
{project.title}
</h1>
</div>

{/* RUBAN */}
<div
style={{
height: RIBBON_H,
width: "100%",
overflowX: "auto",
overflowY: "hidden",
}}
>
<div
style={{
display: "flex",
height: "100%",
width: ribbonW,
}}
>
{project.images.map((img) => (
<img
key={img.src}
src={img.src}
alt={img.alt}
className="projectRibbonImg"
style={{
width: 1000,
objectFit: "contain",
flexShrink: 0,
}}
/>
))}
</div>
</div>

{/* TEXTE */}
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