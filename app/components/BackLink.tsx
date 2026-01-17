import Link from "next/link";

export default function BackLink({ href = "/", label = "← Retour" }: { href?: string; label?: string }) {
return (
<div style={{ marginBottom: 18 }}>
<Link href={href} style={{ color: "inherit", textDecoration: "none" }}>
{label}
</Link>
</div>
);
}
