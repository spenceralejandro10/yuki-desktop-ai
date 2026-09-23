(async()=>{
  const config=await fetch("../../config/animations.json").then(r=>r.json());
  const image=document.getElementById("yuki");
  const controls=document.getElementById("controls");
  const animator=new window.YukiAnimator(image,config);
  const etiquetas={
    "idle":"Reposo",
    "walk-left":"Caminar izquierda",
    "walk-right":"Caminar derecha",
    "run-left":"Correr izquierda",
    "run-right":"Correr derecha",
    "talk":"Hablar",
    "listen":"Escuchar",
    "think":"Pensar",
    "wave":"Saludar",
    "jump":"Saltar",
    "sit":"Sentarse",
    "sleep":"Dormir"
  };
  Object.keys(config).forEach(name=>{
    const b=document.createElement("button");
    b.textContent=etiquetas[name]||name;
    b.onclick=()=>animator.play(name);
    controls.appendChild(b);
  });
  animator.play("idle");
})();
