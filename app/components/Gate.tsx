"use client";

import { useEffect, useState } from "react";

export default function Gate({
children,
password,
}: {
children: React.ReactNode;
password: string;
}) {
const [input, setInput] = useState("");
const [ok, setOk] = useState(false);

useEffect(() => {
const saved = localStorage.getItem("fag_ok");
if (saved === "1") setOk(true);
}, []);

const submit = () => {
if (input === password) {
localStorage.setItem("fag_ok", "1");
setOk(true);
} else {
alert("Mot de passe incorrect");
setInput("");
}
};

if (ok) return <>{children}</>;

return (
<div
style={{
minHeight: "100vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
padding: 24,
}}
>
<div style={{ maxWidth: 360, width: "100%" }}>
<div style={{ fontSize: 20, marginBottom: 12 }}>Site en construction</div>
<input
type="password"
value={input}
onChange={(e) => setInput(e.target.value)}
onKeyDown={(e) => {
if (e.key === "Enter") submit();
}}
placeholder="Mot de passe"
style={{
width: "100%",
padding: 12,
fontSize: 16,
border: "1px solid #000",
outline: "none",
}}
/>
<button
onClick={submit}
style={{
marginTop: 12,
width: "100%",
padding: 12,
fontSize: 16,
border: "1px solid #000",
background: "#000",
color: "#fff",
cursor: "pointer",
}}
>
Entrer
</button>

<div style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
(Une fois validé, ton navigateur se souvient du mot de passe.)
</div>
</div>
</div>
);
}