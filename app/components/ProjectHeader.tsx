export default function ProjectHeader({ title }: { title: string }) {
return (
<div style={{ marginBottom: 18 }}>
<div style={{ fontSize: 48, lineHeight: 1, fontWeight: 700 }}>{title}</div>
</div>
);
}