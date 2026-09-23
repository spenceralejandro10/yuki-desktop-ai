(async()=>{
  const config=await fetch("../../config/animations.json").then(r=>r.json());
  const image=document.getElementById("yuki");
  const controls=document.getElementById("controls");
  const animator=new window.YukiAnimator(image,config);
  Object.keys(config).forEach(name=>{
    const b=document.createElement("button"); b.textContent=name;
    b.onclick=()=>animator.play(name); controls.appendChild(b);
  });
  animator.play("idle");
})();
