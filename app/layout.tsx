import "./globals.css";
import type { Metadata } from "next";
import Gate from "./components/Gate";

export const metadata: Metadata = {
title: "Aidan Lewertoff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="fr">
<body style={{ margin: 0 }}>
<Gate password="fag">
<header
style={{
position: "sticky",
top: 0,
zIndex: 10,

padding: 40,
display: "flex",
justifyContent: "space-between",
alignItems: "baseline",
background: "white",
}}
>
<div style={{ fontSize: 45, lineHeight: 1, fontWeight: 600 }}>
Aidan
</div>
<div style={{ fontSize: 45, lineHeight: 1, fontWeight: 600 }}>
Lewertoff
</div>
</header>

<div style={{ padding: 24, paddingTop: 0 }}>{children}</div>
</Gate>
</body>
</html>
);
}