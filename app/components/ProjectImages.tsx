type Img = { src: string; alt: string; w?: number };

export default function ProjectImages({
images,
defaultW = 260,
height = 500,
gap = 18,
}: {
images: Img[];
defaultW?: number;
height?: number;
gap?: number;
}) {
return (
<div style={{ display: "flex", gap, alignItems: "flex-start" }}>
{images.map((img) => (
<div key={img.src} style={{ width: img.w ?? defaultW, height }}>
<img
src={img.src}
alt={img.alt}
style={{
width: "100%",
height: "100%",
objectFit: "cover",
display: "block",
}}
/>
</div>
))}
</div>
);
}