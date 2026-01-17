import "./globals.css";
import type { Metadata } from "next";
import Gate from "./components/Gate";

export const metadata: Metadata = {
title: "Aidan Lewertoff",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="fr">
<body style={{ margin: 0 }}>
<Gate password="fag">
{/* CALQUE GLOBAL (haut + bas) */}
<div
style={{
position: "fixed",
inset: 0,
zIndex: 10,
pointerEvents: "none",
}}
>
{/* HEADER (haut) */}
<header
style={{
position: "absolute",
top: 0,
left: 0,
right: 0,
padding: 40,
display: "flex",
justifyContent: "space-between",
alignItems: "baseline",
pointerEvents: "auto",
}}
>
<div style={{ fontSize: 45, lineHeight: 1, fontWeight: 600 }}>
Aidan
</div>
<div style={{ fontSize: 45, lineHeight: 1, fontWeight: 600 }}>
Lewertoff
</div>
</header>

{/* FOOTER (bas) */}
<footer
style={{
position: "absolute",
bottom: 0,
left: 0,
right: 0,
padding: 40,
display: "flex",
justifyContent: "space-between",
alignItems: "baseline",
background: "white",
pointerEvents: "auto",
fontSize: 15,
}}
>
<div>design@lewertoff.com</div>
<div>+41 792 25 22</div>
</footer>
</div>

{/* CONTENU */}
<div style={{ padding: 24, paddingTop: 140 }}>{children}</div>
</Gate>
</body>
</html>
);
}