import "./globals.css";
import type { Metadata, Viewport } from "next";
import Gate from "./components/Gate";

export const metadata: Metadata = {
title: "Aidan Lewertoff",
};

export const viewport: Viewport = {
width: "device-width",
initialScale: 1,
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
{/* CALQUE GLOBAL */}
<div
style={{
position: "fixed",
inset: 0,
zIndex: 10,
pointerEvents: "none",
}}
>
{/* HEADER */}
<header
style={{
position: "absolute",
top: 0,
left: 0,
right: 0,
padding: "clamp(14px, 4vw, 40px)",
display: "flex",
justifyContent: "space-between",
alignItems: "baseline",
pointerEvents: "auto",
}}
>
<div
style={{
fontSize: "clamp(22px, 7vw, 45px)",
lineHeight: 1,
fontWeight: 600,
}}
>
Aidan
</div>

<div
style={{
fontSize: "clamp(22px, 7vw, 45px)",
lineHeight: 1,
fontWeight: 600,
}}
>
Lewertoff
</div>
</header>

{/* FOOTER */}
<footer
style={{
position: "absolute",
bottom: 0,
left: 0,
right: 0,
padding: "clamp(14px, 4vw, 40px)",
display: "flex",
justifyContent: "space-between",
alignItems: "baseline",
background: "white",
pointerEvents: "auto",
fontSize: "clamp(12px, 3.2vw, 15px)",
}}
>
<a
href="mailto:design@lewertoff.com"
style={{
color: "inherit",
textDecoration: "none",
cursor: "pointer",
}}
>
design@lewertoff.com
</a>

<a
href="tel:+417922522"
style={{
color: "inherit",
textDecoration: "none",
cursor: "pointer",
}}
>
+41 792 25 22
</a>
</footer>
</div>

{/* CONTENU */}
<div
style={{
padding: "clamp(12px, 3vw, 24px)",
paddingTop: "clamp(80px, 14vw, 120px)", // place header
paddingBottom: "clamp(80px, 16vw, 140px)", // place footer
}}
>
{children}
</div>
</Gate>
</body>
</html>
);
}